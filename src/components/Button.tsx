import React from 'react'
import {TouchableOpacity,Text,StyleSheet,TouchableOpacityProps} from 'react-native'

type ButtonProps = TouchableOpacityProps
export function Button({onPress}:ButtonProps){
    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor:'#A370F7',
        padding:15,
        borderRadius:7,
        alignItems:'center',
        marginTop:20
    },
    buttonText:{
        color:'#FFF',
        fontSize:17,
        fontWeight:'bold',
    }

})