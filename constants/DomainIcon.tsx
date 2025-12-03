import { AntDesign, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ReactElement } from "react";

type IconProps = {
   size : number;
   color?: string;
}

export const DomainIcon: Record<string, (props : IconProps) => ReactElement > = {
   "DOMAIN_QUANTIC" : (props) => <Fontisto name="atom" {...props}/>,
   "DOMAIN_GRAVITATION" : (props) => <MaterialCommunityIcons name="orbit" {...props}/>,
   "DOMAIN_COMPUTER_SCIENCE" : (props) => <AntDesign name="laptop" {...props}/>,
   "DOMAIN_ECONOMICS" : (props) => <FontAwesome5 name="university" {...props}/>,
   "DOMAIN_MATHEMATICS" : (props) => <Ionicons name="calculator-outline" {...props}/>,
   "DOMAIN_ASTROPHYSICS" : (props) => <Ionicons name="planet-outline" {...props}/>,
   "DOMAIN_CONDENSED_MATTER" : (props) => <FontAwesome5 name="connectdevelop" {...props}/>,
   "DOMAIN_FUNDAMENTAL_PHYSICS" : (props) => <MaterialCommunityIcons name="vector-curve" {...props}/>,
   "DOMAIN_NONLINEAR_PHYSICS" : (props) => <MaterialCommunityIcons name="pulse" {...props}/>,
   "DOMAIN_NUCLEAR_PHYSICS" : (props) => <MaterialCommunityIcons name="radioactive-circle-outline" {...props}/>,
   "DOMAIN_QUANTITATIVE_BIOLOGY" : (props) => <MaterialCommunityIcons name="dna" {...props}/>,
   "DOMAIN_APPLIED_PHYSICS" : (props) => <FontAwesome5 name="layer-group" {...props}/>,
   "DOMAIN_QUANTITATIVE_FINANCE" : (props) => <Fontisto name="bitcoin" {...props}/>,
}