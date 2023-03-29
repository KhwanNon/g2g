import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './style';
import {assetLogo} from '../../../generated/assets';

import {collection, addDoc, getDoc} from 'firebase/firestore';
import {db} from '../../../database/firebase_db';

const SplashPage = () => {
  const isLogin = true;
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(isLogin ? 'Home' : 'Auth');
    }, 2000);
  }, []);

  const testFetch = async () => {
    
  }


  return (
    <View style={styles.container}>
      <Image style={styles.boxLogo} source={assetLogo} />
    </View>
  );
};

export default SplashPage;
