import { FormControl, Input } from 'native-base';
import propTypes from 'prop-types';
import React from 'react';

const CustomInput = ({
  type = 'text',
  value = '',
  isRequired = false,
  placeholder = '',
  label = '',
  name,
  onChange,
}) => {
  const handleChange = text => {
    onChange(name, text);
  };

  return (
    <>
      <FormControl.Label alignItems={'center'} isRequired={isRequired}>
        {label}{' '}
      </FormControl.Label>
      <Input
        _focus={{
          borderColor: 'blue.700',
        }}
        type={type}
        value={value}
        placeholder={placeholder}
        isRequired={isRequired}
        onChangeText={handleChange}
      />
      <FormControl.ErrorMessage>
        <>oERRR</>
      </FormControl.ErrorMessage>
    </>
  );
};

CustomInput.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  isRequired: propTypes.bool,
  placeholder: propTypes.string,
  label: propTypes.string,
  name: propTypes.string,
  onChange: propTypes.func,
};

export default CustomInput;
