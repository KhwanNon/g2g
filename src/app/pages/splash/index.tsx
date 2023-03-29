import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './style';
import {assetLogo} from '../../../generated/assets';

function SplashPage() {
  const isLogin = true;
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(isLogin ? 'Home' : 'Auth');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.boxLogo} source={assetLogo} />
    </View>
  );
}

export default SplashPage;
