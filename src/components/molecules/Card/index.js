import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Gojek, Grab, Ovo } from '../../../assets'


const Card = () => {
    return (
        <View>
        <View style={styles.container}>
             <ScrollView horizontal>
                <Image source={Gojek} style={styles.img}/>
                <Image source={Grab} style={styles.img}/>
                <Image source={Ovo} style={styles.img}/>
             </ScrollView>
        </View>
    </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -20,
        
    },
    img: {
        marginLeft: 15,
        width: 300,
        margin: 10,
        height: 155,
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 48,
        borderTopLeftRadius: 10,
    },
})
