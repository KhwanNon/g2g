import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonIcon from '../../../../../base/components/ui_component/button_icon';

type Props = {
  onPress: () => void;
  icon: string;
};

const ListTileMyBank = ({onPress, icon}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>ธนาคารไทยพาณิชย์</Text>
        <Text>******0000</Text>
      </View>
      <ButtonIcon name={icon} size={20} color={'grey'} onTap={onPress} />
    </View>
  );
};

export default ListTileMyBank;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
