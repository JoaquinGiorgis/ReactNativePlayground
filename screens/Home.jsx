import React from 'react'
import { View, Text, } from 'react-native'

const Home = (props) => {
    return (
        
        <View style={styles.container}>

            <View style={styles.cajaTexto}>
                <Text style={{fontSize:20}}>COLUMN</Text>
            </View>

            <View style={styles.cajaColumn}>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍓</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍍</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍇</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🥝</Text>
                </View>
            </View>

            <View style={styles.cajaTexto}>
                <Text style={{fontSize:20}}>COLUMN-REVERSE</Text>
            </View>

            <View style={styles.cajaColumnReverse}>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍓</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍍</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍇</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🥝</Text>
                </View>
            </View>
            
            <View style={styles.cajaTexto}>
                <Text style={{fontSize:20}}>ROW</Text>
            </View>

            <View style={styles.cajaRow}>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍓</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍍</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍇</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🥝</Text>
                </View>
            </View>
           
            <View style={styles.cajaTexto}>
                <Text style={{fontSize:20}}>ROW-REVERSE</Text>
            </View>
           
            <View style={styles.cajaRowReverse}>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍓</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍍</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🍇</Text>
                </View>
                <View style={styles.contenedorEmojis}>
                    <Text style={{fontSize:45}}>🥝</Text>
                </View>
            </View>

            
          
            {/* <View style={styles.boton}>
                  <Text style={{fontSize:20}}  onPress={()=> props.navigation.navigate('Justify')}>IR A JUSTIFY-CONTENT</Text>
            </View> */}
        </View>
        
    )
}

const styles ={
    contenedorEmojis:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1,
        width:60,
        height:60,
    },
    boton:{
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
    },
    cajaTexto:{
        alignItems:'center',
        width:'100%', 
        backgroundColor:'yellow'
    },
    cajaRow:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
        marginBottom:5,
    },
    cajaRowReverse:{
        flexDirection:'row-reverse',
        marginTop:5,
        marginBottom:5,
    },
    cajaColumn:{
        flexDirection:'column',
        marginTop:5,
        marginBottom:5
    },
    cajaColumnReverse:{
        flexDirection:'column-reverse',
        marginTop:5,
        marginBottom:5
    },
    container:{
        justifyContent:'space-between',
       height:'100%',
       backgroundColor:'blue', 
    }
}

export default Home