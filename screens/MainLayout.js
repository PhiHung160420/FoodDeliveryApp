import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../constants';
import Animated from 'react-native-reanimated';
import {connect} from 'react-redux';

const MainLayout = ({drawerAnimationStyle, selectedTab}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}>
      {/* Header */}

      {/* Conetent */}

      {/* Footer */}
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  return {
    selectedTab: state.TabReducer.selectedTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
