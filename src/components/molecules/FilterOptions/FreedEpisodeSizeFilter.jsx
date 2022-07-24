import React from 'react';
import PropTypes from 'prop-types';

import i18n from 'languages';

import { ItemStyled, ArrowUpSytled } from './FilterOptionStyled';

export default function FilterOptionFreedEpisodeSize({ type, value, ...rest }) {
  const customChildren = (
    <span>
      {i18n.t('msg_freeSize').replace('%1', value)}
      <ArrowUpSytled />
    </span>
  );

  return (
    <ItemStyled type={type} {...rest}>
      {customChildren}
    </ItemStyled>
  );
}

FilterOptionFreedEpisodeSize.defaultProps = {
  lang: '',
};

FilterOptionFreedEpisodeSize.propTypes = {
  type: PropTypes.string.isRequired,
  lang: PropTypes.string,
  value: PropTypes.number.isRequired,
};
