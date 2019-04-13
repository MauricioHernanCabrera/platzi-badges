import React from "react";

import Modal from "./Modal";

const DeleteBadgeModal = ({ isOpen, onClose, onDeleteBadge }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge.</p>

        <div>
          <button onClick={onClose} className="btn btn-primary mr-2">
            Cancel
          </button>
          <button onClick={onDeleteBadge} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteBadgeModal;
