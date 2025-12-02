import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from 'expo-haptics';

/**
 * HapticTab
 * ----------
 * Ce composant est un "wrapper" personnalisé autour du bouton d’onglet 
 * de la bottom tab bar (React Navigation).
 * 
 * - Il utilise `PlatformPressable` (composant de @react-navigation/elements)
 *   pour gérer les interactions tactiles de manière cohérente entre iOS et Android.
 * 
 * - Lorsqu’on appuie sur un onglet (`onPressIn`), si on est sur iOS, 
 *   il déclenche une petite vibration haptique via `expo-haptics`
 *   (`Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)`).
 *   → Cela améliore le ressenti tactile et donne un retour "physique" à l’utilisateur.
 * 
 * - Enfin, il appelle aussi la fonction `props.onPressIn?.(ev)` pour s’assurer 
 *   que le comportement par défaut de React Navigation (changement d’onglet, etc.)
 *   continue de fonctionner normalement.
 * 
 * En résumé :
 * ➝ Sert de bouton de tab bar avec retour haptique sur iOS.
 * ➝ Remplace le bouton par défaut sans casser la logique interne de React Navigation.
 */

export default function HapticTab( props : BottomTabBarButtonProps) {
   return (
      <PlatformPressable
         {...props}
         onPressIn={(ev) => {
            if ( process.env.EXPO_OS === 'ios') {
               Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            }
            props.onPressIn?.(ev);
         }}
      />
   )
}