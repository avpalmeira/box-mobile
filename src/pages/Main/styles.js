import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 20
  },

  logo: {
    alignSelf: 'center'
  },

  input: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 48,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20
  },

  button: {
    marginTop: 10,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  }
});

export default styles;
