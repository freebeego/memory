import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import plus from '../../images/plus.svg';
import { connect } from 'react-redux';
import { closePopups } from '../../store/popups/popupsSlice';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${(props) => props.isOpen ? 1 : 0};
  transition: opacity .4s;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  width: 60vw;
  max-height: 600px;
  box-sizing: border-box;
  padding: 30px 0 40px;
  position: relative;
`;

const CloseButton = styled.button`
  background-color: unset;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: unset;
  padding: 0;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`;

const Title = styled.h2`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 25px;
  margin: 0;
`;

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
