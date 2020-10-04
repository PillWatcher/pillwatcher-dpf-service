import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function RecuperarSenha({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 0.4, width: 0.1, height: 50, marginLeft:200}}> 
        <Image source={require('../assets/comprimido2.png')}/>
      </View>

      <Text style={styles.text}>Recuperar Senha</Text>

      <TextInput
        placeholder="Digite o e-mail cadastrado"
        style={styles.input}
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => navigation.navigate('EnviarEmail')}
      >
        <Text style={styles.textbotao}>Enviar</Text>
      </TouchableOpacity>

      <View style={{flex:0.35}}/>
      
      <View style={{flex: 0.24, flexDirection: 'row',width:405, height:0.1}}> 
        <Image source={require('../assets/comprimido1.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize:30,
    fontWeight:'bold',
    color:'#FFFFFF',
    padding:50,
  },
  input: {
    marginTop:10,
    padding:10,
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    borderRadius:3,
  },
  botao: {
    width:300,
    height:42,
    backgroundColor:'#F1FAEE',
    marginTop:10,
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
  },
  textbotao:{
    fontSize:15,
    fontWeight:'bold',
    color:'#1D3557',
    padding:2,
  }
});
