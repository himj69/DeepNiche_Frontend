import { Categories } from "@/constants/Category";
import { Colors } from "@/constants/Colors";
import { DomainIcon } from "@/constants/DomainIcon";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ArticleType } from "@/types/responseType";
import { Fontisto } from "@expo/vector-icons";
import { View, YStack, ZStack } from "tamagui";
import H3 from "../text/H3";
import H4 from "../text/H4";

type ArticleProps = {
   article: ArticleType;
}


export default function ArticleCard({ article } : ArticleProps) {
   const colors = useThemeColors();

   //récupration du style par rapport a l'article
   const category = article.main_category as keyof typeof Categories;
   const colorKey = Categories[category].color as keyof typeof Colors["light"]
   const articleColor = colors[colorKey]

   const title = article.title

   const authors = article.authors.join(", ")

   const Icon = DomainIcon[Categories[category].domain as keyof typeof DomainIcon]
   const sizeIcon = 108
   const IconElement = Icon({size : sizeIcon, color: colors.inverse})



   return (
      <ZStack height={100} width="100%" borderRadius={16} backgroundColor={articleColor} overflow="hidden">
         <View>
            {IconElement}
         </View>

         <YStack >
            <View width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H3 colorText={colors.base}>{title}</H3>
            </View>

            <YStack gap={2} width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H4 colorText={colors.grayMid}>Authors : {authors}</H4>
               <H4 colorText={colors.grayMid}>Main category : {Categories[category].label}</H4>
            </YStack>
         </YStack>

      </ZStack>
   )
}