import styled from 'styled-components';
import { ReactComponent as ArrowUp } from 'assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';

export const ItemStyled = styled.div`
  border: 1px solid;
  padding: 5px 10px;

  &[disabled] {
    opacity: .2;
  }

  cursor: pointer;
`;

export const ArrowUpSytled = styled(ArrowUp)`
  width: 15px;
  height: 15px;
`;

export const ArrowDownSytled = styled(ArrowDown)`
  width: 15px;
  height: 15px;
`;
