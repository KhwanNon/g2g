import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import MyCard from './components/card';
import MenuHome from './components/menu';
import GraphGold from './components/graph';
import Notification from './components/notification';
import Box from '../../../base/components/ui_component/box';
import ButtonIcon from '../../../base/components/ui_component/button_icon';

import {styles} from './style';
import {colorGold} from '../../../base/color';
import stylesGlobal from '../../../base/styles_global';

const HomePage = () => {
  const renderTitle = (text: string) => (
    <Text style={styles.textTitle}>{text}</Text>
  );

  const renderDivider = () => (
    <View
      style={{
        height: 5,
        backgroundColor: '#EFEFEF',
      }}
    />
  );

  const renderBalance = () => (
    <View style={stylesGlobal.row}>
      <Text style={styles.textAmount}>฿ 0.00</Text>
      <Box w={15} />
      <ButtonIcon
        size={24}
        color={colorGold}
        name="add-circle-outline"
        onTap={() => {}}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Box h={15} />
      {renderTitle('ยอดคงเหลือ')}

      <Box h={15} />
      {renderBalance()}

      <Box h={15} />
      <MyCard />

      <Box h={15} />
      <Notification />

      <Box h={15} />
      {renderTitle('บริการของเรา')}

      <Box h={10} />
      <MenuHome />

      {renderDivider()}

      <Box h={20} />
      {renderTitle('ราคาทองวันนี้')}
      <GraphGold />
    </ScrollView>
  );
};

export default HomePage;
