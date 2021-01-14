import React,{useState} from 'react';
import {SafeAreaView,View,Text,StyleSheet,TextInput,Button} from 'react-native';


function TodoDemo(){

    // editar leer  = let 
    // pura lectura  = const 

    //Que es un arreglo   = ["texto",12321312,{key:"value"},["dasd",123],true]
    // que es un objeto  = {key:"value",}
    // true && false || 0 && 1
                //0,...,n
    const list = ["Nova","Bonnie","Taizon","Rex","Panzer"]
    const [data,setData] = useState(list)
    const [name,setName] = useState('')
    //arr.map((item,index,arrOrigin)=>{
    //    return  item
   // })

   //JS puro
    //arr.map(function (item,index,arrOrigin){
    //    return  item
   // })

   const handleChage = (value) => {
        setName(value)
   }

   const addPerro = ()=>{
       //opcion 1
      // let newData = [...data]
      // newData.push(name)
      //setData(newData)


      if(name === '') return false
      //opcion 2
      setData([...data,name])
      setName('')
   }

   const deleteDog = (index) =>{
       let newArr = [...data]
       newArr.splice(index,1)
        setData(newArr)
   }
    return(
        <SafeAreaView>
            {/* Title */}
            <View>
                <Text style={styles.textStyle} >Hola Morr@s</Text>
            </View>
            
            {/* List conteiner */}
            <View style={styles.listConaier}>
                <Text style={styles.textStyle} >Lista de Perros</Text>
                <View style={styles.listConaier}>
                    {data.map((item,index)=> 
                    <View style={styles.rowList} key={index}>
                        <Text style={styles.textStyle} >Nombre: {item}</Text> 
                        <Button onPress={()=>deleteDog(index)} title="Eliminar"/>
                    </View>
                    )}
                    
                </View>
            </View>
            {/* Add Dog */}
            <View style={styles.listConaier}>
                <Text style={styles.textStyle} >Agrega tu perro</Text>
                <View style={styles.listConaier}>
                  <TextInput 
                    value={name}
                    onChangeText={(text)=> handleChage(text)}
                    placeholder="Nombre perro"
                  />
                    
                </View>
                <Button title="Agrega Perro" onPress={addPerro}/>
            </View>
        </SafeAreaView>
    );
};

export default TodoDemo;

const styles = StyleSheet.create({
    textStyle:{
        textAlign:'center'
    },
    listConaier:{
        padding:10
    },
    rowList:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})