import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet, Alert, View, Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import axios from '../../config/api'
import { btn  } from '../../styles'

const Add = ({navigation}) => {

   const token = useSelector(state => state.auth.token)

   const [name, setName] = useState('')
   const [stock, setStock] = useState('')
   const [price, setPrice] = useState('')
   const [description, setDescription] = useState('')
   const [source, setSource] = useState({})

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
            <Form>
            <Item stackedLabel>
               <Label>Product Name</Label>
               <Input value={name} onChangeText={(text) => setName(text)} />
            </Item>
            <Item stackedLabel>
               <Label>Stock</Label>
               <Input value={stock} onChangeText={(text) => setStock(text)} />
            </Item>
            <Item stackedLabel>
               <Label>Price</Label>
               <Input value={price} onChangeText={(text) => setPrice(text)} />
            </Item>
            <Item stackedLabel last>
               <Label>Description</Label>
               <Input value={description} onChangeText={(text) => setDescription(text)} />
            </Item>
            </Form>

            <View style={styles.photo} > 
               <Image style={styles.image} source={source} />
            </View>

            {/* Button choose dan save */}
            <View style={styles.buttons} >
               <Button style={[btn]} onPress={onChooseImage} >
                  <Text style={styles.btnText}>Choose</Text>
               </Button>
            </View>


            <Button block style={styles.signBtn}  onPress={onAddProduct} >
               <Text>Add</Text>
            </Button>
         </Content>
      </Container>
   )
}

const styles = StyleSheet.create({
   photo : {
      width: 170,
      height: 170 ,
      borderWidth: 1,
      margin: 10,
      alignSelf: 'center'
   },
   image : {
      width: '100%',
      height: '100%'
   },
   btnText : {
      width: '100%',
      textAlign: 'center'
   },
   text: {
      marginTop: 35,
      fontSize: 25,
      textAlign: 'center'
   },
   signBtn : {
      backgroundColor: 'purple',
      padding: 9,
      margin: 5,
      borderRadius: 5
   },
   signText: {
      fontSize: 19,
      color: 'white',
      textAlign: 'center'
   },
   signUpText: {
      marginTop: 5,
      fontSize: 17,
      color: 'blue',
      textAlign: 'center'
   }
})


export default Add


   

            
