import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import stylesGlobal from '../../../../base/styles_global';
import Box from '../../../../base/components/ui_component/box';
import ListTileBank from '../../../../base/components/ui_component/list_tile_bank';

const DepositPage = () => {
  const navigation: any = useNavigation();

  const listBank = [
    {
      name: 'SCB Easy App',
    },
    {
      name: 'Bualuang mBanking',
    },
    {
      name: 'K PLUS',
    },
    {
      name: 'Krungsri Mobile App',
    },
    {
      name: 'Krungthai NEXT App',
    },
  ];

  const goToWithdraw = () => {
    navigation.push('WithdrawBank');
  };

  return (
    <View style={{...stylesGlobal.containerWhite, padding: 15}}>
      <Text style={styles.textTitle}>ธนาคาร</Text>
      <Box h={10} />
      {listBank.map((item, idx) => {
        return (
          <ListTileBank
            state={'bank'}
            key={`#${idx}`}
            title={item.name}
            onPress={goToWithdraw}
          />
        );
      })}

      <Box h={40} />
      <Text style={styles.textTitle}>ช่องทางบริการอื่นๆ</Text>
      <Box h={10} />
      <ListTileBank
        state={'other'}
        onPress={() => {}}
        title={'Visa Mastercard'}
      />
    </View>
  );
};

export default DepositPage;
