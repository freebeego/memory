import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { TRANSITION_TIME } from '../../config/constants';
import { finishGame, selectCard } from '../../store/game/thunks';
import {
  selectCards,
  selectIsGameStarted,
  selectIsGameFinished,
  selectFirstSelectedCard,
  selectSecondSelectedCard,
  selectHiddenCardsNumber
} from '../../store/game/selectors';

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

function Cards({
                 cards,
                 isGameStarted,
                 isGameFinished,
                 firstSelectedCard,
                 secondSelectedCard,
                 hiddenCardsNumber,
                 selectCard,
                 finishGame
}) {
  React.useEffect(
    () => {
      if (hiddenCardsNumber === 0) {
        finishGame();
      }
    },
    [hiddenCardsNumber, finishGame]
  );

  function onCard(selectedCard) {
    if (selectedCard.isVisible && firstSelectedCard !== selectedCard && secondSelectedCard !== selectedCard) {
      selectCard(selectedCard);
    }
  }

  return (
    <CardsList>
      {cards.map((card) =>
        <Card
          key={card.id}
          isOpen={
            firstSelectedCard === card || secondSelectedCard === card ||
            !isGameStarted || isGameFinished || !card.isVisible
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

const mapStateToProps = (state) => ({
  cards: selectCards(state),
  isGameStarted: selectIsGameStarted(state),
  isGameFinished: selectIsGameFinished(state),
  firstSelectedCard: selectFirstSelectedCard(state),
  secondSelectedCard: selectSecondSelectedCard(state),
  hiddenCardsNumber: selectHiddenCardsNumber(state)
});

const mapDispatchToProps = (dispatch) => ({
  selectCard: (selectedCard) => dispatch(selectCard(selectedCard)),
  finishGame: () => dispatch(finishGame()),
});

const cardTypesTemplate = {
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  path: PropTypes.string
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  isGameStarted: PropTypes.bool.isRequired,
  isGameFinished: PropTypes.bool.isRequired,
  firstSelectedCard: PropTypes.shape(cardTypesTemplate),
  secondSelectedCard: PropTypes.shape(cardTypesTemplate),
  hiddenCardsNumber: PropTypes.number,
  selectCard: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
