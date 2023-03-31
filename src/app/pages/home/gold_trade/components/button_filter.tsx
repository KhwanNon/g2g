import React, {useState} from 'react';
import {colorGold3, colorGrey} from '../../../../../base/color';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Row from '../../../../../base/components/ui_component/row';

function ButtonFilter() {
  const [index, setIndex] = useState<number>(0);

  return (
    <Row style={[{marginLeft: 15, position: 'absolute', top: -60}]}>
      <Button
        left
        right={false}
        title={'7วัน'}
        isSelect={index === 0}
        index={0}
        setIndex={setIndex}
      />
      <Button
        left={false}
        right={false}
        title={'1เดือน'}
        isSelect={index === 1}
        index={1}
        setIndex={setIndex}
      />
      <Button
        left={false}
        right={false}
        title={'6เดือน'}
        isSelect={index === 2}
        index={2}
        setIndex={setIndex}
      />
      <Button
        left={false}
        right={true}
        title={'1ปี'}
        isSelect={index === 3}
        index={3}
        setIndex={setIndex}
      />
    </Row>
  );
}

type ButtonProps = {
  left: boolean;
  right: boolean;
  title: string;
  isSelect: boolean;
  index: number;
  setIndex: Function;
};

function Button({left, right, title, isSelect, setIndex, index}: ButtonProps) {
  const borderRadius = {
    borderBottomLeftRadius: left ? 10 : 0,
    borderTopLeftRadius: left ? 10 : 0,
    borderBottomRightRadius: right ? 10 : 0,
    borderTopRightRadius: right ? 10 : 0,
  };

  const buttonWidth = {
    width: left || right ? 40 : 50,
  };

  const buttonBackground = {
    backgroundColor: isSelect ? colorGold3 : colorGrey,
  };

  function onSelect() {
    setIndex(index);
  }

  return (
    <TouchableOpacity onPress={onSelect} style={styles.row}>
      <View
        style={[buttonWidth, borderRadius, buttonBackground, styles.container]}>
        <Text style={{fontSize: 12}}>{title}</Text>
      </View>
      {!right && <View style={styles.divider} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: 1,
    height: 35,
    backgroundColor: 'lightgrey',
  },
});

export default ButtonFilter;
