import { useThemeColors } from "@/hooks/useThemeColors";
import { Text, TextProps } from "tamagui";

type Props = TextProps & {
   colorText?: string
}

export default function H1({colorText, ...rest} : Props) {
   const colors = useThemeColors();

   return (
      <Text fontWeight="700" fontSize={28} color={colorText ?? colors.inverse} {...rest}/>
   )
}