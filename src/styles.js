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
    fontFamily: 'Georgia, serif',
    color: 'yellow',
    margin: 5
  },
  appHeaderText: {
    fontSize: 16,
    fontFamily: 'Georgia, serif',
    color: 'white',
    margin: 5
  },
  appBody: {
    backgroundColor: '#eaeaea',
    flex: 1
  },
  appIntro: {
    flex: 2,
    fontSize: 20,
    color: '#666',
    fontFamily: 'Georgia, serif',
    textAlign: 'center'
  },
  appFooter: {
    backgroundColor: '#eaeaea',
    borderTopColor: '#666',
    borderTopWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  appFooterText: {
    fontSize: 12,
    fontFamily: 'Georgia, serif',
    color: '#666'
  },
  appFooterTextUrl: {
    fontSize: 12,
    fontFamily: 'Georgia, serif',
    color: '#666'
  },
  imageHeader: {
    height: 140
  },
  imageHomePage: {
    height: 390,
    width: 240
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
