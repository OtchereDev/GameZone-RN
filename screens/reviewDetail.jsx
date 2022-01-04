import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const reviewDetail = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Page</Text>
        </View>
    )
}

export default reviewDetail

const styles = StyleSheet.create({
    container:{
        padding: 24
    }
})
