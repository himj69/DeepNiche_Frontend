import { useThemeColors } from "@/hooks/useThemeColors";
import { ArticleType } from "@/types/responseType";
import { View, YStack, ZStack } from "tamagui";
import H3 from "../text/H3";
import H4 from "../text/H4";
import { ArticleClass } from "@/class/ArticleClass";

type ArticleProps = {
   article: ArticleType;
}


export default function ArticleCard({ article } : ArticleProps) {
   const colors = useThemeColors();

   const art = new ArticleClass(article, colors )

   return (
      <ZStack height={100} width="100%" borderRadius={16} backgroundColor={art.color} overflow="hidden">
         <View>
            {art.Icon(100)}
         </View>

         <YStack >
            <View width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H3 position="absolute" paddingLeft="5%" paddingVertical="2%" numberOfLines={2} colorText={colors.base}>{art.data.title}</H3>
            </View>

            <YStack gap={2} width="100%" height="50%" paddingHorizontal="5%" paddingVertical="2%">
               <H4 colorText={colors.inverse}>{art.categoryLabel}</H4>
               <H4 colorText={colors.inverse}>Authors : {art.getAuthors()}</H4>
            </YStack>
         </YStack>

      </ZStack>
   )
}