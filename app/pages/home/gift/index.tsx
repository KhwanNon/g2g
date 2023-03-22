import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Box from '../../../../base/components/ui_component/box';
import CardMyGold from '../../../../base/components/page_component/card_my_gold';

import {styles} from './style';
import {colorTextLabel} from '../../../../base/color';
import stylesGlobal from '../../../../base/styles_global';
import {assetMenuGift} from '../../../../generated/assets';
import {useNavigation} from '@react-navigation/native';

const GiftPage = () => {
  const navigation: any = useNavigation();

  const goToTransfer = () => navigation.push('GoldTransfer');

  const renderButton = () => (
    <TouchableOpacity style={styles.button} onPress={goToTransfer}>
      <Image style={{width: 30, height: 30}} source={assetMenuGift} />
      <Box w={10} />
      <Text style={styles.textBtn}>ส่งของขวัญ</Text>
    </TouchableOpacity>
  );

  const renderCardText = () => (
    <LinearGradient
      end={{x: 1, y: 0}}
      start={{x: 0, y: 0}}
      style={styles.cardText}
      colors={['#F2EDD0', '#E2BF85']}>
      <Text style={{color: colorTextLabel, fontSize: 13}}>
        การส่งของขวัญคือ การส่ง E-Gold ที่มีอยู่ในระบบของคุณเป็น
        ของขวัญให้กับผู้รับ ie คุณมี 2E-Gold ในระบบ เมื่อทำการ ส่ง 0.8E-Gold
        ให้ผู้รับแล้ว จำนวน E-Gold ของคุณจะลดลง เหลือ 1.2 E-Gold หรือ 1.2
        บาททองคำ
      </Text>
    </LinearGradient>
  );

  return (
    <View style={[stylesGlobal.containerWhite, {padding: 15}]}>
      <CardMyGold />
      <Box h={20} />
      {renderButton()}
      <Box h={20} />
      {renderCardText()}
    </View>
  );
};

export default GiftPage;
