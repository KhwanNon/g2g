import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Box from '../../../../base/components/ui_component/box';

import {
  assetMenuDeposit,
  assetMenuGDeposit,
  assetMenuGExchange,
  assetMenuGift,
  assetMenuHistory,
  assetMenuSetting,
  assetMenuTrade,
  assetMenuWithdraw,
} from '../../../../generated/assets';
import {styles} from '../style';
import {colorTextTitle} from '../../../../base/color';

const MenuHome = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.boxMenu}>
      {items.map(item => (
        <TouchableOpacity
          key={`#${item.id}`}
          style={styles.boxItemMenu}
          onPress={() => navigation.push(item.route)}>
          <Box h={item.spaceTop} />
          <Image
            style={{
              ...styles.icon,
              width: item.w,
              height: item.h,
            }}
            source={item.icon}
          />
          <Box h={item.spaceBottom} />
          <Text style={{textAlign: 'center', color: colorTextTitle}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const items = [
  {
    id: 1,
    name: 'เติมเงิน',
    route: 'Deposit',
    icon: assetMenuDeposit,
    spaceBottom: 10,
    spaceTop: 10,
    w: 25,
    h: 37,
  },
  {
    id: 2,
    name: ' ซื้อ/ขาย\nE - GOLD',
    route: 'GoldTrade',
    icon: assetMenuTrade,
    spaceBottom: 8,
    spaceTop: 15,
    w: 39,
    h: 37,
  },
  {
    id: 3,
    name: 'ฝากทอง',
    route: 'GoldDeposit',
    icon: assetMenuGDeposit,
    spaceBottom: 10,
    spaceTop: 20,
    w: 30,
    h: 30,
  },
  {
    id: 4,
    name: 'แลกทองคำ',
    route: 'GoldExchange',
    icon: assetMenuGExchange,
    spaceBottom: 10,
    spaceTop: 20,
    w: 50,
    h: 30,
  },
  {
    id: 5,
    name: ' ส่ง/รับ\nของขวัญ',
    route: 'Gift',
    icon: assetMenuGift,
    spaceBottom: 10,
    spaceTop: 15,
    w: 30,
    h: 30,
  },
  {
    id: 6,
    name: 'ถอนเงิน',
    route: 'Withdraw',
    icon: assetMenuWithdraw,
    spaceBottom: 10,
    spaceTop: 15,
    w: 30,
    h: 35,
  },
  {
    id: 7,
    name: 'ประวัติ',
    route: 'History',
    icon: assetMenuHistory,
    spaceBottom: 10,
    spaceTop: 25,
    w: 25,
    h: 26,
  },
  {
    id: 8,
    name: 'ตั้งค่า',
    route: 'Setting',
    icon: assetMenuSetting,
    spaceBottom: 10,
    spaceTop: 25,
    w: 25,
    h: 25,
  },
];

export default MenuHome;
