import React from 'react';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './optios.actions';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOptions: toggleOption,
};
export default connect(mapState, mapDispatch)(Options);
