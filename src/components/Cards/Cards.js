import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { endGame, hideShownCard, openPairedCards, showCard } from '../../store/game/gameSlice';
import { stopTimer } from '../../store/timer/timerSlice';
import { openSaveResult } from '../../store/popups/popupsSlice';

const CardsList = styled.ul`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(6, 10vw);
  grid-auto-rows: 1fr;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

const Card = styled.li`
  position: relative;
  height: 10vh;
  perspective: 30vw;
  background-color: #f0f8ff;

  &:hover {
    cursor: ${props => props.isOpen ? 'unset' : 'pointer'};
  }

  & .front {
    transform: ${(props) => props.opened ? 'rotateY(360deg)' : 'rotateY(180deg)'};
  }

  & .back {
    transform: ${(props) => props.opened ? 'rotateY(180deg)' : 'none'};
  }
`;

const CardFront = styled.div`
  background-image: url('${(props) => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f8ff;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  transition: transform .6s, visibility .5s;
`;

const CardBack = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  transition: transform .6s;
`;

function Cards() {
  const dispatch = useDispatch();

  const game = useSelector((state) => state.game);

  const [timeoutId, setTimeoutId] = React.useState(null);

  React.useEffect(
    () => {
      if (game.cards.every((card) => card.isOpen === true)) {
        dispatch(stopTimer());
        dispatch(endGame());
        dispatch(openSaveResult());
      }
    },
    [game.cards, dispatch]
  );
  console.log('cards');
  function onCard(card) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      setTimeoutId(0);
    }
    if (game.wasStarted) {
      if (card.path === game.shownCard.path && card.id !== game.shownCard.id) {
        dispatch(openPairedCards(card));
      } else {
        dispatch(showCard(card));
        setTimeoutId(
          setTimeout(
            () => {
              dispatch(hideShownCard());
            },
            5000
          )
        );
      }
    }
  }

  return (
    <CardsList>
      {game.cards.map((card) =>
        <Card
          key={card.id}
          opened={!game.wasStarted || card.isOpen || card === game.shownCard}
          isOpen={card.isOpen}
          onClick={() => onCard(card)}
        >
          <CardFront image={card.path} className="front" isVisible={!card.isOpen} />
          <CardBack className="back" />
        </Card>
      )}
    </CardsList>
  );
}

export default Cards;
