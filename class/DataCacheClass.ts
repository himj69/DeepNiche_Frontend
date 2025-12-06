import AsyncStorage from '@react-native-async-storage/async-storage';


interface CacheDataInterface<T> {
   getCache () : Promise<FetcherResponseType<T> | null>
   setCache () : Promise<FetcherResponseType<T> | null>;
   loadCache () : Promise<FetcherResponseType<T> | null>
}

export type FetcherResponseType<T> = {
   data : T;
   expires_at : string ; 
}

export class CacheDataClass<T> implements CacheDataInterface<T> {

   constructor( 
      private key : string,
      private fetcher : () => Promise<FetcherResponseType<T> | null>
   ) {

   }


   async getCache () : Promise<FetcherResponseType<T> | null> {
      try {
         const cacheData = await AsyncStorage.getItem(this.key)
         
         
         return cacheData ? JSON.parse(cacheData) : null

      } catch (error) {
         console.error(error)
         return null
         //revoir la gestion des erreurs peut etre plustard
      }
   }

   async setCache () : Promise<FetcherResponseType<T> | null> {
      try {
         const response = await this.fetcher()
         if ( response === null ) {
            throw new Error("Aucune donnée récupérée")
         }

         await AsyncStorage.setItem( this.key, JSON.stringify(response))
         return response;

      } catch (error) {
         console.error(error)
         return null
         //revoir la gestion des erreurs peut etre plustard
      }
   }

   //methode utiliser la l ouverture de la app
   //pour la génération du cache
   //ou l appel de nouvelle donné
   async loadCache () : Promise<FetcherResponseType<T> | null> {
      try {

         let cacheData = await this.getCache()
         if (cacheData == null) {
            cacheData = await this.setCache()
         } else {
            const expiresAt = cacheData.expires_at
            if (expiresDateControle( expiresAt ).isExpired) {
               cacheData = await this.setCache()
            }
         }

         return cacheData

      } catch (error) {
         //je ne suis pas sur qu une gestion derreur soit utile ici
         //car deja genere dans les fonction async appelle mais on sait jamais
         //je pourrais sans doute ameliorer la gestion aussi
         console.log(error)
         return null
      }
   }
}


//fonction qui controle la date d expiration
function expiresDateControle ( expiresAt : string ) : {isExpired :boolean} {
   const nowDate = Date.now()
   const expiresDate = new Date(expiresAt).getTime()
   
   const isExpired = nowDate >= expiresDate

   return { isExpired : isExpired}
}
