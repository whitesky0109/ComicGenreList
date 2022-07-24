import React from 'react';
import PropTypes from 'prop-types';

import i18n from 'languages';

import { CaptionStyled, TitleStyled } from './CaptionStyled';

/** @param {Props} args0 */
export default function Caption({
  title,
  artists,
  freedEpisodeSize,
  contentsState,
  schedule,

  roleArtistFilter,
}) {
  const filteredArtists = artists.filter(({ role }) => (
    !roleArtistFilter.length || roleArtistFilter.includes(role)
  ));

  let convertedPeriod;
  switch (contentsState) {
    case 'completed':
      convertedPeriod = i18n.t(contentsState);
      break;

    default: {
      convertedPeriod = i18n.t('msg_periods').replace('%1', schedule.periods.map((key) => i18n.t(key)).join(', '));
    }
  }

  return (
    <CaptionStyled>
      <TitleStyled>{title}</TitleStyled>
      <span>
        {filteredArtists.map(({ name }) => name).join(', ')}
      </span>
      <span>
        {i18n.t('msg_freeEpiseodeSize').replace('%1', freedEpisodeSize)}
      </span>
      <span>
        {convertedPeriod}
      </span>
    </CaptionStyled>
  );
}

Caption.defaultProps = {
  roleArtistFilter: [],
};

Caption.propTypes = {
  title: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(Object).isRequired,
  freedEpisodeSize: PropTypes.number.isRequired,
  contentsState: PropTypes.string.isRequired,
  schedule: PropTypes.instanceOf(Object).isRequired,

  roleArtistFilter: PropTypes.arrayOf(String),
};

/**
@typedef {import('appStore/api/comic').ComicRankItem} Props
 */
