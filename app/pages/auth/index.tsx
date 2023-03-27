import React from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Box from '../../../base/components/ui_component/box';
import Column from '../../../base/components/ui_component/column';
import ButtonStyle from '../../../base/components/ui_component/button_style';

import {styles} from './style';
import {colorGold} from '../../../base/color';
import stylesGlobal from '../../../base/styles_global';
import {assetGFA, assetLiquid, assetLogo} from '../../../generated/assets';

const AuthPage = () => {
  const navigation: any = useNavigation();

  const TEXT_1: string = 'Destine your own wealth';
  const TEXT_2: string = '“just click”';
  const TEXT_3: string = 'The Ultimate Gold Platform Services';

  const goToTerm = () => navigation.push('Term');

  return (
    <View style={styles.container}>
      <Image style={styles.boxLiquid} source={assetLiquid} />

      <Column style={stylesGlobal.alignItemsCenter}>
        <Box h={40} />
        <Image style={styles.boxLogo} source={assetLogo} />

        <Box h={90} />
        <Text style={styles.txtH2}>{TEXT_1}</Text>
        <Text style={styles.txtH2}>{TEXT_2}</Text>

        <Box h={20} />
        <Image style={styles.gfaTxt} source={assetGFA} />

        <Box h={20} />
        <Text style={styles.txtH2}>{TEXT_3}</Text>
      </Column>

      <View style={{padding: 15, width: '100%'}}>
        <ButtonStyle
          height={45}
          width={'100%'}
          colorTxt={'white'}
          title={'เริ่มต้นใช้งาน'}
          onTap={goToTerm}
          backgroundColor={colorGold}
        />
        <Box h={30} />
      </View>
    </View>
  );
};

export default AuthPage;
