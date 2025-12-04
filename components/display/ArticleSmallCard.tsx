import { useThemeColors } from "@/hooks/useThemeColors";
import { ArticleType } from "@/types/responseType";
import { View, YStack, ZStack } from "tamagui";
import H4 from "../text/H4";
import H6 from "../text/H6";
import { ArticleClass } from "@/class/ArticleClass";

type ArticleProps = {
   article: ArticleType;
}


export default function ArticleSmallCard({ article } : ArticleProps) {
   const colors = useThemeColors();

   const art = new ArticleClass(article, colors )

   return (
      <ZStack height={70} width="70%" borderRadius={16} backgroundColor={art.color} overflow="hidden">
         <View>
            {art.Icon(70)}
         </View>

         <YStack >
            <View width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H4 position="absolute" paddingLeft="5%" paddingVertical="2%" numberOfLines={2} colorText={colors.base}>{art.data.title}</H4>
            </View>

            <YStack gap={2} width="100%" height="70%" paddingHorizontal="5%" paddingVertical="2%">
               <H6 colorText={colors.inverse}>{art.categoryLabel}</H6>
            </YStack>
         </YStack>

      </ZStack>
   )
}