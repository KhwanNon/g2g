import {StyleSheet} from 'react-native';
import {colorEgg, colorTextTitle} from '../../../base/color';

export const styles = StyleSheet.create({
  boxInput: {
    height: 50,
    width: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorEgg,
  },
  textTitle: {
    fontSize: 18,
    color: colorTextTitle,
  },
  textSubTitle: {
    fontSize: 16,
    color: colorTextTitle,
  },
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
