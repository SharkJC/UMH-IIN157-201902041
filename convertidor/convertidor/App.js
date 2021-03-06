
import React, {useState} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,TextInput, View, Alert, Button,
} from 'react-native';

export default function App(){
const [entrada, setEntrada] =useState(0);
const [conversion, setConversion] =useState(0);

const showAlert = () =>
Alert.alert(
  "Conersion exitosa",
  "Resultado: "+conversion);


const convertir =(valor) =>{
  const resultado= valor*24.16;
  setEntrada(valor); // Aqui mandamos valor a la variable puesta por el usuario
  setConversion(resultado); // Aqui mandamos valor a la variable puesta por el usuario
}
const inicializar =()=>{
setConversion(0); //Variables para dejar campos vacios
setEntrada(0);    //Variables para dejar campos vacios
  
}

  return(
<>
    <SafeAreaView style={miEstilos.encabezado}>
      <Text></Text>
      <View>
        
        <Text style={miEstilos.sectionTitle}>Convertidor De Monedas </Text>
        <Text style={miEstilos.sectionTitle}>      Brayan Andino</Text>
     </View>
       </SafeAreaView>
       <View>
       <Text style={miEstilos.sectionDescription}>   Valor en Dolares</Text>
       <TextInput
            style={miEstilos.imput}
            placeholder="Escriba un valor en $"
            keyboardType="numeric"
            onChange={(e)=> convertir(e.nativeEvent.text)}
            defaultValue={entrada.toString()} //aplicando las variables vacias
            />
         <Text style={miEstilos.sectionDescription}>  Valor en LEmpiras </Text>   
         
         <TextInput
         style={miEstilos.imput}
         placeholder="valor en Lps"
         defaultValue={conversion.toString()} //variasbles en 0
         />
         <Button
         title="Limpiar"
         color='#337DFF'
         onPress={inicializar}//accion del boton y variables en 0
        

         ></Button>
         <Text style={miEstilos.sectionDescription}>Entrada: {entrada}</Text>
         <Text style={miEstilos.sectionDescription}>Conversion: {conversion}</Text>
        </View>
        
       </>
    )    
  }
  
const miEstilos = StyleSheet.create({
  encabezado:{

    backgroundColor: '#337DFF',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    padding: 25
  },

imput:{
  height: 40,
  margin: 12,
  borderWidth: 1

} ,
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }
 
});


