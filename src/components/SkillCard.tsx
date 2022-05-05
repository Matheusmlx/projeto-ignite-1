import React from 'react'
import {FlatList,TouchableOpacity,Text,StyleSheet,SafeAreaView,TouchableOpacityProps} from 'react-native'
import { SkillsData } from '../pages/Home'


interface SkillCardProps extends TouchableOpacityProps{
    skills:SkillsData
}

export function SkillCard({skills,...rest}:SkillCardProps){
    return(
        <TouchableOpacity style={style.skillsContainer} {...rest}>
            <Text style={style.skillsText}>{skills.name}</Text>
        </TouchableOpacity>    
       
    )
}
const style = StyleSheet.create({
    skillsContainer:{
        backgroundColor:'#1f1e25',
        padding:15,
        borderRadius:20,
        alignItems:'center',
        marginTop:20
    },
    skillsText:{
        color:'#FFF',
        fontSize:20,
        fontWeight:'bold',
    }
})