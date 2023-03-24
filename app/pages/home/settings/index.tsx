import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MenuItem, {menuModel} from './menu';
import Box from '../../../../base/components/ui_component/box';
import DialogConfirm from '../../../../base/components/page_component/dialog/dialog_confirm';

import {styles} from '../style';
import styleSetting from './style';

const SettingPage = () => {
  const navigation: any = useNavigation();
  const [openLogout, setOpenLogout] = useState<boolean>(false);

  const logoutData: menuModel = {
    subTitle: '',
    state: 'logout',
    title: 'ออกจากระบบ',
    icon: 'md-exit-outline',
  };

  const onPressMenu = (state: string) => {
    const hasVerifyKYC = false;
    if (state === 'version') return;

    switch (state) {
      case 'profile':
        let condition = hasVerifyKYC ? 'ProfilePage' : 'VerifyKYC';
        return navigation.push(condition, {state: 'profile'});
      case 'pin':
        return navigation.push('OTP', {phone: '0000000000'});
      case 'bank':
        return navigation.push('AddBank');
      case 'policy':
        return navigation.push('Policy');
      case 'contact':
        return navigation.push('Contact');
      default:
        break;
    }
  };

  const onLogout = () => {
    setOpenLogout(false);
    setTimeout(() => {
      navigation.replace('Auth');
    }, 500);
  };

  const renderItem = () => {
    return menuItems.map((item, index) => (
      <MenuItem
        item={item}
        key={`#${index}${item.state}`}
        onPress={() => onPressMenu(item.state)}
      />
    ));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, {alignItems: 'center'}]}>
        <View style={styleSetting.circle} />
        <Box h={15} />
        <Text style={styleSetting.textName}>Fluke</Text>
        <Box h={5} />
        <Text style={styleSetting.textInfo}>Email : Aaaaaaa0000@gmail.com</Text>
        <Box h={5} />
        <Text style={styleSetting.textInfo}>Mobile Number : 000-000-0000</Text>
        <Box h={30} />
        <View style={styleSetting.bgView}>
          <Box h={30} />
          <View style={styleSetting.cardMenu}>{renderItem()}</View>
          <Box h={30} />
          <View style={styleSetting.cardLogout}>
            <MenuItem item={logoutData} onPress={() => setOpenLogout(true)} />
          </View>
        </View>
        <DialogConfirm
          txtR={'ตกลง'}
          txtL={'ยกเลิก'}
          txtColorL={'white'}
          txtColorR={'white'}
          open={openLogout}
          iconColor={'lightgrey'}
          onConfirm={onLogout}
          setOpen={setOpenLogout}
          icon={'ios-alert-circle-outline'}
          title={'ต้องการออกจากระบบหรือไม่'}
        />
      </View>
    </ScrollView>
  );
};

const menuItems: menuModel[] = [
  {
    state: 'profile',
    title: 'โปรไฟล์',
    subTitle: 'แก้ไขโปรไฟลน์',
    icon: 'person-circle',
  },
  {
    state: 'kyc',
    title: 'KYC',
    subTitle: 'ยืนยันตัวตน',
    icon: 'ios-newspaper',
  },
  {
    state: 'bank',
    title: 'เพิ่มธนาคาร',
    subTitle: 'เพิ่มธนาคารของคุณ',
    icon: 'ios-card-outline',
  },
  {
    state: 'language',
    title: 'ภาษา',
    subTitle: 'เปลี่ยนภาษา',
    icon: 'language',
  },
  {
    state: 'pin',
    title: 'เปลี่ยน Pin Conde',
    subTitle: 'หากลืมพินโค้ดสามารถแก้ไขได้ที่นี่',
    icon: 'ios-lock-closed',
  },
  {
    state: 'term',
    title: 'ข้อตกลงและเงื่อนไข',
    subTitle: 'ข้อตกลงและเงื่อนไข',
    icon: 'md-checkbox-outline',
  },
  {
    state: 'policy',
    title: 'นโยบาย',
    subTitle: 'นโยบาย',
    icon: 'ios-shield-checkmark',
  },
  {
    state: 'contact',
    title: 'ติดต่อเรา',
    subTitle: 'ติดต่อเรา 24 ชม. ',
    icon: 'ios-chatbubble-ellipses',
  },
  {
    state: 'version',
    title: 'เวอร์ชัน',
    subTitle: 'เวอร์ชันปัจจุบัน',
    icon: 'ios-time',
  },
];

export default SettingPage;
