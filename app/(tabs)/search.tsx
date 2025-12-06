import { CacheDataClass } from "@/class/DataCacheClass"
import Container from "@/components/display/Container"
import { useThemeColors } from "@/hooks/useThemeColors"
import { DailyData, WeeklyData } from "@/services/api"
import { ArticleType, WeeklyArticlesByDomainType } from "@/types/responseType"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button, Text } from "tamagui"

export default function Search () {
   const colors = useThemeColors()


   //test de la mise en cache pour endpoint daily
   // const dailyCache = new CacheDataClass<WeeklyArticlesByDomainType>("weekly", WeeklyData)

   // const handleDaily = async () => {
   //    AsyncStorage.clear()
   //    const data = await dailyCache.loadCache()
   //    console.log("Données récupérées :", data)
   // }

   return (
      <Container>
         <Text color={colors.inverse}>Search</Text>
         {/* <Button onPress={handleDaily}>caca</Button> */}
      </Container>
   )
}