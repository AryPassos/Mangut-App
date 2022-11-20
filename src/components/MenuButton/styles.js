import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  btnIcon: {
    height: 40,
    width: 40
  },
  btnText: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 2
  }
});

export default styles;
