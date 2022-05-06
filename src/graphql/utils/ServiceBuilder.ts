import { handleApolloErrors } from '@/graphql/utils/handleApolloErrors'
import { getData, getSingleObject } from '@/graphql/utils/utils'
import { GetServerSidePropsFunc } from '@/lib/withApollo'
import { useAppDispatch } from '@/store/index'
import { AppActions } from '@/store/slices/appSlice'
import {
   ApolloClient, ApolloError, DocumentNode, LazyQueryHookOptions, LazyQueryResult, MutationFunctionOptions, MutationHookOptions, QueryHookOptions,
   QueryLazyOptions, QueryOptions, QueryResult, useLazyQuery, useMutation, useQuery,
} from '@apollo/client'
import { GetServerSidePropsResultWithSession } from '@auth0/nextjs-auth0'
import { useToast } from '@chakra-ui/react'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface CreatorProps {
   table: string,
   document: DocumentNode,
   debug?: boolean,
   errorMessage?: string,
}

interface QueryCreatorProps extends CreatorProps, QueryHookOptions {
   type: 'object' | 'array' | 'aggregate',
}

interface SSRQueryCreatorProps {
   table: string,
   document: DocumentNode,
   debug?: boolean,
   onEmpty?: {
      redirectTo?: string,
   }
}

interface MutationCreatorProps extends CreatorProps, MutationHookOptions {
   successMessage?: string | { title: string, description: string }
}

type QueryCreatorReturn<V, D> = {
   clientQuery: (options?: QueryHookOptions) => [D, boolean, boolean, Omit<QueryResult, 'loading' | 'data' | 'error' | 'empty'>],
   clientLazyQuery: (options?: LazyQueryHookOptions) => [
      (options?: QueryLazyOptions<V>) => Promise<LazyQueryResult<any, any>>,
      D,
      boolean,
      boolean,
      Omit<QueryResult, 'data' | 'loading' | 'error'>
   ],
}

type SSRQueryCreatorReturn<V, D> = {
   queryFromServer: (options?: QueryHookOptions) => QueryResult<D, V>,
   serverQuery: (options?: (ctx: GetServerSidePropsContext) => Omit<QueryOptions<V, any>, 'query'>,
                 getServerSideProps?: GetServerSidePropsFunc<any>,
   ) => (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>, apolloClient: ApolloClient<any>) => any
   // serverQuery: any
}

type MutationCreatorReturn<V, D> = (options?: MutationHookOptions) => [
   (variables?: V, options?: MutationFunctionOptions) => any,
   boolean,
   boolean,
   D,
   { error?: ApolloError, called: boolean, client: ApolloClient<object>, reset(): void }
]

interface ServiceBuilder {
   createQuery: <V, D>(props: QueryCreatorProps) => QueryCreatorReturn<V, D>
   createSSRQuery: <V, D>(props: SSRQueryCreatorProps) => SSRQueryCreatorReturn<V, D>
   createMutation: <V, D>(props: MutationCreatorProps) => MutationCreatorReturn<V, D>
}

export const ServiceBuilder: ServiceBuilder = {
   createQuery<TVariables, TData>(props: QueryCreatorProps): QueryCreatorReturn<TVariables, TData> {
      
      const { table, document, type, debug = false, errorMessage, ...queryOptions } = props
      
      return {
         clientQuery: (options) => {
            const toast = useToast()
            const [returnData, setReturnData] = useState<any>(null)
            const [isEmpty, setIsEmpty] = useState<boolean>(false)
            
            // Execute query
            const queryResult: QueryResult<TData> = useQuery(document, {
               ...queryOptions,
               ...options,
            })
            
            const { loading, error, data, ...resultProperties } = queryResult
            
            // When we receive data
            useEffect(() => {
               
               if (!loading && data) {
                  setReturnData(type === 'object' ? getSingleObject(data[table]) : ( type === 'array'
                     ? getData(data[table])
                     : data[table + '_aggregate'] ))
               } else if (!loading) {
                  setReturnData(null)
               }
               
               if (error) {
                  handleApolloErrors(error, errorMessage, debug, toast)
                  setReturnData(null)
               }
               
            }, [loading, error, data])
            
            useEffect(() => {
               debug && console.log('[QueryHook]: Query concluded', '\n\tTable: ', table, '\n\tRaw data: ', data, '\n\tData: ', returnData)
               setIsEmpty(returnData === null)
            }, [returnData])
            
            return [returnData, loading, isEmpty, { ...resultProperties }]
            
         },
         /**
          * Lazy query
          * @param {LazyQueryHookOptions | undefined} options
          */
         clientLazyQuery: (options) => {
            const toast = useToast()
            const [returnData, setReturnData] = useState<any>(null)
            const [isEmpty, setIsEmpty] = useState<boolean>(false)
            
            // Execute query
            const lazyQueryResult = useLazyQuery(document, {
               ...queryOptions,
               ...options,
            })
            
            const [fetchFunction, { loading, error, data, ...resultProperties }] = lazyQueryResult
            
            useEffect(() => {
               debug && console.log('[LazyQueryHook]: Query concluded', '\n\tTable: ', table, '\n\tRaw data: ', data, '\n\tData: ', returnData)
               // setIsLoading(false)
               setIsEmpty(returnData === null)
            }, [returnData])
            
            useEffect(() => {
               
               if (!loading && data) {
                  setReturnData(type === 'object' ? getSingleObject(data[table]) : ( type === 'array'
                     ? getData(data[table])
                     : data[table + '_aggregate'] ))
               } else if (!loading) {
                  setReturnData(null)
               }
               
               if (error) {
                  handleApolloErrors(error, errorMessage, debug, toast)
                  setReturnData(null)
               }
               
            }, [loading, error, data])
            
            return [fetchFunction, returnData, loading, isEmpty, { ...resultProperties }]
            
         },
      }
   },
   createSSRQuery<TVariables, TData>(props) {
      
      const { document, table, debug = false, onEmpty } = props
      
      return {
         queryFromServer: (options) => {
            const queryResult: QueryResult<TData, any> = useQuery(document, {
               ...options,
            })
            return queryResult
         },
         serverQuery: (options?, getServerSideProps?: GetServerSidePropsFunc) => {
            
            
            return async function (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>, apolloClient: ApolloClient<any>,
            ): Promise<GetServerSidePropsResultWithSession> {
               
               debug && console.log('[SSR Query]: Started,', `Table: ${table}, Options:`, options ? options(ctx) : null)
               
               let ret: any = { props: {} }
               
               
               try {
                  const res = await apolloClient.query({
                     query: document,
                     ...( options ? options(ctx) : {} ),
                  })
                  
                  
                  if (getServerSideProps) {
                     ret = await getServerSideProps(ctx, apolloClient)
                  }
                  
                  debug && console.log('[SSR Query]: Completed,', `Table: ${table}, Data:`, res.data)
                  
                  if (onEmpty) {
                     debug && console.log('[SSR Query]: On Empty', `Table: ${table} | No data redirection`, res.data)
                     if (!res.data || !res.data[table] || res.data[table]?.length === 0) {
                        return {
                           redirect: {
                              destination: onEmpty.redirectTo ?? '/',
                              permanent: false,
                           },
                        }
                     }
                  }
                  
               }
               catch (e) {
                  
                  debug && console.log(e)
                  debug && console.log('[SSR Query]:', `Apollo error`)
                  
                  return {
                     redirect: {
                        destination: `/`,
                        permanent: false,
                     },
                  }
               }
               
               return {
                  ...ret,
               }
               
            }
            
         },
      }
   },
   createMutation<TVariables, TData>(props) {
      
      const { table, document, type, debug = false, errorMessage, successMessage, ...mutationOptions } = props
      
      return (options) => {
         const dispatch = useAppDispatch()
         const toast = useToast()
         const { t } = useTranslation()
         
         const { variables, onCompleted, ...rest } = options
         
         const [handleMutation, { loading, data, ...mutationResults }] = useMutation<TData>(document, {
            variables,
            onError: (error) => {
               handleApolloErrors(error, errorMessage, debug, toast)
            },
            onCompleted: (data) => {
               dispatch(AppActions.setMutationIsLoading(false))
               
               onCompleted && onCompleted(data)
               let title
               let description
               
               if (!successMessage) {
                  title = t(`alerts:success`)
                  description = null
               }
               if (successMessage) {
                  
                  if (typeof successMessage === 'string') {
                     title = t(`alerts:${successMessage}`)
                     description = null
                  } else {
                     title = t(`alerts:${successMessage.title}`)
                     description = t(`alerts:${successMessage.description}`)
                  }
               }
               
               toast({
                  title: title,
                  description: description,
                  status: "success",
                  isClosable: true,
                  position: "top",
               })

               
            },
            ...mutationOptions,
            ...rest,
         })
         
         function commitMutation(variables: any, functionOptions: any) {
            dispatch(AppActions.setMutationIsLoading(true))
            handleMutation({ variables: variables, ...functionOptions })
         }
         
         return [
            (variables?: TVariables, functionOptions?) => commitMutation(variables, functionOptions),
            loading,
            errorMessage,
            data,
            { ...mutationResults },
         ]
      }
      
   },
}
