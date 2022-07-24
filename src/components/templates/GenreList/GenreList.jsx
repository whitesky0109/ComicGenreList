import React from 'react';

import Loading from 'components/molecules/Loading/Loading';
import Filter from 'components/organisms/Filter/Filter';
import Thumbnail from 'components/organisms/Thumbnail/Thumbnail';

import GenreListContainer from 'containers/templates/GenreList/GenreListContainer';

import { withContainers } from 'utils/hoc';
import {
  GenreRankStyled, TitleStyled,
  FilterStyled,
  ThumbnailsStyled, ThumbnailStyled,
} from './GenreListStyled';

export default withContainers(
  [
    GenreListContainer,
  ],
  /** @param {Props} args0 */
  ({
    title,
    filterOptions, data,
    onClickFilter, onScrollThumbnails,
    roleArtistFilter,
    loading,
  }) => (
    <GenreRankStyled>
      <TitleStyled>{title}</TitleStyled>
      {filterOptions.length ? (
        <FilterStyled>
          <Filter filterOptions={filterOptions} onClick={onClickFilter} />
        </FilterStyled>
      ) : ''}
      <ThumbnailsStyled onScroll={onScrollThumbnails}>
        {data.map((d) => (
          <ThumbnailStyled key={d.id}>
            <Thumbnail {...d} roleArtistFilter={roleArtistFilter} />
          </ThumbnailStyled>
        ))}
      </ThumbnailsStyled>

      {loading && <Loading />}
    </GenreRankStyled>
  ),
);

/**
@typedef {{
  filterOptions: import('components/organisms/Filter/Filter').FilterType[],
  data: import('appStore/api/comic').ComicRankItem[];
  loading: boolean;
  roleArtistFilter: string[];
}
& GenreListContainer
} Props
 */
