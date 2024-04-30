import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    position: 'absolute',
    zIndex: -1, // Place the background behind other elements
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  background: {
    resizeMode: 'cover',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    zIndex: -2, // Place the background behind other elements
  },
  back: {
    position: 'absolute',
    height: 30,
    width: 30,
    left: 10,
    tintColor: '#fff',
    top: 23,
    zIndex: 1, // Place the background behind other elements
  },
  title: {
    position: 'absolute',
    zIndex: 1,
  },
  AndroidTitle: {
    left: '45%',
    textAlign: 'center',
    top: 25,
    fontSize: 22,

    color: '#fff',
  },

  tutorials: {
    top: 90,
    position: 'absolute',
  },
  textstyle: {
    fontSize: 20,
    color: '#000',
    left: 20,
    textAlign: 'center',
  },

  openplay: {
    top: 53,
    left: 13,
    width: 400,
    height: 250,
    position: 'absolute',
    borderRadius: 10,
  },
  step2: {
    top: 340,
  },
  search: {
    top: 10,
    left: 20,
    borderRadius: 10,
    width: 380,
    height: 390,
  },

  step3: {
    top: 460,
  },

  step4: {
    top: 540,
  },
  open: {
    top: 10,
    left: 13,
    borderRadius: 10,
    width: 400,
    height: 300,
  },
});

export default styles;
