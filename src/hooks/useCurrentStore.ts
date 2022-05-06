import { useAppSelector } from '@/store/index'
import { StoreSelectors, StoreState } from '@/store/slices/storeSlice'
import { useEffect, useState } from 'react'

const useCurrentStore = (): StoreState => {
   
   const [currentStore, setStore] = useState(null)
   
   const store = useAppSelector(StoreSelectors.getStore)
   
   useEffect(() => {
      setStore(store)
   }, [store])
   
   return currentStore
   
}

export default useCurrentStore
