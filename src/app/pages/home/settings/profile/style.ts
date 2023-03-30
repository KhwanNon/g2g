import {StyleSheet} from 'react-native';
import {colorTextTitle} from '../../../../../base/color';

export const styles = StyleSheet.create({
  border: {
    minHeight: 35,
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16,
    color: colorTextTitle,
  },
  boxImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: 'lightgrey',
  },
});
