import { useUserQuery } from '@/graphql/hocs/withUser'
import React from 'react'

export const SignedIn: React.FC<{}> = (props) => {
   
   const user = useUserQuery()
   
   if(user?.profile && !user?.isLoading) return <>{props.children}</>
   else return <></>
   
}


export const SignedOut: React.FC<{}> = (props) => {
   
   const user = useUserQuery()
   
   if(!user?.profile && !user?.isLoading) return <>{props.children}</>
   else return <></>
   
}
