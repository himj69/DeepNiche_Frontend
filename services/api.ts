import { FetchError, DailyArticleType } from "@/types/responseType"


const BASE_URL = "http://192.168.188.92:3006"

const ENDPOINT = {
   DAILY : "/daily",
   WEEKLY : "/weekly",
   SEARCH : "/search"
}

//création d'un safe fetch pour la maintenabilité et a gestion des erreurs
//peut etre pas la meilleur solution mais beacoup plus propore que mes precednetes approches mdr

//le premier <T> permet de passer un type souhaité à l'appel de notre fonction
async function safeFetch<T>(promise: Promise<Response>): Promise<[T | null, FetchError | null]> {
   try {

      // appel API, promise de type Response
      const response = await promise

      if (!response.ok) {

         //récuparation de l'erreur de l'API
         const dataError = await response.json()

         const error = {
            message : dataError.error,
            status : response.status
         }

         return [ null, error]
      }

      const data: T = await response.json()

      return [data, null]

   } catch (error : unknown) {
      if ( error instanceof Error ) {
         return [ null, { message : error.message }]
      }
      return [ null , {message : 'Erreur inconnue' , original : error}]
   }
}



export async function Daily (): Promise<DailyArticleType | null> {

   const promise = fetch(`${BASE_URL}${ENDPOINT.DAILY}`)
   
   const [data, error] = await safeFetch<DailyArticleType>(promise)

   if (error) {
      console.error('Error fetching daily :', error.message , error?.status, error?.original)
   }

   console.log(data)
   return data
}


