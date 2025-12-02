import { Slot } from 'expo-router';
import { createTamagui,TamaguiProvider} from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const config = createTamagui(defaultConfig)

  return (
    <TamaguiProvider config={config}>
      <Slot/>
    </TamaguiProvider>
  );
}
