import { useThemeColors } from "@/hooks/useThemeColors";
import { Text, TextProps } from "tamagui";

type Props = TextProps & {
   colorText?: string
}

export default function H3({colorText, ...rest} : Props) {
   const colors = useThemeColors();

   return (
      <Text fontWeight="700" fontSize={20} color={colorText ?? colors.inverse} {...rest}/>
   )
}