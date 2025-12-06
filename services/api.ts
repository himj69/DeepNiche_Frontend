import { FetchError, DailyArticleType, WeeklyArticlesType } from "@/types/responseType"


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


//fonction getData general 
async function getData<T>( 
   path : string ,
   options ?: { method?: string ,headers?: any, body?: any}  
) : Promise<T | null> {
   const promise = fetch(`${BASE_URL}${path}`, options)

   const [data, error] = await safeFetch<T>(promise)

   if (error) {
      console.error('Error fetching :', error.message , error?.status, error?.original)
   }

   //console.log(data)
   return data
}

export async function DailyData(): Promise<DailyArticleType | null> {
   //recuperatin des data du jour seulement
   return getData<DailyArticleType>(ENDPOINT.DAILY)
}

export async function WeeklyData(): Promise<WeeklyArticlesType | null> {
   //recuperation des data de la semaine seulement
   return getData<WeeklyArticlesType>(ENDPOINT.WEEKLY)
}


