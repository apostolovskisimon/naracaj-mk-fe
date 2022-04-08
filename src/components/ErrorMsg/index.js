import { Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

const ErrorMsg = ({ msg }) => {
  return (
    <Text color="red.600" fontWeight="bold" fontSize={12} mt="7px" mb="7px">
      {msg}
    </Text>
  );
};

ErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default ErrorMsg;
