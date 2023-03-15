import {styles} from '../style';
import React, {useState} from 'react';
import stylesGlobal from '../../../../../base/styles_global';
import Box from '../../../../../base/components/ui_component/box';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {colorGreen, colorRed, colorTextLabel} from '../../../../../base/color';
import Divider from '../../../../../base/components/ui_component/divider';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';
import DialogConfirm from '../../../../../base/components/page_component/dialog/dialog_confirm';
import DialogAlert from '../../../../../base/components/page_component/dialog/dialog_alert';

const WithdrawBankPage = () => {
  const amount = [100, 300, 500, 1000];
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [openFail, setOpenFail] = useState<boolean>(false);

  const pressWithdraw = () => {
    // setOpenSuccess(true);
    setOpenFail(true);
  };

  return (
    <View style={{flex: 1}}>
      <Box h={30} />
      <View
        style={{
          ...stylesGlobal.row,
          ...styles.cardWhite,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 5,
            backgroundColor: 'lightgrey',
          }}
        />
        <Box w={20} />
        <View>
          <Text>SCB Easy app</Text>
          <Text>******0000</Text>
        </View>
      </View>
      <Box h={20} />
      <View
        style={{
          paddingVertical: 15,
          ...styles.cardWhite,
        }}>
        <Text style={{color: colorTextLabel, fontSize: 18, fontWeight: 'bold'}}>
          จำนวนเงิน (THB)
        </Text>
        <Box h={10} />
        <TextInput placeholder="ระบุจำนวนเงิน" keyboardType="number-pad" />
        <Divider />
        <Box h={5} />
        <Text style={{color: colorTextLabel}}>
          ยอดเงินคงเหลือของคุณ ฿ 0,000.00
        </Text>
        <Box h={15} />
        <View style={stylesGlobal.row}>
          {amount.map((item, idx) => {
            return (
              <TouchableOpacity key={`#${idx}`} style={styles.btnAmount}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: colorTextLabel,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View
        style={{
          bottom: 20,
          width: '100%',
          position: 'absolute',
          alignItems: 'center',
        }}>
        <ButtonStyle
          width={'90%'}
          height={45}
          title={'ถอนเงิน'}
          colorTxt={'white'}
          onTap={pressWithdraw}
          backgroundColor={'lightgrey'}
        />
      </View>
      <DialogConfirm
        txtL={'ปิด'}
        open={openSuccess}
        txtColorL={'black'}
        txtColorR={'white'}
        title={'เติมเงิน สำเร็จ'}
        txtR={'ตรวจสอบสถานะ'}
        iconColor={colorGreen}
        setOpen={setOpenSuccess}
        icon={'ios-checkmark-circle'}
        onConfirm={() => {}}
      />
      <DialogAlert
        open={openFail}
        txtButton={'ปิด'}
        iconColor={colorRed}
        setOpen={setOpenFail}
        icon={'close-circle'}
        title={'เติมเงิน ไม่สำเร็จ'}
        onConfirm={() => setOpenFail(false)}
      />
    </View>
  );
};

export default WithdrawBankPage;
