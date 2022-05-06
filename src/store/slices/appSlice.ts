import { GlobalState } from '@/store/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface AppState {
   mutationIsLoading: boolean,
}

export const countryState: AppState | {} = {
   mutationIsLoading: false,
}


export const countrySlice = createSlice({
   name: 'country',
   initialState: countryState as AppState,
   reducers: {
      setMutationIsLoading: (state, action: PayloadAction<boolean>) => {
         state.mutationIsLoading = action.payload
      },
   },
})

export const AppActions = countrySlice.actions

export const AppSelectors = {
   mutationIsLoading: (state: GlobalState) => state.app.mutationIsLoading,
}


export default countrySlice.reducer
