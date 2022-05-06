import { GlobalState } from '@/store/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetStoreQuery } from '../../generated/graphql'


export type StoreState = GetStoreQuery['stores'][0] | null

export const storeState = null


export const storeSlice = createSlice({
   name: 'store',
   initialState: storeState as StoreState,
   reducers: {
      setStore: (state, action: PayloadAction<StoreState>) => {
         return action.payload
      },
   },
})

export const StoreActions = storeSlice.actions

export const StoreSelectors = {
   getStore: (state: GlobalState) => state.store as StoreState,
}


export default storeSlice.reducer
