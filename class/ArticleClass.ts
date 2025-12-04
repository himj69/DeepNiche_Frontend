import { ArticleTest } from "@/constants/ArticleTest";
import { Categories } from "@/constants/Category";
import { Colors } from "@/constants/Colors";
import { DomainIcon } from "@/constants/DomainIcon";
import { ArticleType } from "@/types/responseType";
import { ReactElement } from "react";


interface ArticleInterface{
   data : ArticleType;
   getAuthors() : string;
   color : string;
   categoryKey : keyof typeof Categories;
   categoryLabel : string;
   Icon( sizeIcon : number) : ReactElement;
}


export class ArticleClass implements ArticleInterface{
   constructor( public data : ArticleType, private colors: typeof Colors["light"]){

   }

   getAuthors() {
      return this.data.authors.join(", ")
   }
   
   get categoryKey() {
      return this.data.main_category as keyof typeof Categories;
   }

   get color() {

      const colorKey = Categories[this.categoryKey].color as keyof typeof Colors["light"]
      return this.colors[colorKey]
   }

   get categoryLabel() {
      return Categories[this.categoryKey].label 
   }

   Icon( sizeIcon : number ) {
      const _Icon = DomainIcon[Categories[this.categoryKey].domain as keyof typeof DomainIcon]
      return _Icon({size : sizeIcon, color: "rgba(255,255,255,0.4)"})
   }
}

// const colors = "light" //seulement pour test apres on passera les hooks
// const article = new ArticleClass(ArticleTest, colors)

// export const handleTest = () => {
//    console.log(article.data.title)
//    console.log(article.color)
//    console.log(article.categoryLabel)
// }

// <Button onPress={handleTest}>test</Button>




