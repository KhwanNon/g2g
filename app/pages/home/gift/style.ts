import {StyleSheet} from 'react-native';
import {colorTextTitle, colorYellow2} from '../../../../base/color';

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#00000080',
  },
  cardModal: {
    padding: 12,
    width: '100%',
    minHeight: 400,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textAlert: {
    color: colorYellow2,
  },
  text: {
    fontSize: 17,
    color: colorTextTitle,
  },
  cardText: {
    padding: 12,
    minHeight: 100,
    width: '100%',
    elevation: 4,
    borderRadius: 10,
  },
  textBtn: {fontSize: 17, fontWeight: 'bold', color: 'black'},
  button: {
    width: '100%',
    height: 45,
    elevation: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
});
