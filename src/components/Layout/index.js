import { KeyboardAvoidingView, ScrollView } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header';
import styles from './Layout.styles';

const Layout = ({ children, noHeader = false, ...rest }) => {
  return (
    <ScrollView style={styles.scrView} keyboardShouldPersistTaps="always">
      {!noHeader && <Header {...rest} />}
      <KeyboardAvoidingView style={styles.scrView}>
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  noHeader: PropTypes.bool,
  title: PropTypes.string,
  hideBackButton: PropTypes.bool,
  rightButtons: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Layout;
