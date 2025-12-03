import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HapticTab from '@/components/HapticTab';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function TabLayout() {
  const colors = useThemeColors();

  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <Tabs screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: colors.grayDark,
          tabBarInactiveTintColor : colors.inverse,
          tabBarStyle : {
            backgroundColor : colors.base,
            borderTopWidth: 0.4,
            elevation: 0,                 // enlève l’ombre Android
            shadowOpacity: 0,             // enlève l’ombre iOS
            height :70,
            paddingTop : 12,
          },
          tabBarButton : HapticTab,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={26}
                  color={color}
                /> 
              ),
          }}
        />
        <Tabs.Screen
        name="search"
        options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                  name={focused ? 'archive-search' : 'archive-search-outline'}
                  size={26}
                  color={color}
              /> 
            ),
        }}

        />

      </Tabs>
    </GestureHandlerRootView>
  );
}
