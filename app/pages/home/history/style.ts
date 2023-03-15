import {StyleSheet} from 'react-native';
import {colorOrange} from '../../../../base/color';

export const styles = StyleSheet.create({
  modal: {
    padding: 15,
    width: '90%',
    minHeight: 300,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  card: {
    width: '94%',
    padding: 10,
    elevation: 2,
    minHeight: 100,
    marginBottom: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'lightgrey',
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: colorOrange,
  },
  dividerGrey: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
});
