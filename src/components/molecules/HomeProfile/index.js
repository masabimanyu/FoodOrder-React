import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {getData} from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IcBackWhite} from '../../../assets';

const HomeProfile = ({title, subTitle, onBack}) => {
  
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };
  const [photo, setPhoto] = useState(ProfileDummy);
  const [UserName, setUserName] = useState();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then((res) => {
        setUserName(res.name);
        setPhoto({uri: res.profile_photo_url});
      });
    });
  }, [navigation]);

  
  {/*

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile','name').then((res) => {
        setPhoto({uri: res.profile_photo_url});
      });
    });
  }, [navigation]);*/}

  return (
    <View style={styles.profileContainer}>
    {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBackWhite />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.appName}>{title}</Text>
        <Text style={styles.desc}>{subTitle}</Text>
      </View>
      
      {/*}
     
      <View style={styles.borderPhoto}>
      <Image source={photo} style={styles.profile} />
      </View> */}
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
   borderPhoto: {
    borderColor: '#020202',
    width: 40,
    height: 40,
    marginTop: 20,
    borderRadius: 10,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {fontSize: 32, fontFamily: 'Poppins-Medium', color: '#fff'},
  desc: {fontSize: 12, fontFamily: 'Poppins-Light', color: '#fff', marginTop: -10,},
  profile: {width: 40, height: 40, borderRadius: 15},
});
