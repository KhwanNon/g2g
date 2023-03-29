import {StyleSheet} from 'react-native';
import {
  colorDarkGold2,
  colorGold3,
  colorGrey,
  colorTextLabel,
} from '../../../../base/color';

export const styles = StyleSheet.create({
  textLabel2: {color: 'black', fontSize: 17},
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
  textLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colorTextLabel,
  },
  inputGold: {
    height: 40,
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colorDarkGold2,
    backgroundColor: colorGold3,
  },
  inputAmount: {
    height: 40,
    width: 120,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  cardTrade: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
    backgroundColor: colorGrey,
  },
});
