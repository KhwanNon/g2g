import React from 'react';
import {styles} from '../style';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stylesGlobal from '../../../../base/styles_global';
import Box from '../../../../base/components/ui_component/box';
import {colorDarkGold2, colorYellow} from '../../../../base/color';

const Notification = () => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <TouchableOpacity style={styles.boxCradNoti}>
        <View style={{...stylesGlobal.row}}>
          <Ionicons size={25} color={colorYellow} name={'notifications'} />
          <Box w={15} />
          <Text style={{color: colorDarkGold2}}>คุณได้รับการแจ้งเตือน</Text>
        </View>
        <Ionicons size={20} color={'lightgrey'} name={'chevron-forward'} />
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
