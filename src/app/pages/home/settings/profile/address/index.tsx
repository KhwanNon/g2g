import {renderLabel} from '..';
import stylesGlobal from '../../../../../../base/styles_global';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {colorGold, colorTextLabel} from '../../../../../../base/color';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, Switch, TextInput, ScrollView} from 'react-native';

import Box from '../../../../../../base/components/ui_component/box';
import Row from '../../../../../../base/components/ui_component/row';
import Divider from '../../../../../../base/components/ui_component/divider';
import ButtonIcon from '../../../../../../base/components/ui_component/button_icon';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';
import Dropdown from '../../../../../../base/components/page_component/modal/dropdown';

const AddressInfo = () => {
  const {params: {state}} = useRoute<any>();
  const navigation: any = useNavigation();

  const amphureJson = require('../../../../../../assets/json/api_amphure.json');
  const tambonJson = require('../../../../../../assets/json/api_tambon.json');
  const provinceJson = require('../../../../../../assets/json/api_province.json');

  const [openModalAddress, setOpenModalAddress] = useState<boolean>(false);
  const [itemsInModal, setItemsInModal] = useState<[]>([]);
  const [textModal, setTextModal] = useState<string>('');
  const [stateModal, setStateModal] = useState<string>('');
  const [dataSelectModal, setDataSelectModal] = useState<any>();

  const [switchAddress, setSwitchAddress] = useState({
    useIdCardAddress: false,
    useCurrentAddress: false,
    enterAddress: true,
  });

  const [infoAddress, setInfoAddress] = useState({
    provinceId: '',
    province: '',
    amphureId: '',
    amphure: '',
    tambonId: '',
    tambon: '',
    zipcodeId: '',
    zipcode: '',
    address: '',
  });

  //! set title from state
  useLayoutEffect(() => {
    const title =
      state === 'card'
        ? 'ที่อยู่บนบัตรประจำตัวประชาชน'
        : state === 'current'
        ? 'ที่พักอาศัย'
        : 'สถานที่ทำงาน';

    navigation.setOptions({title});
  }, []);

  //! when select dat in modal will set data
  useEffect(() => {
    if (stateModal === 'province') {
      setInfoAddress(() => {
        return {
          ...infoAddress,
          provinceId: dataSelectModal.id,
          province: dataSelectModal.name_th,
          amphure: '',
          tambon: '',
          zipcode: '',
        };
      });
    }
    if (stateModal === 'amphure') {
      setInfoAddress(() => {
        return {
          ...infoAddress,
          zipcode: '',
          tambon: '',
          amphureId: dataSelectModal.id,
          amphure: dataSelectModal.name_th,
        };
      });
    }
    if (stateModal === 'tambon') {
      setInfoAddress(() => {
        return {
          ...infoAddress,
          tambonId: dataSelectModal.id,
          tambon: dataSelectModal.name_th,
          zipcode: `${dataSelectModal.zip_code}`,
        };
      });
    }
  }, [dataSelectModal]);

  //! render switch button
  function renderSwitch(text: string, isSelect: boolean, state: string) {
    return (
      <>
        <Row style={[stylesGlobal.alignItemsCenter, {marginLeft: -2}]}>
          <Switch
            value={isSelect}
            thumbColor="white"
            trackColor={{true: colorGold, false: 'lightgrey'}}
            onChange={() => {
              state === 'current'
                ? setSwitchAddress({
                    ...switchAddress,
                    useCurrentAddress: true,
                    useIdCardAddress: false,
                    enterAddress: false,
                  })
                : state === 'card'
                ? setSwitchAddress({
                    ...switchAddress,
                    useCurrentAddress: false,
                    useIdCardAddress: true,
                    enterAddress: false,
                  })
                : setSwitchAddress({
                    ...switchAddress,
                    useCurrentAddress: false,
                    useIdCardAddress: false,
                    enterAddress: true,
                  });
            }}
          />
          <Box w={10} />
          <Text style={{color: colorTextLabel, fontSize: 13}}>{text}</Text>
        </Row>
        <Box h={10} />
      </>
    );
  }

  //! filter amphure when will open dropdown
  function filterAmphure() {
    setItemsInModal(
      amphureJson.filter(
        (item: any) => item.province_id === infoAddress.provinceId,
      ),
    );
  }

  //! filter tambon when will open dropdown
  function filterTambon() {
    setItemsInModal(
      tambonJson.filter(
        (item: any) => item.amphure_id === infoAddress.amphureId,
      ),
    );
  }

  //! on submit
  function onSubmit() {
    console.log('====================================');
    console.log(infoAddress);
    console.log('====================================');
    navigation.goBack()
  }

  //! render all
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[stylesGlobal.containerWhite, {padding: 15}]}>
      <View>
        {(state === 'card' || state === 'work') &&
          renderSwitch(
            'ใช้ที่อยู่ตามที่พักอาศัย',
            switchAddress.useCurrentAddress,
            'current',
          )}

        {(state === 'current' || state === 'work') &&
          renderSwitch(
            'ใช้ที่อยู่ตามบัตรประชาชน',
            switchAddress.useIdCardAddress,
            'card',
          )}

        {renderSwitch(
          'ระบุที่อยู่ที่ทำงานเอง',
          switchAddress.enterAddress,
          'enter',
        )}

        <Box h={20} />
        {renderInput(
          'จังหวัด',
          infoAddress.province,
          false,
          'จังหวัด',
          'icon',
          async () => {
            setTextModal('เลือกจังหวัด');
            setStateModal('province');
            setItemsInModal(provinceJson);
            setOpenModalAddress(true);
          },
        )}

        <Box h={20} />
        {renderInput(
          'เขต/อำเภอ',
          infoAddress.amphure,
          false,
          'เขต/อำเภอ',
          'icon',
          () => {
            filterAmphure();
            setTextModal('เลือกเขต/อำเภอ');
            setStateModal('amphure');
            setOpenModalAddress(true);
          },
        )}

        <Box h={20} />
        {renderInput(
          'แขวง, ตำบล',
          infoAddress.tambon,
          false,
          'แขวง, ตำบล',
          'icon',
          () => {
            filterTambon();
            setTextModal('เลือกแขวง, ตำบล');
            setStateModal('tambon');
            setOpenModalAddress(true);
          },
        )}

        <Box h={20} />
        {renderInput(
          'รหัสไปรษณีย์',
          infoAddress.zipcode,
          false,
          'รหัสไปรษณีย์',
          '',
          () => {},
        )}

        <Box h={20} />
        {renderInput(
          'ที่อยู่',
          infoAddress.address,
          true,
          'ที่อยู่ (ถนน, ซอย, บ้านเลขที่)',
          '',
          () => {},
          address => setInfoAddress({...infoAddress, address}),
        )}
      </View>

      <Box h={140} />
      <ButtonStyle
        height={45}
        title={'บันทึก'}
        width={'100%'}
        colorTxt={'white'}
        onTap={onSubmit}
        backgroundColor={colorGold}
      />

      <Box h={20} />
      <Dropdown
        state="address"
        title={textModal}
        items={itemsInModal}
        open={openModalAddress}
        setData={setDataSelectModal}
        setOpen={setOpenModalAddress}
      />
    </ScrollView>
  );
};

export function renderInput(
  label: string,
  value: string,
  editable: boolean,
  placeholder: string,
  state: string,
  onTap: () => void,
  onChangeText?: ((text: string) => void) | undefined,
) {
  return (
    <View>
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
          name={'chevron-down'}
          style={{position: 'absolute', bottom: 20, right: 0}}
        />
      )}
      <Divider />
    </View>
  );
}

export default AddressInfo;
