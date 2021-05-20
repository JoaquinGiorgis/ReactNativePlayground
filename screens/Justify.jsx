import React from 'react'
import { View, Text } from 'react-native'

const Justify = () => {
    return(
        <View style={styles.container}>
            
            <View style={styles.cajaTexto}>
                <Text style={{fontSize:20}}>FLEX-START</Text>
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
                <Text style={{fontSize:20}}>FLEX-END</Text>
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

            <View style={styles.cajaTexto}>
                <Text style={{fontSize:20}}>CENTER</Text>
            </View>

            <View style={styles.cajaCenter}>
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
                <Text style={{fontSize:20}}>SPACE-BETWEEN</Text>
            </View>

            <View style={styles.cajaSpaceBetween}>
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
                <Text style={{fontSize:20}}>SPACE-AROUND</Text>
            </View>

            <View style={styles.cajaSpaceAround}>
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
                <Text style={{fontSize:20}}>SPACE-EVENLY</Text>
            </View>
            
            <View style={styles.cajaSpaceEvenly}>
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
        backgroundColor:'yellow', 
    },
    cajaRow:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5,
    },
    cajaRowReverse:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5,
    },
    cajaCenter:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5
    },
    cajaSpaceBetween:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5
    },
    cajaSpaceAround:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5
    },
    cajaSpaceEvenly:{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5
    },
    container:{
        justifyContent: 'space-between',
       height:'100%',
       backgroundColor:'blue', 
    }
}

export default Justify