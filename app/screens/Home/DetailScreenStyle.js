import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#222e42',
  },
  headerView: {
    height: '40rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a4573',
  },
  nameText: {
    fontSize: '18rem',
    width: '70%',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
  headName: {
    fontSize: '15rem',
    fontFamily: 'Nunito-Bold',
    color: 'white',
    marginTop: '10rem',
    marginBottom: '5rem',
  },
  desc: {fontSize: '13rem', fontFamily: 'Nunito-Regular', color: '#d3d6db'},
  marginTH: {
    marginTop: '20rem',
    marginHorizontal: '10rem',
  },
  taglineText: {
    fontSize: '15rem',
    width: '90%',
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
  },
  mainTitleText: {
    fontSize: '16rem',
    width: '90%',
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
  posterImage: {
    height: '120rem',
    width: '20%',
    marginLeft: '10rem',
    marginRight: '10rem',
  },
  marginViewImage: {
    flexDirection: 'row',
    marginTop: '22%',
  },
  imageBack: {
    height: '100%',
    width: '100%',
  },
  imageUpperView: {
    backgroundColor: 'rgba(0,0,0,10)',
    marginTop: '40rem',
    position: 'absolute',
    height: '30%',
    width: '100%',
  },
  backIcon: {
    height: '15rem',
    width: '15rem',
  },
  scrollView: {flex: 1, marginTop: '5rem'},
});
