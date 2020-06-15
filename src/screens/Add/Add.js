import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet, Alert, View, Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Textarea} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from '../../config/api'
import { btn, bg, m } from '../../styles'

const Add = ({navigation}) => {

   const token = useSelector(state => state.auth.token)

   const [name, setName] = useState('')
   const [stock, setStock] = useState('')
   const [price, setPrice] = useState('')
   const [description, setDescription] = useState('')
   const [source, setSource] = useState({})

   const changeName = text => setName(text)
   const changeDescription = text => setDescription(text)
   const changePrice = text => setPrice(text)
   const changeStock = text => setStock(text)

   const options = {
      title: 'Choose Avatar'
   };

   // memilih gambar dari camera atau gallery
   const onChooseImage = () => {
      ImagePicker.showImagePicker(options, (response) => {
         console.log({response});
      
         if (response.didCancel) {
            console.log('User cancelled image picker');
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
         } else {
            const source = { uri: response.uri, type:response.type, name: response.fileName };
            setSource(source)
         }
      });
   }

   const onAddProduct = () => {
      const config = {headers: {Authorization:token }}
      const data = new FormData()

      data.append("name", name)
      data.append("stock", stock)
      data.append("price", price)
      data.append("description", description)
      data.append("picture", source)
      
      axios.post('/product', data, config)
         .then(res => console.log({res}))
         .catch(err => console.log({err}))
   }

   return (
      <Container>
        <Content>
            <Text style={styles.label} >Product Name</Text>
            <Input style={styles.input} placeholder="Insert product name" value={name} onChangeText={changeName}  />

            <Text style={styles.label} >Stock</Text>
            <Input style={styles.input} placeholder="Insert stock" value={stock} onChangeText={changeStock} />

            <Text style={styles.label} >Price</Text>
            <View style={{flexDirection: "row", marginHorizontal: 10, height: 35}} >
            {/* viewPriceIcon */}
               <View style={{
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderTopLeftRadius: 3,
                  borderBottomLeftRadius: 3,
                  borderRightWidth: 0,
                  backgroundColor: '#eaeaea',
                  width: '10%'
               }} >
               {/* priceIcon */}
                  <Icon style={{
                     alignSelf: "center",
                     paddingVertical: 6
                  }} name="currency-usd" size={20} />
               </View>
               {/* priceInput */}
               <Input style={[styles.priceInput]} placeholder="Hello" value={price} onChangeText={changePrice} />
            </View>

            <Text style={styles.label} >Description</Text>
            <Textarea style={styles.description} placeholder="Your Description" value={description} onChangeText={changeDescription} />

            <View style={styles.photo} > 
               <Image style={styles.image} source={source} />
            </View>

            {/* Button choose dan save */}
            <View style={styles.buttons} >
               <Button style={[btn, styles.btnChoose]} onPress={onChooseImage} >
                  <Text style={styles.btnText}>Choose</Text>
               </Button>
            </View>


            <Button block style={[btn, bg.purple, m.ten]}  onPress={onAddProduct} >
               <Text>Add</Text>
            </Button>
         </Content>
      </Container>
   )
}

const styles = StyleSheet.create({
   label: {
      margin : 10,
      color: "purple"
   },
   input: {
      borderWidth: 1,
      borderRadius: 3,
      borderColor: 'grey',
      marginHorizontal:10,
      height: 35,
      fontSize: 15,
      paddingVertical: 5,
      paddingLeft: 10
   },
   description: {
      borderWidth: 1,
      borderRadius: 3,
      borderColor: 'grey',
      marginHorizontal:10,
      height: 90
   },
   priceInput: {
      borderWidth: 1,
      borderTopRightRadius : 3,
      borderBottomRightRadius : 3,
      borderColor: 'grey',
      height:35,
      paddingVertical: 5,
      paddingLeft: 10
   },
   photo : {
      width: 170,
      height: 170 ,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 3,
      margin: 10,
      alignSelf: 'center'
   },
   image: {
      width: '100%',
      height: '100%'
   },
   btnChoose: {
      backgroundColor: '#eaeaea',
      width: '60%',
      alignSelf: 'center',
      height: 30
   },
   btnText : {
      color: 'black',
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold'
   }
})


export default Add


   

            
