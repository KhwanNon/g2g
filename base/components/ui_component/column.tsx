import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

const Column: FC<ViewProps> = ({children, ...props}) => {
  return <View {...props}>{children}</View>;
};

export default Column;
