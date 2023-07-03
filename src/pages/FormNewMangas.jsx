import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';

const FormNewMangas = () => {
    const titleRef = useRef('');
    const categoryRef = useRef('');
    const descriptionRef = useRef('');
    const coverPhotoRef = useRef('');
    const [errors, setErrors] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios(apiUrl + '/categories')
            .then((res) => {
                setCategories(res.data.response);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar los campos
        const validationErrors = {};
        if (titleRef.current.value.length < 3) {
            validationErrors.title = 'El título debe tener al menos 3 caracteres';
        }
        if (categoryRef.current.value === '') {
            validationErrors.category = 'Debes seleccionar una categoría';
        }
        if (descriptionRef.current.value.length < 3) {
            validationErrors.description = 'La descripción debe tener al menos 3 caracteres';
        }

        if (Object.keys(validationErrors).length === 0) {
            // Si no hay errores, realizar acciones con los datos del formulario
            console.log({
                title: titleRef.current.value,
                category_id: categoryRef.current.value,
                description: descriptionRef.current.value,
                cover_photo: coverPhotoRef.current.value,
            });

            // Restablecer los campos del formulario después de enviarlos
            titleRef.current.value = '';
            categoryRef.current.value = '';
            descriptionRef.current.value = '';
            coverPhotoRef.current.value = '';
            setErrors({});
        } else {
            // Si hay errores, mostrar mensajes de error
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex justify-center h-screen md:justify-center">
            <form className="w-3/5 mt-24 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2" onSubmit={handleSubmit}>
                <div className='mb-4 flex justify-center'>
                    <h3 className="font-poppins font-normal whitespace-nowrap text-[25px] text-center">
                        New Manga
                    </h3>
                </div>

                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-bold text-gray-700"></label>
                    <input
                        type="text"
                        id="title"
                        ref={titleRef}
                        placeholder="Insert title"
                        className="w-full px-3 py-2 border-b border-gray-400"
                        required
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 font-bold text-gray-700"></label>
                    <select
                        id="category"
                        ref={categoryRef}
                        placeholder="Insert category"
                        className="w-full px-3 py-2 border-b border-gray-400"
                        required
                    >
                        <option value="">Insert category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-bold text-gray-700"></label>
                    <textarea
                        id="description"
                        ref={descriptionRef}
                        placeholder="Insert description"
                        className="w-full px-3 py-2 border-b border-gray-400"
                        required
                    />
                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="coverPhoto" className="block mb-2 font-bold text-gray-700"></label>
                    <input
                        type="url"
                        id="coverPhoto"
                        ref={coverPhotoRef}
                        className="w-full px-1 py-2 border-b border-gray-400"
                        placeholder="Insert cover photo URL"
                    />
                    {errors.coverPhoto && <p className="text-red-500">{errors.coverPhoto}</p>}
                </div>
                <button type="submit" className="mt-7 mx-auto w-full h-14 bg-[#4338CA] rounded-[50000px]">
                    Send
                </button>
            </form>
        </div>
    );
};

export default FormNewMangas;
