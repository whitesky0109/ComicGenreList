import React from 'react';

import getOption from 'components/molecules/FilterOptions';

import FilterContainer from 'containers/organisms/Filter/FilterContainer';

import { withContainers } from 'utils/hoc';

import { GenreFilterStyled, FilterOptionStyled } from './FilterStyled';

export default withContainers(
  [
    FilterContainer,
  ],
  /** @param {Props} args0 */
  ({
    filterOptions,
    onClickItem,
  }) => (
    <GenreFilterStyled>
      {filterOptions.map(
        (option) => {
          const {
            target, value, disabled = true, lang = '',
          } = option;

          const FilterOption = getOption(target);

          const key = `${target}_${value}`;

          return (
            <FilterOptionStyled key={key}>
              <FilterOption
                type={key}
                target={target}
                value={value}
                disabled={disabled}
                onClick={onClickItem(option)}
              >
                {lang || key}
              </FilterOption>
            </FilterOptionStyled>
          );
        },
      )}
    </GenreFilterStyled>
  ),
);

/**
@typedef {import('appStore/api/comic').ComicRankItem} ComicInfo
@typedef {{
  target: string,
  value: any,
  disabled: boolean,
  lang: string,
  checkValidation?: (target: FilterType, item: ComicRankItem) => boolean,
}} FilterType

@typedef {
  {
    filterOptions: FilterType[],
  }
  & FilterContainer
} Props
 */
