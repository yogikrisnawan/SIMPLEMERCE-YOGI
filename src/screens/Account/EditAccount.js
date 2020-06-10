import React, {useSstate, useState} from 'react'
import { View, Image} from 'react-native'
import { Button, Text} from 'native-base'
import ImagePicker from 'react-native-image-picker';

export default function EditAccount() {

   const [link, setlink] = useState({})

   const options = {
      title: 'Choose Avatar'
   };

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
            const source = { uri: 'data:image/jpeg;base64,' + response.data };
            setlink(source)
         }
      });
   }




   return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
         <Text style={{fontSize:30, fontWeight: 'bold'}} >Edit Account Component</Text>
         <Image style={{width: 200, height: 200}} source={link} />
         <Button onPress={onChooseImage} >
            <Text>Choose Image</Text>
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

android
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
*/