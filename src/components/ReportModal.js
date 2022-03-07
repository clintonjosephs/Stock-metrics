import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const ReportModal = ({ show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Done
      </Button>
    </Modal.Footer>
  </Modal>
);

ReportModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ReportModal;
