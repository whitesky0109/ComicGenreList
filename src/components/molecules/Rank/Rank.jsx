import React from 'react';
import PropTypes from 'prop-types';

import {
  RankStyled, RankDiffStyled, ArrowUp, ArrowDown,
} from './RankStyled';

/** @param {Props} args0 */
export default function Rank({ currentRank, previousRank }) {
  const rankDiff = previousRank - currentRank;

  const Arrow = rankDiff > 0 ? ArrowUp : ArrowDown;

  return (
    <RankStyled>
      {currentRank}
      <RankDiffStyled>
        {rankDiff ? (
          <>
            <Arrow rankdiff={rankDiff} />
            {Math.abs(rankDiff)}
          </>
        ) : '-'}
      </RankDiffStyled>
    </RankStyled>
  );
}

Rank.propTypes = {
  currentRank: PropTypes.number.isRequired,
  previousRank: PropTypes.number.isRequired,
};

/**
@typedef {import('appStore/api/comic').ComicRankItem} Props
 */
