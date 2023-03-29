import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  color: string;
  title: string;
  fontSize: number;
  onTap?: () => void;
  underLine?: boolean;
};

function ButtonText(props: Props) {
  const {title, color, onTap, fontSize, underLine} = props;

  return (
    <TouchableOpacity onPress={onTap}>
      <Text
        style={[
          {
            color: color,
            fontSize: fontSize,
            fontWeight: 'bold',
            textDecorationLine: underLine ? 'underline' : 'none',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonText;
