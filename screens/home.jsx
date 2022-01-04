import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText} >Home Screen</Text>
        </View>
    )
}

export default home

const styles = StyleSheet.create({

})
