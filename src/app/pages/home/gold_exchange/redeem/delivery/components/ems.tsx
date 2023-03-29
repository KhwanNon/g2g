import React, {useState} from 'react';
import {styles} from '../../../style';
import DeliveryAddress from '../address';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Box from '../../../../../../../base/components/ui_component/box';
import Row from '../../../../../../../base/components/ui_component/row';

function Ems() {
  const [openDeliveryAddress, setOpenDeliveryAddress] =
    useState<boolean>(false);

  return (
    <View>
      <Box h={20} />
      <Text style={styles.textBtn}>ที่อยู่จัดส่ง</Text>

      <Box h={25} />
      <TouchableOpacity
        onPress={() => setOpenDeliveryAddress(true)}
        style={[
          styles.cardBorder,
          {
            borderColor: 'white',
            paddingVertical: 12,
          },
        ]}>
        <Row>
          <Ionicons size={22} color={'black'} name={'add-circle-outline'} />

          <Box w={10} />
          <Text style={styles.text}>เพิ่มที่อยู่จัดส่ง</Text>
        </Row>

        <Ionicons size={22} color={'grey'} name={'chevron-forward'} />
      </TouchableOpacity>

      <DeliveryAddress
        open={openDeliveryAddress}
        setOpen={setOpenDeliveryAddress}
      />
    </View>
  );
}

export default Ems;
