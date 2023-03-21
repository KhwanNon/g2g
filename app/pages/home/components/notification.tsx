import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from '../../../../base/components/ui_component/box';

import {styles} from '../style';
import stylesGlobal from '../../../../base/styles_global';
import {colorDarkGold2, colorYellow} from '../../../../base/color';

const Notification = () => {
  const renderNotificationIcon = () => (
    <Ionicons size={25} color={colorYellow} name="notifications" />
  );

  const renderChevronIcon = () => (
    <Ionicons size={20} color="lightgrey" name="chevron-forward" />
  );

  return (
    <View style={{paddingHorizontal: 15}}>
      <TouchableOpacity style={styles.boxCradNoti}>
        <View style={[stylesGlobal.row]}>
          {renderNotificationIcon()}
          <Box w={15} />
          <Text style={{color: colorDarkGold2}}>คุณได้รับการแจ้งเตือน</Text>
        </View>
        {renderChevronIcon()}
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
