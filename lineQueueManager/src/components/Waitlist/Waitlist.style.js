import {StyleSheet, Dimensions} from 'react-native';


let {height, width} = Dimensions.get('window')

export let colors = {
  main: '#151515'
}

const waitlistStyle = StyleSheet.create({

  listConatiner: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    flex: 4,
    padding: width * (1 / 10),
    paddingBottom: 0,
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    flex: 1,
    padding: width * (1 / 10),
    paddingTop: 0,
    paddingBottom: width * (1 / 20)
  },
  buttonBox: {
    padding: 20,
    width: width * (3 / 10),
    height: height * (1 / 10),
    justifyContent: 'center',
    backgroundColor: '#151515',
  },
  buttonRedBox: {
    width: width * (4 / 10),
    padding: 20,
    height: height * (1 / 10),
    justifyContent: 'center',
    backgroundColor: '#D02B2B',
  },
  buttonText: {
    fontFamily: 'Alef Bold',
    color: 'white',
    fontSize: 38,
    textAlign: 'center'
  },
  idText: {
    fontFamily: 'Alef Bold',
    color: 'white',
    fontSize: 36,
    textAlign: 'center'
  },
  fullNameText: {
    fontSize: 26,
    fontFamily: 'Assistant Bold',
    textAlign: 'right',
    color: colors.main,
  },
  timestampText: {
    fontSize: 26,
    fontFamily: 'Assistant Bold',
    textAlign: 'center',
    color: colors.main,
  },
  itemContainer:{
    display:'flex',
    flexDirection:'row-reverse',
    width: width * 0.8,
    height: width / 10,
  },
  idContainer: {
    borderWidth: 1,
    borderColor: colors.main,
    backgroundColor: colors.main,
    flex: 1,
    padding:10,
  },
  fullNameContainer: {
    borderWidth: 1,
    borderColor: colors.main,
    flex: 4,
    padding:10,
    paddingRight: 15,
  },
  timestampContainer: {
    borderWidth: 1,
    borderColor: colors.main,
    flex: 2,
    padding:10,
  }
})

export default waitlistStyle
