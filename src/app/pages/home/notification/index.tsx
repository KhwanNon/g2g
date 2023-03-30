import {View, Text, FlatList} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import stylesGlobal from '../../../../base/styles_global';
import {colorSkyBlue, colorTextLabel} from '../../../../base/color';

import Box from '../../../../base/components/ui_component/box';
import Row from '../../../../base/components/ui_component/row';
import Divider from '../../../../base/components/ui_component/divider';
import ButtonText from '../../../../base/components/ui_component/button_text';
import ButtonIcon from '../../../../base/components/ui_component/button_icon';

function NotificationPage() {
  const navigation: any = useNavigation();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonText
          title={'แก้ไข'}
          fontSize={14}
          onTap={swapEdit}
          color={colorTextLabel}
        />
      ),
    });
  }, [isEdit]);

  function swapEdit() {
    setIsEdit(prev => !prev);
  }

  function renderListNotification() {
    const renderTrash = () => (
      <ButtonIcon
        size={20}
        color={'grey'}
        onTap={undefined}
        name={'trash-outline'}
      />
    );

    const renderText = () => (
      <ButtonText fontSize={13} title={'ดูรายละเอียด'} color={colorSkyBlue} />
    );

    return (
      <>
        <Box h={15} />
        <View style={{paddingHorizontal: 15}}>
          <Text style={{color: colorTextLabel}}>29 พ.ค. 2565</Text>
          <Box h={10} />
          <Row style={stylesGlobal.between}>
            <Text style={{color: colorTextLabel}}>
              คุณได้ทำการส่งของขวัญให้เพื่อ
            </Text>
            {isEdit ? renderTrash() : renderText()}
          </Row>
        </View>
        <Box h={15} />
        <Divider />
      </>
    );
  }

  return (
    <View style={[stylesGlobal.containerWhite]}>
      <Divider />
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={item => renderListNotification()}
        />
      </View>
    </View>
  );
}

export default NotificationPage;
