import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    height: 100,
    backgroundColor: '#00496c',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  appHeaderTextLink: {
    fontSize: 16,
    color: 'yellow',
    margin: 5
  },
  appHeaderText: {
    fontSize: 16,
    color: 'white',
    margin: 5
  },
  appBody: {
    backgroundColor: '#eaeaea',
    flex: 1
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#eaeaea',
    borderTopColor: '#666',
    borderTopWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  footerText: {
    fontSize: 12,
    color: '#666'
  },
  footerTextUrl: {
    fontSize: 12,
    color: '#666'
  },
  images: {
    height: 200
  }
});

export default styles;
