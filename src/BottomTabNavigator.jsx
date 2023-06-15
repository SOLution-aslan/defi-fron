import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LP from "./LP";
import MyPage from "./myPage/MyPage";
import Swap from "./Swap";
import Staking from "./Staking";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const BottomTab = createBottomTabNavigator()
export default function BottomTabNavigator() {
    return(
        <BottomTab.Navigator initialRouteName="Liquidity Pool">
            <BottomTab.Screen name="Liquidity Pool" component={LP} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="pool" size={size} color={color} />
                ),
            }}/>
            <BottomTab.Screen name="Swap" component={Swap} options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="swap" size={size} color={color} />
                ),
            }}/>
            <BottomTab.Screen name="Staking" component={Staking} options={{
                 tabBarIcon: ({ color, size }) => (
                    <AntDesign name="database" size={size} color={color} />
                ),
            }}/>
            <BottomTab.Screen name="MyPage" component={MyPage} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" size={size} color={color} />
                ),
            }}/>
        </BottomTab.Navigator>
    )
}