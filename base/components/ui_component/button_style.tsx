import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
  colorTxt: string;
  onTap?: () => void;
  width: string | number;
  backgroundColor: string;
  height: string | number;
};

const ButtonStyle = (props: Props) => {
  const {backgroundColor, width, height, title, colorTxt, onTap} = props;

  return (
    <TouchableOpacity
      onPress={onTap}
      style={{
        elevation: 1,
        width: width,
        height: height,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
      }}>
      <Text style={{color: colorTxt, fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonStyle;
