import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from '../../../../base/components/ui_component/box';
import Row from '../../../../base/components/ui_component/row';

import {styles} from '../style';
import stylesGlobal from '../../../../base/styles_global';
import {colorDarkGold2, colorYellow} from '../../../../base/color';

function Notification() {
  const navigation: any = useNavigation();
  const goToPage = () => navigation.push('Notification');

  function renderNotificationIcon() {
    return <Ionicons size={25} color={colorYellow} name="notifications" />;
  }

  function renderChevronIcon() {
    return <Ionicons size={20} color="lightgrey" name="chevron-forward" />;
  }

  return (
    <View style={{paddingHorizontal: 15}}>
      <TouchableOpacity style={styles.boxCradNoti} onPress={goToPage}>
        <Row style={stylesGlobal.alignItemsCenter}>
          {renderNotificationIcon()}
          <Box w={15} />
          <Text style={{color: colorDarkGold2}}>คุณได้รับการแจ้งเตือน</Text>
        </Row>
        {renderChevronIcon()}
      </TouchableOpacity>
    </View>
  );
}

export default Notification;
