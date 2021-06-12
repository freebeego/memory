import Timer from '../Timer/Timer';
import React from 'react';
import styled from 'styled-components';
import { stopTimer } from '../../store/timer/timerSlice';
import { endGame } from '../../store/game/gameSlice';
import { useDispatch } from 'react-redux';
import { openSaveResult } from '../../store/popups/popupsSlice';

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
`;

const Title = styled.h1`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 900;
  font-size: 32px;
  margin: 0;
`;

const ResultsTableButton = styled.button`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #f0f8ff;
  border-radius: 15px;
  border: 1px solid #000;
  width: 133px;
  height: 35px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`;

function Header() {
  const dispatch = useDispatch();

  function showResults() {
    dispatch(stopTimer());
    dispatch(endGame());
    dispatch(openSaveResult());
  }

  return (
    <HeaderElement>
      <Title>
        Memory
      </Title>
      <Timer />
      <ResultsTableButton onClick={showResults}>
        Results
      </ResultsTableButton>
    </HeaderElement>
  );
}

export default Header;
