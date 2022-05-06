import store from '@/store/index'

/**
 * Redux middleware
 */

export const localStorageMiddleware = ({ getState }: any) => {
   return (next: any) => (action: any) => {
      if(!action) return
      const result = next(action)
      if (action.type?.startsWith('country/')) {
         const state = store.getState().country
         localStorage.setItem('mosu.country', JSON.stringify(state))
      }
      return result
   }
}

export const loadLocalStorage = () => {
   try {
      let state: any = {}
      if (localStorage.getItem('mosu.country') !== null) {
         console.log(JSON.parse(localStorage.getItem('mosu.country') as string))
         state.country = JSON.parse(localStorage.getItem('mosu.country') as string)
      }
      if (state) {
         return state
      } else return undefined
   }
   catch (e) {
      return undefined
   }
}
