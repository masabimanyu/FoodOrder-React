import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {Button, Gap,ItemListMenu} from '../../components';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData, showMessage, storeData} from '../../utils';
import * as ImagePicker from "react-native-image-picker"
import Axios from 'axios';
import {API_HOST} from '../../config';


const Account = ({navigation}) => {
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };
 const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    navigation.addListener('focus', () => {
      updateUserProfile();
    });
  }, [navigation]);

  const updateUserProfile = () => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  };

  const updatePhoto = () => {
    ImagePicker.launchImageLibrary(
      {
        quality: 0.7,
        maxWidth: 200,
        maxHeight: 200,
      },
      (response) => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };

          const photoForUpload = new FormData();
          photoForUpload.append('file', dataImage);
          getData('token').then((resToken) => {
            Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
              headers: {
                Authorization: resToken.value,
                'Content-Type': 'multipart/form-data',
              },
            })
              .then((res) => {
                getData('userProfile').then((resUser) => {
                  showMessage('Update Photo Berhasil', 'success');
                  resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
                  storeData('userProfile', resUser).then(() => {
                    updateUserProfile();
                  });
                });
              })
              .catch((err) => {
                showMessage(
                  `${err?.response?.data?.message} on Update Photo API` ||
                    'Terjadi kesalahan di API Update Photo',
                );
              });
          });
        }
      },
    );
  };
    return (
         <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
             <TouchableOpacity onPress={updatePhoto}>
            <View style={styles.borderPhoto}>
              <Image
                source={{uri: userProfile.profile_photo_url}}
                style={styles.photoContainer}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <View style={styles.content}>
         <View style={styles.containerAccount}>
      <ItemListMenu text="Help" color="#fff"/>
      <ItemListMenu text="Security" color="#fff"/>
      <ItemListMenu text="Payments" color="#fff"/>
      <ItemListMenu text="SignOut" onPress={signOut} color="#fff"/>
    </View>
    <Gap height={200} />
      </View>
      
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1,backgroundColor: '#1a1a1a',},
  profileDetail: {backgroundColor: '#1a1a1a', paddingBottom: 26},
  name: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    margin: 20,
  },
  email: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    color: '#fff',
    textAlign: 'center',
  },
  containerAccount: {paddingTop: 8, paddingHorizontal: 24},
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
});
