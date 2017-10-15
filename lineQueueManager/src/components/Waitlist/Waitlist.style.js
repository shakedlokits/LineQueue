import {StyleSheet, Dimensions} from 'react-native';


let {height, width} = Dimensions.get('window')

export let colors = {
  main: '#151515'
}

const waitlistStyle = StyleSheet.create({

  listConatiner: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flex: 4,
    padding: width * (1 / 15),
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
    fontFamily: 'Alef',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 38,
    textAlign: 'center'
  },
  idText: {
    fontFamily: 'Alef',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  textColorFirst: {
    color: 'white'
  },
  fullNameText: {
    fontSize: 18,
    fontFamily: 'Assistant',
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.main,
  },
  timestampText: {
    fontSize: 18,
    fontFamily: 'Assistant',
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.main,
  },
  itemContainer:{
    display:'flex',
    flexDirection:'row-reverse',
    width: width * 0.8,
    height: width * (1 / 15),
    backgroundColor: 'white',
    marginBottom: 4
  },
  itemContainerFirst:{
    backgroundColor: colors.main,
    marginBottom: 20,
    width: width * 0.9,
    height: width * (1 / 10),
  },
  idContainer: {
    borderWidth: 3,
    borderColor: colors.main,
    backgroundColor: colors.main,
    width: width * (1 / 15),
    justifyContent: 'center'
  },
  fullNameContainer: {
    borderWidth: 3,
    borderColor: colors.main,
    flex: 4,
    justifyContent: 'center',
    paddingRight: 20
  },
  timestampContainer: {
    borderWidth: 3,
    borderRightWidth: 0,
    borderColor: colors.main,
    width: width * 0.15,
    justifyContent: 'center'
  },
})

export default waitlistStyle
