import {StyleSheet} from 'react-native';
import {colorTextTitle} from '../../../../base/color';

export const styles = StyleSheet.create({
  btnAmount: {
    marginRight: 7,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderColor: 'lightgrey',
  },
  cardWhite: {
    minHeight: 80,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
});
