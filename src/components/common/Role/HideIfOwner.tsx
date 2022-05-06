import LoadingScreen from '@/components/ui/LoadingScreen'
import useIsOwner from '@/hooks/useIsOwner'
import React from 'react'

const HideIfOwner: React.FC<{}> = ({ children }) => {
   
   const [isOwner, loading] = useIsOwner()
   
   if(loading) return <LoadingScreen />
   
   if(!isOwner)
      return <>{children}</>
   
   
   return <></>
   
   
}

export default HideIfOwner
