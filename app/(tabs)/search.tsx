import Container from "@/components/display/Container"
import { useThemeColors } from "@/hooks/useThemeColors"
import { Button, Text } from "tamagui"

export default function Search () {
   const colors = useThemeColors()

   return (
      <Container>
         <Text color={colors.inverse}>Search</Text>
      </Container>
   )
}