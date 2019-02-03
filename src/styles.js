import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#eaeaea',
    borderWidth: 3,
    maxWidth: 800,
    borderColor: '#888888'
  },
  appHeader: {
    backgroundColor: '#00496c',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 20,
    margin: 0
  },
  appHeaderTextLink: {
    fontSize: 16,
    fontFamily: 'Georgia, serif',
    color: 'yellow',
    margin: 5,
    marginRight: 20
  },
  appHeaderText: {
    fontSize: 16,
    fontFamily: 'Georgia, serif',
    color: 'white',
    margin: 5,
    marginRight: 20
  },
  appBody: {
    backgroundColor: '#eaeaea',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appIntro: {
    fontSize: 20,
    color: '#666666',
    fontFamily: 'Georgia, serif',
    textAlign: 'center',
    marginTop: 20
  },
  appFooter: {
    backgroundColor: '#eaeaea',
    borderTopColor: '#666666',
    borderTopWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20
  },
  appFooterText: {
    fontSize: 12,
    fontFamily: 'Georgia, serif',
    color: '#666666'
  },
  appFooterTextUrl: {
    fontSize: 12,
    fontFamily: 'Georgia, serif',
    color: '#00496c'
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
