import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import MyCard from './components/card';
import MenuHome from './components/menu';
import GraphGold from './components/graph';
import Notification from './components/notification';
import Box from '../../../base/components/ui_component/box';
import Row from '../../../base/components/ui_component/row';
import ButtonIcon from '../../../base/components/ui_component/button_icon';

import {styles} from './style';
import {colorGold} from '../../../base/color';
import stylesGlobal from '../../../base/styles_global';

function HomePage() {
  function renderTitle(text: string) {
    return <Text style={styles.textTitle}>{text}</Text>;
  }

  function renderDivider() {
    return (
      <View
        style={{
          height: 5,
          backgroundColor: '#EFEFEF',
        }}
      />
    );
  }

  function renderBalance() {
    return (
      <Row style={stylesGlobal.alignItemsCenter}>
        <Text style={styles.textAmount}>฿ 0.00</Text>
        <Box w={15} />
        <ButtonIcon
          size={24}
          color={colorGold}
          onTap={() => {}}
          name="add-circle-outline"
        />
      </Row>
    );
  }

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
}

export default HomePage;
