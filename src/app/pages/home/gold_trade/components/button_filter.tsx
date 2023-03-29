import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colorGold3, colorGrey} from '../../../../../base/color';
import Row from '../../../../../base/components/ui_component/row';

type ButtonProps = {
  left: boolean;
  right: boolean;
  title: string;
  isSelect: boolean;
};

function Button({left, right, title, isSelect}: ButtonProps) {
  const borderRadius = {
    borderBottomLeftRadius: left ? 10 : 0,
    borderTopLeftRadius: left ? 10 : 0,
    borderBottomRightRadius: right ? 10 : 0,
    borderTopRightRadius: right ? 10 : 0,
  };

  const buttonWidth = {
    width: left || right ? 40 : 50,
  };

  const buttonBackground = {
    backgroundColor: isSelect ? colorGold3 : colorGrey,
  };

  return (
    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {}}>
      <View
        style={[
          buttonWidth,
          borderRadius,
          buttonBackground,
          {height: 40, alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Text style={{fontSize: 12}}>{title}</Text>
      </View>
      {!right && (
        <View style={{height: 35, width: 1, backgroundColor: 'lightgrey'}} />
      )}
    </TouchableOpacity>
  );
}

function ButtonFilter() {
  return (
    <Row style={[{marginLeft: 15}]}>
      <Button left right={false} title={'7วัน'} isSelect={true} />
      <Button left={false} right={false} title={'1เดือน'} isSelect={false} />
      <Button left={false} right={false} title={'6เดือน'} isSelect={false} />
      <Button left={false} right={true} title={'1ปี'} isSelect={false} />
    </Row>
  );
}

export default ButtonFilter;
