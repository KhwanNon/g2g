import React from 'react';
import {styles} from '../style';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const MenuHome = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.boxMenu}>
      <FlatList
        keyExtractor={item => '#' + item.id}
        numColumns={4}
        key={'#'}
        data={items}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.push(item.route)}
              style={styles.boxItemMenu}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const items = [
  {
    id: 1,
    name: 'เติมเงิน',
    route: 'Deposit',
  },
  {
    id: 2,
    name: ' ซื้อ/ขาย\nE - GOLD',
    route: 'GoldTrade',
  },
  {
    id: 3,
    name: 'ฝากทอง',
    route: 'GoldDeposit',
  },
  {
    id: 4,
    name: 'แลกทองคำ',
    route: 'GoldExchange',
  },
  {
    id: 5,
    name: ' ส่ง/รับ\nของขวัญ',
    route: 'Gift',
  },
  {
    id: 6,
    name: 'ถอนเงิน',
    route: 'Withdraw',
  },
  {
    id: 7,
    name: 'ประวัติ',
    route: 'History',
  },
  {
    id: 8,
    name: 'ตั้งค่า',
    route: 'Setting',
  },
];

export default MenuHome;
