import { Dates } from './Dates'

export const Utils = {
   Dates,
   Url: {
      assetPath: (assetPath: string,
                  folder?: string,
      ) => `/assets/images/${folder ? ( assetPath.startsWith('/') ? `/${folder}` : `/${folder}/` ) : ''}${assetPath.startsWith('/')
         ? assetPath
         : `/${assetPath}`}`,
      /**
       * @example
       * Utils.Url.assetImageUrl('topography.png', 'patterns')
       * @param {string} assetPath
       * @param {string} folder
       * @returns url({string})
       */
      assetImageUrl: (assetPath: string, folder?: string) => `url(${Utils.Url.assetPath(assetPath, folder)})`,
   
   }
}
