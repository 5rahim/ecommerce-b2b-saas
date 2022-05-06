export const getData = (data: any) => {
   
   if (data === undefined || data.length === 0 || !data) {
      return null
   }
   
   return data
   
}

/**
 * | [{...}] -> {...}
 * | undefined || [] -> null
 */
export const getSingleObject = (data: any) => {
   
   if (data === undefined || data.length === 0 || !data) {
      return null
   }
   
   return data[0] ?? null
   
}
