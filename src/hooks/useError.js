import React from 'react';
import { useToast } from 'native-base';

const useError = ({
  title = '',
  position = 'top',
  status = 'success',
  desc = '',
  duration = 3000,
}) => {
  const toast = useToast();
  console.log('error od hook');
  const options = {
    title,
    placement: position,
    status,
    description: desc,
    duration,
    isClosable: true,
  };

  toast.show(options);
};

export default useError;
