import appSlice from '@/store/slices/appSlice'
import countrySlice from '@/store/slices/countrySlice'
import userSlice from '@/store/slices/userSlice'
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { PersistConfig } from 'redux-persist/es/types'
import storage from 'redux-persist/lib/storage'
import storeSlice from './slices/storeSlice'

const reducers = combineReducers({
   country: countrySlice,
   app: appSlice,
   user: userSlice,
   store: storeSlice
})

const persistConfig: PersistConfig<any> = {
   key: 'root',
   storage,
   whitelist: ['country', 'user', 'store']
}

const persistedReducer = persistReducer(persistConfig, reducers)


export function makeStore() {
   return configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: {
               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
         }),
      // preloadedState: loadLocalStorage(),
      // middleware: getDefaultMiddleware => {
      //    return getDefaultMiddleware().concat(localStorageMiddleware)
      // },
   })
}

const store = makeStore()

export let persistor = persistStore(store)


export type GlobalState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
   GlobalState,
   unknown,
   Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector

export default store
