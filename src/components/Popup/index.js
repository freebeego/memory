import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopups } from '../../store/popups/popupsSlice';
import Overlay from './Overlay';
import Container from './Container';
import CloseButton from './CloseButton';
import Title from '../Header/Title';

function Popup({ children, title, isOpen, closePopups }) {
  function onOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closePopups();
    }
  }

  return (
    <Overlay isOpen={isOpen} onMouseDown={onOverlayClick}>
      <Container>
        <CloseButton type="button" onClick={closePopups} />
        <Title>
          {title}
        </Title>
        {children}
      </Container>
    </Overlay>
  );
}

const mapDispatchToProps = (dispatch) => ({
  closePopups: () => dispatch(closePopups())
});

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closePopups: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Popup);
