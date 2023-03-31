import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Box from '../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../base/components/ui_component/button_style';

import {styles} from '../style';
import {colorEgg, colorGold} from '../../../../base/color';

function TermConditionPage() {
  const {params: {state}} = useRoute<any>();
  const navigation: any = useNavigation();
  
  const goBack = () => navigation.goBack();
  const goToInputPhone = () => navigation.push('InputPhone');

  function renderButton() {
    return (
      <>
        <Box h={30} />
        <ButtonStyle
          height={45}
          width={'100%'}
          title={'ยินยอม'}
          colorTxt={'white'}
          onTap={goToInputPhone}
          backgroundColor={colorGold}
        />
        <Box h={15} />
        <ButtonStyle
          height={45}
          width={'100%'}
          onTap={goBack}
          title={'ไม่ยินยอม'}
          colorTxt={colorGold}
          backgroundColor={colorEgg}
        />
      </>
    );
  }

  return (
    <View style={styles.containerWhite}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white', paddingHorizontal: 15}}>
        <Box h={10} />
        {[1, 2, 3, 4].map(item => {
          return (
            <Text key={item}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
          );
        })}
        {state === 'auth' ? renderButton() : null}
        <Box h={30} />
      </ScrollView>
    </View>
  );
}

export default TermConditionPage;
