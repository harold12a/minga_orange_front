import { useState } from "react";
import React from 'react';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const EditModal = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [category, setCategory] = useState("");

  const handleSaveChanges = () => {
  console.log('update');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Editar Información"
    >
      <h2 className="text-xl mb-4 font-semibold">Edit Information</h2>
      <div>
        <label className="block mb-2 font-mono">Title:</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 font-mono">Category:</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 font-mono">Cover photo:</label>
        <input
          type="file"
          className="w-full px-4 py-2 rounded border"
          onChange={(e) => setCoverPhoto(e.target.files[0])}
        />
      </div>

      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
        <button
          className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded font-bold"
          onClick={onRequestClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default EditModal;