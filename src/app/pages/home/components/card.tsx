import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Box from '../../../../base/components/ui_component/box';
import Row from '../../../../base/components/ui_component/row';
import Column from '../../../../base/components/ui_component/column';
import ButtonIcon from '../../../../base/components/ui_component/button_icon';

import {
  colorGold2,
  colorDarkGold,
  colorDarkGold2,
} from '../../../../base/color';

import {assetHomeGold, assetLogo} from '../../../../generated/assets';

import {styles} from '../style';
import stylesGlobal from '../../../../base/styles_global';

type Props = {
  isDeposit?: boolean;
};

function MyCard({isDeposit}: Props) {
  function renderInfoAccumulate() {
    return (
      <>
        <Row style={[stylesGlobal.between, {width: '100%'}]}>
          <Text style={styles.textBold}>มูลค่า E-Gold สะสม</Text>
          <Text style={styles.textWhite}>2 E-Gold</Text>
        </Row>
        <Row style={[stylesGlobal.between, {width: '100%'}]}>
          <Text style={styles.textBold}>มูลค่าสะสม</Text>
          <Text style={styles.textWhite}>50,200.00 บาท</Text>
        </Row>
        <Text style={[styles.textBold, {textDecorationLine: 'underline'}]}>
          1 E-Gold = ทองคำ 1 บาท
        </Text>
      </>
    );
  }

  function renderInfoDeposit() {
    return (
      <>
        <Row style={[stylesGlobal.between, {width: '100%'}]}>
          <Text style={styles.textBold}>มูลค่าทองที่ฝากแล้ว </Text>
          <View />
        </Row>
        <Row style={[stylesGlobal.between, {width: '100%'}]}>
          <Text style={styles.textWhite}>1 บาท</Text>
          <Text style={styles.textWhite}>7.622 กรัม</Text>
        </Row>

        <Row style={[stylesGlobal.between, {width: '100%'}]}>
          <Text style={styles.textBold}>มูลค่าทองที่ต้องซื้อคืน </Text>
          <View />
        </Row>
        <Row style={[stylesGlobal.between, {width: '100%'}]}>
          <Text style={styles.textWhite}>1 บาท</Text>
          <Text style={styles.textWhite}>7.622 กรัม</Text>
        </Row>
      </>
    );
  }

  function renderBtnDowload() {
    return (
      <TouchableOpacity style={styles.btnDowload}>
        <ButtonIcon
          size={16}
          color={'white'}
          onTap={() => {}}
          name={'ios-download-outline'}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{paddingHorizontal: 15}}>
      <LinearGradient
        end={{x: 1, y: 0}}
        start={{x: 0, y: 0}}
        style={styles.myCard}
        colors={[colorGold2, colorDarkGold]}>
        <Image style={styles.logo} source={assetLogo} />
        <Column style={[{flex: 1, padding: 10}]}>
          <Row style={stylesGlobal.center}>
            <Image style={styles.gold} source={assetHomeGold} />
            <Text style={styles.textTitleCard}>ทองคำของคุณ</Text>
            <Image style={styles.gold} source={assetHomeGold} />
          </Row>
          <Box h={7} />
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: colorDarkGold2,
            }}
          />
          <Box h={10} />
          <View style={{flex: 1, width: '100%'}}>
            <Row style={[{height: '100%'}]}>
              <Column style={[stylesGlobal.between, {height: '100%'}]}>
                <Text style={styles.textBold}>จำนวนทองสะสม</Text>
                <Text style={styles.textEGold}>2</Text>
                <Text>บาท</Text>
              </Column>
              <Box w={10} />
              <View
                style={{
                  width: 1,
                  height: '100%',
                  backgroundColor: colorDarkGold2,
                }}
              />
              <Box w={10} />
              <Column
                style={[
                  isDeposit ? stylesGlobal.between : stylesGlobal.evenly,
                  {flex: 1, height: '100%'},
                ]}>
                {isDeposit ? renderInfoDeposit() : renderInfoAccumulate()}
              </Column>
            </Row>
          </View>
        </Column>
        {isDeposit ? null : renderBtnDowload()}
      </LinearGradient>
    </View>
  );
}

export default MyCard;
