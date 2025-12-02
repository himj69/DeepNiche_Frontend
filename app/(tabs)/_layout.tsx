import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import HapticTab from '@/components/HapticTab';

export default function TabLayout() {

  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <Tabs screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
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
              title: 'Recipes',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                    name={focused ? 'restaurant' : 'restaurant-outline'}
                    size={26}
                    color={color}
                /> 
              ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
              title: 'Account',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                    name={focused ? 'person-circle' : 'person-circle-outline'}
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
