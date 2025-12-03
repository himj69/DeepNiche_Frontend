import { useThemeColors } from "@/hooks/useThemeColors";
import { Text, TextProps } from "tamagui";

type Props = TextProps & {
   colorText?: string
}

export default function H6({colorText, ...rest} : Props) {
   const colors = useThemeColors();

   return (
      <Text fontWeight="700" fontSize={12} color={colorText ?? colors.inverse} {...rest}/>
   )
}