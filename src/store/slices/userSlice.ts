import { GlobalState } from '@/store/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetUserByUserIdQuery } from '../../generated/graphql'


export interface UserState {
   profile: GetUserByUserIdQuery['users'][0] | null,
}

export const userState: UserState = {
   profile: null
}


export const userSlice = createSlice({
   name: 'user',
   initialState: userState as UserState,
   reducers: {
      setUser: (state, action: PayloadAction<UserState>) => {
         if(action.payload.profile) {
            state.profile = action.payload.profile
         } else {
            state = {
               profile: null
            }
         }
      },
   },
})

export const UserActions = userSlice.actions

export const UserSelectors = {
   getUser: (state: GlobalState) => state.user as UserState | null,
}


export default userSlice.reducer
