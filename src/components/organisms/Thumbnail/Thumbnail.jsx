import React from 'react';
import PropTypes from 'prop-types';

import Rank from 'components/molecules/Rank/Rank';
import Caption from 'components/molecules/Caption/Caption';

import {
  ThumbnailStyled,
  ImageStyled,
  ThumbnailContentStyled,
} from 'components/organisms/Thumbnail/ThumbnailStyled';

/** @param {Props} */
function Thumbnail({ thumbnailSrc, roleArtistFilter, ...rest }) {
  return (
    <ThumbnailStyled>
      <ThumbnailContentStyled>
        <ImageStyled src={thumbnailSrc} width={80} height={120} />
      </ThumbnailContentStyled>
      <ThumbnailContentStyled>
        <Rank {...rest} />
      </ThumbnailContentStyled>
      <ThumbnailContentStyled>
        <Caption {...rest} roleArtistFilter={roleArtistFilter} />
      </ThumbnailContentStyled>
    </ThumbnailStyled>
  );
}

Thumbnail.defaultProps = {
  roleArtistFilter: [],
};

Thumbnail.propTypes = {
  thumbnailSrc: PropTypes.string.isRequired,
  roleArtistFilter: PropTypes.arrayOf(String),
};

export default Thumbnail;

/**
@typedef {{
  src: string,
  artistNames: string[],
  title: string,
  rank: number,
}} Props
*/
