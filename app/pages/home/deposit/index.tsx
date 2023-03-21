import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Box from '../../../../base/components/ui_component/box';
import ListTileBank from '../../../../base/components/ui_component/list_tile_bank';

import {styles} from './style';
import stylesGlobal from '../../../../base/styles_global';

const DepositPage = () => {
  const navigation: any = useNavigation();

  const listBank = [
    {name: 'SCB Easy App'},
    {name: 'Bualuang mBanking'},
    {name: 'K PLUS'},
    {name: 'Krungsri Mobile App'},
    {name: 'Krungthai NEXT App'},
  ];

  const goToWithdraw = () => {
    navigation.push('WithdrawBank');
  };

  const renderBankList = () => {
    return listBank.map((item, idx) => {
      return (
        <ListTileBank
          state={'bank'}
          key={`#${idx}`}
          title={item.name}
          onPress={goToWithdraw}
        />
      );
    });
  };

  const renderOtherServices = () => {
    return (
      <>
        <ListTileBank
          title={'Visa Mastercard'}
          onPress={() => {}}
          state={'other'}
        />
      </>
    );
  };

  return (
    <View style={[stylesGlobal.containerWhite, {padding: 15}]}>
      <Text style={styles.textTitle}>ธนาคาร</Text>
      <Box h={10} />
      {renderBankList()}

      <Box h={40} />
      <Text style={styles.textTitle}>ช่องทางบริการอื่นๆ</Text>
      <Box h={10} />
      {renderOtherServices()}
    </View>
  );
};

export default DepositPage;
