import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from "./style";

export default function GarageScreen(){
 return(
    <View style={styles.container}>
        <View style={styles.cameraBox}>
            <View style={styles.triangleConer}></View>
            <View style={[styles.triangleConer, styles.topRigth]}></View>
            <View style={[styles.triangleConer, styles.bottomLeft]}></View>
            <View style={[styles.triangleConer, styles.bottomRigth]}></View>
        </View>
        <Text>Works!!</Text>
        <StatusBar style="auto" />
    </View>
 )
}