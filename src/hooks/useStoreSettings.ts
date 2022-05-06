import { StoreState } from '@/store/slices/storeSlice'

export type StoreSettings = {
   physicalAddressDirections: string | null,
   hasPhysicalAddress: boolean
}

// enum StoreSettings {
//    physicalAddressDirections,
//    hasPhysicalAddress
// }

const useStoreSettings = () => {

   return {
      getStoreSetting: <T>(store: StoreState, callback: (settings: StoreSettings) => T, defaultValue?: T): T => {
         const settings = store?.settings

         try {
            if(callback(settings) !== undefined && !!settings) {
               return callback(settings)
            }
            else {
               return defaultValue ?? null
            }
         } catch (e) {
            return  defaultValue ?? null
         }
         
      }
   }

}

export default useStoreSettings
