import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import RowData from '../../../history/components/row_data';
import Box from '../../../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';
import Dropdown from '../../../../../../base/components/page_component/modal/dropdown';
import DialogConfirm from '../../../../../../base/components/page_component/dialog/dialog_confirm';

import {styles} from '../../style';
import {colorGold, colorRed} from '../../../../../../base/color';
import stylesGlobal from '../../../../../../base/styles_global';


const DetailsRedeemPage = () => {
  const navigation: any = useNavigation();
  const {params: {state}} = useRoute<any>()

  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  
  const goToDelivery = () => navigation.push('Delivery', {state: state});

  const onExchange = () => {
    // setOpenAlert(true);
    goToDelivery();
  };

  const onSelectDropdown = () => {
    setOpenDropdown(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={stylesGlobal.containerWhite}>
        <View style={[styles.boxImageGold, {height: 250}]}></View>
        <View style={{padding: 15}}>
          <Text style={styles.textBtn}>รายละเอียดสินค้า</Text>
          <Box h={10} />

          <Text style={styles.text}>เลือกน้ำหนักทอง</Text>
          <Box h={10} />

          <TouchableOpacity
            style={styles.cardBorder}
            onPress={() => setOpenDropdown(true)}>
            <Text style={styles.text}>ทอง 1 บาท</Text>
            <Ionicons size={22} color={'grey'} name={'ios-chevron-down'} />
          </TouchableOpacity>

          <Box h={20} />
          <RowData title={'รหัสสินค้า'} value={'xxxxxxxxx'} />
          <Box h={3} />
          <RowData title={'ชื่อสินค้า '} value={'xxxxxxxxx'} />
          <Box h={3} />
          <RowData title={'ผู้ให้จำหน่าย '} value={'Aurora'} />
          <Box h={3} />
          <RowData title={'ราคาทอง/บาท '} value={'00,000.00 ฿'} />
          <Box h={3} />
          <RowData title={'คำกำเหน็จ '} value={'000.00 ฿'} />
          <Box h={3} />
          <RowData title={'ค่าธรรมเนียมให้บริการ '} value={'000.00 ฿'} />
          <Box h={3} />
          <RowData title={'ค่าธรรมเนียมพิเศษ(ลายทอง) '} value={'000.00 ฿'} />
          <Box h={3} />
          <RowData title={'รวม '} value={'000.00 ฿'} />

          <Box h={20} />
          <ButtonStyle
            height={45}
            width={'100%'}
            colorTxt={'white'}
            onTap={onExchange}
            title={'แลกทองคำ'}
            backgroundColor={colorGold}
          />

          <Box h={20} />
          <Dropdown
            items={['ทอง 1 บาท', 'ทอง 2 บาท', 'ทอง 3 บาท']}
            open={openDropdown}
            title={'เลือกน้ำหนักทอง'}
            setOpen={setOpenDropdown}
            onPress={onSelectDropdown}
          />

          <DialogConfirm
            txtL={'ปิด'}
            txtR={'ซื้อเพิ่ม'}
            open={openAlert}
            txtColorL={'black'}
            txtColorR={'white'}
            icon={'close-circle'}
            onConfirm={() => {}}
            iconColor={colorRed}
            setOpen={setOpenAlert}
            title={'น้ำหนักทองคำ คุณไม่เพียงพอ \nโปรดทำรายการใหม่อีกครั้ง'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsRedeemPage;
