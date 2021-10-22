import React from 'react';
import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './optios.actions';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOptions: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
