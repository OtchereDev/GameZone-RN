import { StyleSheet, Text, View, Button } from 'react-native'
import { globalStyles } from '../styles/global'

const home = ({navigation}) => {

    const pressHandle= ()=>{
        navigation.navigate("ReviewDetails")
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText} >Home Screen</Text>
            <Button title='Go to Review Det' onPress={pressHandle} />
        </View>
    )
}

export default home

const styles = StyleSheet.create({

})
