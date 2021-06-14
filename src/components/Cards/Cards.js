import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TRANSITION_TIME } from '../../config/constants';
import { finishGame, selectCard } from '../../store/game/thunks';

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
    cursor: ${(props) => props.isOpen ? 'unset' : 'pointer'};
  }

  & .front {
    transform: ${(props) => props.isOpen ? 'rotateY(360deg)' : 'rotateY(180deg)'};
  }

  & .back {
    transform: ${(props) => props.isOpen ? 'rotateY(180deg)' : 'none'};
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
  transition: transform ${String(TRANSITION_TIME)}s, visibility;
`;

const CardBack = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  transition: transform ${String(TRANSITION_TIME)}s;
`;

function Cards() {
  const dispatch = useDispatch();

  const game = useSelector((state) => state.game);

  React.useEffect(
    () => {
      if (game.hiddenCardsNumber === 0) {
        dispatch(finishGame());
      }
    },
    [game.hiddenCardsNumber, dispatch]
  );

  function onCard(selectedCard) {
    if (selectedCard.isVisible && game.firstSelectedCard !== selectedCard && game.secondSelectedCard !== selectedCard) {
      dispatch(selectCard(selectedCard));
    }
  }
console.log(game.isFinished);
  return (
    <CardsList>
      {game.cards.map((card) =>
        <Card
          key={card.id}
          isOpen={
            game.firstSelectedCard === card || game.secondSelectedCard === card ||
            !game.isStarted || game.isFinished || !card.isVisible
          }
          onClick={() => onCard(card)}
        >
          <CardFront image={card.path} className="front" isVisible={card.isVisible} />
          <CardBack className="back" />
        </Card>
      )}
    </CardsList>
  );
}

export default Cards;
