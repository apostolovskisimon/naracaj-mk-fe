import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../styles/globalStyles';

export default EStyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.orange,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnNav: {
    position: 'absolute',
    left: 10,
    backgroundColor: 'transparent',
  },
  rightButtons: {
    position: 'absolute',
    right: 10,
  },

  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
});
