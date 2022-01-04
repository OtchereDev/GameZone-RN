import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const about = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Page</Text>
        </View>
    )
}

export default about

const styles = StyleSheet.create({
    container:{
        padding: 24
    }
})
