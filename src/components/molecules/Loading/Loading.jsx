import React from 'react';

import { LoadingStyled } from './LoadingStyled';
import LoadIcon from '../LoadIcon/LoadIcon';

export default function Loading() {
  return (
    <LoadingStyled>
      <LoadIcon />
    </LoadingStyled>
  );
}
