import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  mainText: {
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#8d8d8d',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textValue: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  textButton: {
    fontSize: 20,
    color: '#474747',
  },
});

export default styles;
