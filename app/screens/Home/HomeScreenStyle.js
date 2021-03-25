import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  nameText: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },

  itemView: {
    marginLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    borderRadius: 5,
  },
  headerView: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a4573',
  },
  descText: {
    fontSize: 13,
    marginTop: 5,
    fontFamily: 'Nunito-Regular',
    color: 'white',
  },
  dateText: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: 'white',
  },
  titleText: {
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
  },
  marginView: {
    marginLeft: 10,
    width: '65%',
  },
});
