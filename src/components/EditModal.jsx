import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import mangasActions from "../store/actions/mangas";
import axios from "axios";
import apiUrl from "../apiUrl"
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

const EditModal = ({ isOpen, onRequestClose, manga_id, currentCategory }) => {
  const [title, setTitle] = useState("");
  const [coverPhotoUrl, setCoverPhotoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  // console.log(categories); 
  useEffect(() => {
    axios
      .get(apiUrl + "categories")
      .then((res) => setCategories(res.data.response))
      .catch((error) => console.log(error));
  }, []);

  const dispatch = useDispatch();
  const { updateManga } = mangasActions;

  const handleSaveChanges = () => {
    // console.log('update');
    // console.log(manga_id);
    // console.log(currentCategory);
    // console.log(category);
    let data = {};
    if (title) {
      data.title = title;
    }
    if (coverPhotoUrl) {
      data.cover_photo = coverPhotoUrl;
    }
    if (category) {
      data.category_id = category;
    }
    // console.log(data);
    dispatch(updateManga({ manga_id, data, currentCategory }));
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
        <select
          className="w-full px-4 py-2 rounded border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
              {categories.map((categoryValue) => (
            <option key={categoryValue._id} value={categoryValue._id}>
              {categoryValue.name}         
            </option>        
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2 font-mono">Cover photo Url:</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded border"
          value={coverPhotoUrl}
          onChange={(e) => setCoverPhotoUrl(e.target.value)}
        />
      </div>
      {/* visualizacion de img  */}
      <div className="mt-4">
        <label className="block mb-2 font-mono">Cover photo preview:</label>
        {coverPhotoUrl && (
          <img
            src={coverPhotoUrl}
            alt="Cover Preview"
            style={{ maxWidth: "100%" }}
          />
        )}
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
