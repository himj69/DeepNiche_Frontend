import ArticleCard from "@/components/display/ArticleCard"
import ArticleSmallCard from "@/components/display/ArticleSmallCard"
import Container from "@/components/display/Container"
import H1 from "@/components/text/H1"
import H2 from "@/components/text/H2"
import H3 from "@/components/text/H3"
import { ArticleTest } from "@/constants/ArticleTest"
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

         <YStack marginTop={32} gap={10}>
            <H2 color={colors.inverse}>Tip of the day</H2>
            <ArticleCard article={ArticleTest}/>
         </YStack>

         <YStack marginTop={32} gap={16}>
            <H2 color={colors.inverse}>Weekly Dose</H2>
            
            <YStack gap={10}>
               <H3 color={colors.grayDark}>Quantic Physics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Gravitation</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Computer Science</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Economics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Mathematics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Astrophysics/Cosmophysics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Condensed Matter</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Fundamental Physics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Nonlinear Physics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Nuclear Physics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Quantitative Biology</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Applied Physics</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>

            <YStack gap={10}>
               <H3 color={colors.grayDark}>Quantitative Finance</H3>
               <ArticleSmallCard article={ArticleTest}/>
            </YStack>
         </YStack>
      </Container>
   )
}