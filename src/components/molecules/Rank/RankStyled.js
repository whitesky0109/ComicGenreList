import styled from 'styled-components';

export const RankStyled = styled.div`
  width: 50px;
  font-size: 50px;
  display:flex;

  align-items: center;

  flex-direction: column;
`;

export const RankDiffStyled = styled.div`
  font-size: 20px;
  width: 100%;
  justify-content: space-around;
  display:flex;
  align-items: center;
`;

export const ArrowUp = styled.div`
  width: 0; 
  height: 0; 

  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  
  border-bottom: 10px solid red;
`;

export const ArrowDown = styled.div`
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  
  border-top: 10px solid blue;
`;
