import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import {styles}from './styles'
import Participant from '../../components/Participant'

export default function Home(){

  function handleParticipantAdd(){
    console.log("Você clicou no botão adicionar")
  }

  return(
    <View style= {styles.container}>
     <Text key="1" style={styles.eventName}>Nome do evento</Text>
     <Text key="2" style={styles.eventDate}>Sexta, 11 de Novembro 2024</Text>
     <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor={"#6B6B6B"}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant/>
      <Participant/>
    </View>
   
  )
}