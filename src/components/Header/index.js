import { useNavigation } from '@react-navigation/native';
import { Box, Button, StatusBar, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../styles/globalStyles';
import styles from './Header.styles';

const Header = ({
  title = '',
  hideBackButton = false,
  rightButtons = undefined,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" animated />
      <Box
        style={styles.header}
        bg={{
          linearGradient: {
            colors: ['blue.500', 'orange.400'],
            start: [0, 0],
            end: [1, 0],
          },
        }}>
        {!hideBackButton && (
          <Button
            key="btnNav"
            background={COLORS.orange}
            style={styles.btnNav}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-ios" size={36} color="black" />
          </Button>
        )}
        <Text style={styles.title}>{title}</Text>
        {Array.isArray(rightButtons) && !!rightButtons.length && (
          <View style={styles.rightButtons}>{rightButtons}</View>
        )}
        {rightButtons && !Array.isArray(rightButtons) && (
          <View style={styles.rightButtons}>{rightButtons}</View>
        )}
      </Box>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  hideBackButton: PropTypes.bool,
  rightButtons: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Header;
