import React from 'react';
import {colorGold3, colorGrey} from '../../../../../base/color';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesGlobal from '../../../../../base/styles_global';

type Props = {
  left: boolean;
  right: boolean;
  index: number;
  title: string;
  isSelect: boolean;
};

const ButtonFilter = () => {
  return (
    <View style={{...stylesGlobal.row, marginLeft: 15}}>
      <Button
        left={true}
        right={false}
        index={0}
        title={'7วัน'}
        isSelect={true}
      />
      <Button
        left={false}
        right={false}
        index={1}
        title={'1เดือน'}
        isSelect={false}
      />
      <Button
        left={false}
        right={false}
        index={2}
        title={'6เดือน'}
        isSelect={false}
      />
      <Button
        left={false}
        right={true}
        index={3}
        title={'1ปี'}
        isSelect={false}
      />
    </View>
  );
};

const Button = ({left, right, index, title, isSelect}: Props) => {
  return (
    <TouchableOpacity style={{...stylesGlobal.row}} onPress={() => {}}>
      <View
        style={{
          height: 40,
          width: left || right ? 40 : 50,

          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isSelect ? colorGold3 : colorGrey,

          borderBottomLeftRadius: left ? 10 : 0,
          borderTopLeftRadius: left ? 10 : 0,

          borderBottomRightRadius: right ? 10 : 0,
          borderTopRightRadius: right ? 10 : 0,
        }}>
        <Text style={{fontSize: 12}}>{title}</Text>
      </View>

      {index != 3 ? (

        <View style={{height: 35, width: 1, backgroundColor: 'lightgrey'}} />
        
      ) : null}
    </TouchableOpacity>
  );
};

export default ButtonFilter;
