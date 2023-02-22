import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  color: string;
  title: string;
  fontSize: number;
  onTap?: () => void;
};

const ButtonText = (props: Props) => {
  const {title, color, onTap, fontSize} = props;

  return (
    <TouchableOpacity onPress={onTap}>
      <Text style={{color: color, fontSize: fontSize, fontWeight: 'bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonText;
