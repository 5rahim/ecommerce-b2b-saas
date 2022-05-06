import { GlobalState } from '@/store/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CountryState {
   currentCountry: string,
}

export const countryState: CountryState | {} = {
   currentCountry: 'ci',
}


export const countrySlice = createSlice({
   name: 'country',
   initialState: countryState as CountryState,
   reducers: {
      setCountry: (state, action: PayloadAction<string>) => {
         state.currentCountry = action.payload
      },
   },
})

export const CountryActions = countrySlice.actions

export const CountrySelectors = {
   currentCountry: (state: GlobalState) => state.country.currentCountry,
}


export default countrySlice.reducer
