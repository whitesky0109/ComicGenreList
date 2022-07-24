import React from 'react';
import PropTypes from 'prop-types';

import i18n from 'languages';

import { ItemStyled } from './FilterOptionStyled';

export default function FilterOptionContentsState({ value, ...rest }) {
  return (
    <ItemStyled {...rest}>
      {i18n.t(value)}
    </ItemStyled>
  );
}

FilterOptionContentsState.propTypes = {
  value: PropTypes.string.isRequired,
};
