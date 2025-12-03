import { Categories } from "@/constants/Category";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ArticleType } from "@/types/responseType";
import { View, YStack, ZStack } from "tamagui";
import H3 from "../text/H3";
import H4 from "../text/H4";
import { useArtcielCardInformations } from "@/hooks/useArticleCardInformations";

type ArticleProps = {
   article: ArticleType;
}


export default function ArticleCard({ article } : ArticleProps) {
   const colors = useThemeColors();

   const { articleColor, category, title, authors, IconElement } = useArtcielCardInformations( article )

   return (
      <ZStack height={100} width="100%" borderRadius={16} backgroundColor={articleColor} overflow="hidden">
         <View>
            {IconElement}
         </View>

         <YStack >
            <View width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H3 position="absolute" paddingLeft="5%" paddingVertical="2%" numberOfLines={2} colorText={colors.base}>{title}</H3>
            </View>

            <YStack gap={2} width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H4 colorText={colors.inverse}>{Categories[category].label}</H4>
               <H4 colorText={colors.inverse}>Authors : {authors}</H4>
            </YStack>
         </YStack>

      </ZStack>
   )
}