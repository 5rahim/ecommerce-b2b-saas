import { handleApolloErrors } from '@/graphql/utils/handleApolloErrors'
import { useAppDispatch } from '@/store/index'
import { AppActions } from '@/store/slices/appSlice'
import { ApolloClient, DocumentNode, MutationFunctionOptions, MutationHookOptions, useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export type AppMutationHook<TVariables> = (options?: MutationFunctionOptions) => MutationHookCreatorReturn<TVariables>

type MutationHookCreatorFunction<TVariables> = (variables?: TVariables, options?: MutationFunctionOptions) => any

type LoadingState = boolean
type EmptyState = boolean
type ErrorMessage = string
type ReturnData = any

type MutationHookCreatorReturn<TVariables> = [
   MutationHookCreatorFunction<TVariables>,
   LoadingState,
   ErrorMessage,
   ReturnData,
   ApolloClient<any>
]

/**
 * MUTATION HOOK
 */

/**
 * @example
 * return useMutationHookCreator(UPDATE_COURSE_BANNER_COLOR, {
      refetchQueries: [
         { query: GET_COURSE_BY_ID },
         'GetCourseById',
      ],
      successAlert: {
         type: "toast",
         title: "Banner color updated"
      }
   })
 * @param {DocumentNode} mutation
 * @param {{errorMessage?: string, successAlert?: {type: "notification" | "toast", title?: string, description?: string}, debug?: boolean} &
 *    MutationHookOptions} options
 * @returns {MutationHookCreatorReturn}
 */
export function useMutationHookCreator<TVariables>(
   mutation: DocumentNode,
   options: {
      errorMessage?: string,
      successAlert?: {
         type: "notification" | "toast",
         title?: string,
         description?: string,
      },
      onCompleted?: (data: any | {}) => void,
      sendNotification?: any // TODO: Notifications
      debug?: boolean
   } & MutationHookOptions,
): MutationHookCreatorReturn<TVariables> {
   
   const {
      errorMessage = "Internal Server Error",
      successAlert,
      sendNotification,
      debug = false,
      onCompleted,
      variables,
      ...rest
   } = options
   
   const dispatch = useAppDispatch()
   const toast = useToast()
   const { t, i18n } = useTranslation(['alert'], { useSuspense: false })
   
   const [handleMutation, { loading, client, data }] = useMutation(mutation, {
      variables,
      onError: (error) => {
         handleApolloErrors(error, errorMessage, debug, toast)
      },
      onCompleted: (data) => {
         
         dispatch(AppActions.setMutationIsLoading(false))
         
         onCompleted && onCompleted(data)
         
         
         if (successAlert) {
            if (successAlert.type === "toast") {
               toast({
                  title: t(`alert:${successAlert.title}`) ?? "Success",
                  description: successAlert.description ? t(`alert:${successAlert.description}`) : null,
                  status: "success",
                  isClosable: true,
                  position: "top-right",
               })
            }
         }
         
         if (sendNotification) {
            // TODO: Send notification (query)
         }
         
      },
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
      client,
   ]
   
}
