import { Categories } from "@/constants/Category";
import { useArtcielCardInformations } from "@/hooks/useArticleCardInformations";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ArticleType } from "@/types/responseType";
import { View, YStack, ZStack } from "tamagui";
import H4 from "../text/H4";
import H6 from "../text/H6";

type ArticleProps = {
   article: ArticleType;
}


export default function ArticleSmallCard({ article } : ArticleProps) {
   const colors = useThemeColors();

   const { articleColor, category, title, authors, IconElement } = useArtcielCardInformations( article, 70 )

   return (
      <ZStack height={70} width="70%" borderRadius={16} backgroundColor={articleColor} overflow="hidden">
         <View>
            {IconElement}
         </View>

         <YStack >
            <View width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H4 position="absolute" paddingLeft="5%" paddingVertical="2%" numberOfLines={2} colorText={colors.base}>{title}</H4>
            </View>

            <YStack gap={2} width="100%" height="70%" paddingHorizontal="5%" paddingVertical="2%">
               <H6 colorText={colors.inverse}>{Categories[category].label}</H6>
            </YStack>
         </YStack>

      </ZStack>
   )
}