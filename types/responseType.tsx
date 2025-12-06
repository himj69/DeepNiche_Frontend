//strucute des endpoint get de recuperation d article pour la page 1
export type FetcherResponseType<T> = {
   data : T;
   expires_at : string ; 
}

//type d'un article
export type ArticleType = {
   id: string ;
   title: string ;
   summary : string ;
   authors : string[];
   pdf_url : string;
   published : string ;
   updated : string ;
   categories: string[];
   main_category: string;
   language: string;
   source: string;
}

// type de le response de l API pour l'article du jour - obselete pour l instant
export type DailyArticleType = {
   daily_article: ArticleType;
   expires_at: string;
}

//type de la response de l Api pour les articles de la semaine - obselete pour l instant
export type WeeklyArticlesType = {
   weekly_articles : WeeklyArticlesByDomainType[];
   expires_at: string
}

export type WeeklyArticlesByDomainType = {
   domain : string ;
   articles : ArticleType[] ;
}


//type d erreur retouné par mes fonctions
export type FetchError = {
   message : string ;
   status?: number;
   original?: unknown;
}



