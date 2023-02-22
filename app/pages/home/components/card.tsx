//? react
import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//? base
import {styles} from '../style';
import {assetLogo} from '../../../../generated/assets';
import {colorGold2, colorDarkGold} from '../../../../base/color';

const MyCard = () => {
  return (
    <LinearGradient
      end={{x: 1, y: 0}}
      start={{x: 0, y: 0}}
      style={styles.myCard}
      colors={[colorGold2, colorDarkGold]}>
      <Image style={styles.logo} source={assetLogo} />
    </LinearGradient>
  );
};

export default MyCard;
