import { useThemeColors } from "@/hooks/useThemeColors";
import { ScrollView, ViewProps, YStack } from "tamagui";

type Props = ViewProps & {
   colorContainer ?: string;
   scroll ?: boolean;
   scrollViewRef ?: React.RefObject<ScrollView | null >;
}

export default function Container({
   colorContainer,
   scroll = false, 
   scrollViewRef,
   ...rest
} : Props) {
   const colors = useThemeColors();

   return (
      <>
         {!scroll &&
            <YStack backgroundColor={colorContainer ?? colors.base} paddingTop={44} flex={1} paddingBottom={60} paddingHorizontal={12} {...rest}/>
         }

         {scroll &&
            <ScrollView 
               ref={scrollViewRef} 
               backgroundColor={colorContainer}
               showsVerticalScrollIndicator={false}
            >
               <YStack paddingTop={44} flex={1} paddingBottom={60} paddingHorizontal={12} {...rest}/>
            </ScrollView>
         }
      </>
   )
}
