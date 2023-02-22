import React from 'react';
import ButtonIcon from './button_icon';
import {Text, View} from 'react-native';
import {colorTextLabel} from '../../color';
import stylesGlobal from '../../styles_global';

type Props = {
  title: string;
  color?: string;
  setOpen: Function;
  state: 'close' | 'back' | 'none';
};

const AppBarStyle = ({setOpen, state, title, color}: Props) => {
  return (
    <View
      style={{
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: color,
        ...stylesGlobal.rowBetween,
      }}>
      {state == 'back' ? (
        <ButtonIcon
          size={30}
          name={'chevron-back'}
          color={colorTextLabel}
          onTap={() => setOpen(false)}
        />
      ) : (
        <View style={{width: 30}} />
      )}
      <Text style={stylesGlobal.textHeader}>{title}</Text>
      {state == 'close' ? (
        <ButtonIcon
          size={30}
          name={'close'}
          color={colorTextLabel}
          onTap={() => setOpen(false)}
        />
      ) : (
        <View style={{width: 30}} />
      )}
    </View>
  );
};

export default AppBarStyle;
