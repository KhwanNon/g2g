import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

const Row: FC<ViewProps> = ({children, ...props}) => {
  return (
    <View {...props} style={[{flexDirection: 'row'}, props.style]}>
      {children}
    </View>
  );
};

export default Row;
