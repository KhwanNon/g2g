import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {styles} from './style';
import stylesGlobal from '../../../../../base/styles_global';
import {colorGold, colorYellow} from '../../../../../base/color';
import {imagePicker} from '../../../../../base/functions/image_picker';

import Box from '../../../../../base/components/ui_component/box';
import Row from '../../../../../base/components/ui_component/row';
import Divider from '../../../../../base/components/ui_component/divider';
import ButtonText from '../../../../../base/components/ui_component/button_text';
import ButtonIcon from '../../../../../base/components/ui_component/button_icon';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';
import Dropdown from '../../../../../base/components/page_component/modal/dropdown';
import {formatDate} from '../../../../../base/functions/format_date';
import {convertDateStringToDate} from '../../../../../base/functions/convert_string_to_date';

function ProfilePage() {
  const isFocused = useIsFocused();
  const navigation: any = useNavigation();

  const [indexGender, setIndexGender] = useState<number>(0);
  const [openModalJob, setOpenModalJob] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [openPickerDate, setOpenPickerDate] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState({
    idCard: '',
    backNumberIdCard: '',
    prefix: '',
    fname: '',
    lname: '',
    birthDate: '',
    phone: '',
    email: '',
    job: '',
    addressIDCard: '',
    addressCurrent: '',
    addressWork: '',
  });

  function onSubmit() {
    console.log('====================================');
    console.log(userInfo);
    console.log('====================================');
  }

  useEffect(() => {
    if (isFocused) {
      //means on this page
      //refresh info
    }
  }, [isFocused]);

  function renderInput(
    label: string,
    placeholder: string,
    onTap: () => void,
    value: string,
    editable?: boolean,
    state?: string,
    icon?: string,
    onChangeText?: ((text: string) => void) | undefined,
  ) {
    return (
      <View>
        <Box h={15} />
        {renderLabel(label)}
        <TextInput
          value={value}
          editable={editable}
          style={{color: 'black'}}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        {state === 'icon' && (
          <ButtonIcon
            size={23}
            color={'grey'}
            onTap={onTap}
            name={icon ?? ''}
            style={{position: 'absolute', bottom: 20, right: 0}}
          />
        )}
        {state === 'edit' && (
          <View style={{position: 'absolute', bottom: 20, right: 0}}>
            <ButtonText
              title={'แก้ไข'}
              fontSize={14}
              onTap={onTap}
              color={colorYellow}
            />
          </View>
        )}
        <Divider />
      </View>
    );
  }

  function renderSelectGender(text: string, isSelect: boolean, index: number) {
    return (
      <Row>
        <ButtonIcon
          size={17}
          name={'square'}
          color={isSelect ? colorYellow : 'lightgrey'}
          onTap={() => {
            setIndexGender(index);
            setUserInfo({
              ...userInfo,
              prefix: index === 0 ? 'นาย' : index === 1 ? 'นาง' : 'นางสาว',
            });
          }}
        />
        <Box w={7} />
        <Text>{text}</Text>
        <Box w={15} />
      </Row>
    );
  }

  async function onSelectProfile() {
    const result: any = await imagePicker();

    if (!result) return;
    setSelectedImage({uri: result.assets[0].uri});
  }

  function renderImageProfile() {
    return <Image source={selectedImage} style={styles.boxImage} />;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[stylesGlobal.containerWhite, {padding: 15}]}>
      <TouchableOpacity style={styles.boxImage} onPress={onSelectProfile}>
        {selectedImage ? renderImageProfile() : null}
      </TouchableOpacity>

      <Box h={20} />
      <Divider />

      {renderInput(
        'เลขบัตรประชาชน',
        '0 0000 00000 00 0',
        () => {},
        userInfo.idCard,
        true,
        'no data',
        'no data',
        idCard => setUserInfo({...userInfo, idCard}),
      )}

      {renderInput(
        'หมายเลขหลังบัตรประจำตัวประชาชน',
        'ME0000000000',
        () => {},
        userInfo.backNumberIdCard,
        true,
        'no data',
        'no data',
        backNumberIdCard => setUserInfo({...userInfo, backNumberIdCard}),
      )}

      <Box h={20} />
      <Row>
        {renderSelectGender('นาย', indexGender === 0, 0)}
        {renderSelectGender('นาง', indexGender === 1, 1)}
        {renderSelectGender('นางสาว', indexGender === 2, 2)}
      </Row>

      {renderInput(
        'ชื่อ ',
        'ชื่อ ',
        () => {},
        userInfo.fname,
        true,
        'no data',
        'no data',
        fname => setUserInfo({...userInfo, fname}),
      )}

      {renderInput(
        'นามสกุล',
        'นามสกุล',
        () => {},
        userInfo.lname,
        true,
        'no data',
        'no data',
        lname => setUserInfo({...userInfo, lname}),
      )}

      {renderInput(
        'วัน/เดือน/ปี',
        'วัน/เดือน/ปี',
        () => setOpenPickerDate(true),
        userInfo.birthDate,
        false,
        'icon',
        'chevron-down',
      )}

      {renderInput(
        'อีเมล',
        'อีเมล',
        () => {},
        userInfo.email,
        true,
        'no data',
        'no data',
        email => setUserInfo({...userInfo, email}),
      )}

      {renderInput(
        'อาชีพ',
        'เลือกอาชีพ',
        () => setOpenModalJob(true),
        userInfo.job,
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput(
        'ที่อยู่ตามบัตรประจำตัวประชาชน',
        'ไม่มีข้อมูล',
        () => navigation.push('AddressInfo', {state: 'card'}),
        userInfo.addressIDCard,
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput(
        'ที่พักอาศัย',
        'ไม่มีข้อมูล',
        () => navigation.push('AddressInfo', {state: 'current'}),
        userInfo.addressCurrent,
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput(
        'สถานที่ทำงาน',
        'ไม่มีข้อมูล',
        () => navigation.push('AddressInfo', {state: 'work'}),
        userInfo.addressWork,
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput('ยืนยันตัวตน', 'ยืนยันตัวตนแล้ว', () => {}, '', false)}

      {renderInput(
        'ยืนยันหมายเลขโทรศัพท์',
        '0000000000',
        () => navigation.push('MyPhone'),
        '',
        false,
        'edit',
      )}

      <Box h={40} />
      <ButtonStyle
        height={45}
        title={'บันทึก'}
        width={'100%'}
        colorTxt={'white'}
        onTap={onSubmit}
        backgroundColor={colorGold}
      />

      <Box h={40} />
      <Dropdown
        title={'เลือกอาชีพ'}
        open={openModalJob}
        setOpen={setOpenModalJob}
        items={['Programmer', 'Doctor', 'Teacher']}
        setData={(job: string) => setUserInfo({...userInfo, job})}
      />

      <DatePicker
        modal
        open={openPickerDate}
        onCancel={() => setOpenPickerDate(false)}
        date={convertDateStringToDate(userInfo.birthDate)}
        onConfirm={(date: Date) => {
          setOpenPickerDate(false);
          setUserInfo({...userInfo, birthDate: formatDate(date)});
        }}
      />
    </ScrollView>
  );
}

export function renderLabel(text: string) {
  return <Text style={styles.label}>{text}</Text>;
}

export default ProfilePage;
