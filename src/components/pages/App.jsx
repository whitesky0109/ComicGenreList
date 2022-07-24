import React from 'react';

import GenreList from 'components/templates/GenreList/GenreList';

import AppContainer from 'containers/pages/AppContainer';

import i18n from 'languages';

import { withContainers } from 'utils/hoc';

import { AppStyled } from './AppStyled';

export default withContainers(
  [
    AppContainer,
  ],
  /** @param {Props} args0 */
  ({
    data,
    loading,
    onScrollEnd,
    roleArtistFilter,
    filterOptions,
  }) => (
    <AppStyled>
      <GenreList
        title={i18n.t('romanseGenreRank')}
        data={data}
        loading={loading}
        onScrollEnd={onScrollEnd}
        filterOptions={filterOptions}
        roleArtistFilter={roleArtistFilter}
      />
    </AppStyled>
  ),
);

/**
@typedef {
  import('containers/pages/AppContainer').AppContainerClass
} Props
 */
