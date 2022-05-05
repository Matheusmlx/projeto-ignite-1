import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,TextInput,FlatList} from 'react-native'
import { SkillCard } from '../components/SkillCard'
import { Button } from '../components/Button'

export interface SkillsData{
    id:string;
    name:string
}

export default function Home(){
    const [skills,setSkills] = useState<SkillsData[]>([])
    const [skillName,setSkillName] = useState<string>('')
    const [gretting,setGretting] = useState<string>('')

    function handleAddNewSkill(){
        const data:SkillsData = {
            id:String(new Date().getTime()),
            name:skillName
        }
        setSkills(oldState => [...oldState,data])
       
    }

    function handleRemoveSkill(id:string){
        setSkills(oldState => oldState.filter(item=>item.id !== id))
    }

    useEffect(()=>{
        const currentHour = new Date().getHours()
         currentHour < 12 ? setGretting('Bom dia!') : setGretting('Boa Tarde')
    },[skillName])

  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome,Matheus</Text>
      <Text>{gretting}</Text>
      <TextInput 
       style={style.input}
       placeholder="New skill"
       placeholderTextColor='#555'
       onChangeText={setSkillName}
       />
     
        <Button onPress={handleAddNewSkill}/>
        
       <Text style={[style.title,{marginTop:50}]}>
           My Skills
       </Text>

        <FlatList 
            data={skills}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <SkillCard 
                    skills={item}
                    onPress={()=>handleRemoveSkill(item.id)}/>
            )}
        />
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'#121015',
        paddingVertical:70,
        paddingHorizontal:30
    },
    title:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'#1f1e25',
        color:'#FFF',
        fontSize:18,
        padding:15,
        marginTop:30,
        borderRadius:7
    },
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