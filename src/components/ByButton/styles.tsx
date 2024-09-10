import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#01a6b3',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnIcon:{
    marginRight: 10
  },
  btnText:{
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});