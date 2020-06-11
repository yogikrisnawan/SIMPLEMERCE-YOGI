import React, {useSstate, useState} from 'react'
import { useSelector } from 'react-redux'
import { View, Image} from 'react-native'
import { Button, Text} from 'native-base'
import ImagePicker from 'react-native-image-picker';
import axios from '../../config/api'

export default function EditAccount() {

   const [source, setSource] = useState({})
   const token = useSelector(state => state.auth.token)

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

   // menyimpan gambar ke database
   const onSaveImage = () => {
      const config = {headers: {Authorization: token}}
      const data = new FormData()

      data.append("avatar", source)
      axios.post('/user/avatar', data, config)
      .then(res => console.log({res}))
      .catch(err => console.log({err}))
   }

   return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >Edit Account Component</Text>
         <Image style={{width: 200, height: 200}} source={source} />
         <Button onPress={onChooseImage} >
            <Text>Choose</Text>
         </Button>
         <Button onPress={onSaveImage} >
            <Text>Save</Text>
         </Button>
      </View>
   )
}


/*
Exercise
Edit Account
User dapat mengganti nama, email, password

*/


/*
IMAGE PICKER
android/app/src/main/AndroidManifest.xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>


AXIOS SEND IMAGE

Tambahkan kode berikut pada 'block application' pada alamat file android/app/src/main/AndroidManifest.xml
<application
      ...
      >> Copy paste kode ini <<
      android:usesCleartextTraffic="true">

Komentar kode dibawah ini pada alamat file /android/app/src/main/java/com/rnative_commerce/MainApplication.java
// initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
*/