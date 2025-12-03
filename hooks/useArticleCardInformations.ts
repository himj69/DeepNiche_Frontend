import { Categories } from "@/constants/Category";
import { DomainIcon } from "@/constants/DomainIcon";
import { ArticleType } from "@/types/responseType";
import { useThemeColors } from "./useThemeColors";
import { Colors } from "@/constants/Colors";
import { ReactElement } from "react";

type ArticleCardInfoType = {
   articleColor : string ;
   category : keyof typeof Categories ;
   title : string ;
   authors : string ;
   IconElement : ReactElement;
}



export function useArtcielCardInformations ( article : ArticleType , sizeIcon : number) : ArticleCardInfoType {
   const colors = useThemeColors();
   
      //récupration du style par rapport a l'article
      const category = article.main_category as keyof typeof Categories;
      const colorKey = Categories[category].color as keyof typeof Colors["light"]
      const articleColor = colors[colorKey]
   
      const title = article.title
   
      const authors = article.authors.join(", ")
   
      const Icon = DomainIcon[Categories[category].domain as keyof typeof DomainIcon]
      //const sizeIcon = 108
      const IconElement = Icon({size : sizeIcon, color: "rgba(255,255,255,0.4)"})

      return { articleColor, category, title, authors, IconElement}
}