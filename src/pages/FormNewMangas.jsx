import React, { useState, useEffect } from 'react';
import axios from "axios";
import apiUrl from "../apiUrl";


const FormNewMangas = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [coverPhoto, setCoverPhoto] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar los campos
        const validationErrors = {};
        if (title.length < 3) {
            validationErrors.title = 'El título debe tener al menos 3 caracteres';
        }
        if (category === '') {
            validationErrors.category = 'Debes seleccionar una categoría';
        }
        if (description.length < 3) {
            validationErrors.description = 'La descripción debe tener al menos 3 caracteres';
        }
        if (!coverPhoto) {
            validationErrors.coverPhoto = 'Debes seleccionar una foto de portada';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Si no hay errores, realizar acciones con los datos del formulario
            console.log({
                title,
                category,
                description,
                coverPhoto
            });

            // Restablecer los campos del formulario después de enviarlos
            setTitle('');
            setCategory('');
            setDescription('');
            setCoverPhoto('');
            setErrors({});
        } else {
            // Si hay errores, mostrar mensajes de error
            setErrors(validationErrors);
        }
    };


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios(apiUrl + "/categories")
            .then(res => { setCategories(res.data.response) })
            .catch((err) => console.log(err));
    }, []);

    console.log("pruebas")
    console.log(categories)
    return (
        <div className="flex justify-center  h-screen ">
            <form className="w-3/5 mt-24 " onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-bold text-gray-700">
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        placeholder="Insert title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2  border-b border-gray-400  "
                        required
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 font-bold text-gray-700">
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Insert category"
                        className="w-full px-3 py-2 border-b border-gray-400"
                        required>
                        <option value="">Insert category</option>
                        console.log(categories);
                        {categories.map((cat, index) => (
                            <option key={index} value={cat.name}>
                                {cat.name}

                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2  font-bold text-gray-700">
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        placeholder="Insert description"
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border-b border-gray-400"
                        required
                    />
                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="coverPhoto" className="block mb-2 font-bold text-gray-700">
                    </label>
                    <input
                        type="file"
                        id="coverPhoto"
                        onChange={(e) => setCoverPhoto(e.target.files[0])}
                        className="w-full px-1 py-2  border-b border-gray-400  "
                        accept="image/*"
                        required
                        placeholder="Cambiar foto"
                    />
                    {errors.coverPhoto && <p className="text-red-500">{errors.coverPhoto}</p>}
                </div>
                <button
                    type="submit"
                    className="mt-7 mx-auto w-full h-14 bg-[#4338CA] rounded-[50000px] "
                >
                    Enviar
                </button>


            </form>
        </div>
    );
};

export default FormNewMangas;
