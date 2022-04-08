import { Toast } from 'native-base';

const ShowToast = ({
  title = '',
  status = 'success',
  desc = '',
  duration = 3000,
}) => {
  Toast.show({
    title,
    status,
    duration,
    description: desc,
    isClosable: true,
  });
};

export default ShowToast;
