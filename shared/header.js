import { StyleSheet, Text, View } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"

const header = ({navigation}) => {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>GameZone</Text>
            </View>

        </View>
    )
}

export default header

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText:{
        fontWeight: "bold",
        fontSize: 20,
        color: '#333'
    },
    icon:{
        position:"absolute",
        left: 16
    }
})
