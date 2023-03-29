import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity} from 'react-native';

import Box from '../../../../base/components/ui_component/box';
import Row from '../../../../base/components/ui_component/row';
import Divider from '../../../../base/components/ui_component/divider';

import {
  colorGold2,
  colorTextTitle,
  colorDarkGold,
} from '../../../../base/color';
import styleSetting from './style';
import stylesGlobal from '../../../../base/styles_global';

export type menuModel = {
  state: string;
  title: string;
  subTitle: string;
  icon: string;
};

type Props = {
  item: menuModel;
  onPress?: () => void;
};

function MenuItem({item, onPress}: Props) {
  function renderIcon() {
    return <Ionicons name={'chevron-forward'} size={20} color={'lightgrey'} />;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={stylesGlobal.between}>
        <Row style={stylesGlobal.alignItemsCenter}>
          <LinearGradient
            style={styleSetting.boxIcon}
            colors={[colorGold2, colorDarkGold]}>
            <Ionicons name={item.icon} size={22} color={'white'} />
          </LinearGradient>
          <Box w={10} />
          <View>
            <Text style={{color: colorTextTitle, fontSize: 16}}>
              {item.title}
            </Text>
            {item.state == 'logout' ? null : <Text>{item.subTitle}</Text>}
          </View>
        </Row>
        {item.state != 'version' ? renderIcon() : <Text>1.0.0</Text>}
      </Row>
      <Box h={12} />
      <Divider />
      <Box h={15} />
    </TouchableOpacity>
  );
}

export default MenuItem;
