import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import {ColorValue, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size: number | undefined;
  style?: StyleProp<ViewStyle>
  color: number | ColorValue | undefined;
  onTap: ((event: GestureResponderEvent) => void) | undefined;
};

const ButtonIcon = (props: Props) => {
  const {name, size, color, onTap, style} = props;
  return (
    <TouchableOpacity onPress={onTap} style={style}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
