import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { finishGame, selectCard } from '../../store/game/thunks';
import {
  selectCards,
  selectIsGameStarted,
  selectIsGameFinished,
  selectFirstSelectedCard,
  selectSecondSelectedCard,
  selectHiddenCardsNumber
} from '../../store/game/selectors';
import CardsList from './CardsList';
import Card from './Card';
import CardFront from './CardFront';
import CardBack from './CardBack';

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
