import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from '../../../../base/components/ui_component/box';
import CardMyGold from '../../../../base/components/page_component/card_my_gold';

import {styles} from './style';
import {colorDarkGold2} from '../../../../base/color';
import stylesGlobal from '../../../../base/styles_global';
import {useNavigation} from '@react-navigation/native';

function GoldExchangePage () {
  const navigation: any = useNavigation();
  const goToRedeem = () => navigation.push('Redeem');

  return (
    <View style={[stylesGlobal.containerWhite, {padding: 15}]}>
      <CardMyGold />
      <Box h={20} />
      <TouchableOpacity style={styles.button} onPress={goToRedeem}>
        <Ionicons size={30} color={colorDarkGold2} name={'gift-outline'} />
        <Box w={10} />
        <Text style={styles.textBtn}>แลกทองคำ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoldExchangePage;