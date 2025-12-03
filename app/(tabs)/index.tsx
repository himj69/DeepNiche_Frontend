import Container from "@/components/display/Container"
import H1 from "@/components/text/H1"
import H2 from "@/components/text/H2"
import H3 from "@/components/text/H3"
import { useThemeColors } from "@/hooks/useThemeColors"
import { YStack } from "tamagui"

export default function Home() {
   const colors = useThemeColors()

   return (
      <Container>
         <YStack gap={4}>
            <H1 color={colors.inverse}>DeepNiche</H1>
            <H3 color={colors.grayDark}>Designed for those who wish to cross the boundary between knowing and understanding.</H3>
         </YStack>

         <YStack marginTop={32}>
            <H2 color={colors.inverse}>Tip of the day</H2>
         </YStack>
      </Container>
   )
}