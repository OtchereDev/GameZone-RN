import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetail"
import Header from "../shared/header";

const screens = {
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle: ()=> <Header navigation={navigation} />,
                headerStyle:{
                    backgroundColor:"#eee"
                }
            }
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:"Review Details"
        }
    },
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"#eee"
        },
        headerTintColor:"#444"
    }
})

export default HomeStack