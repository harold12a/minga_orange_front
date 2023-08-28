import React, { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { RiCompass4Line, RiAddCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import EditModal from "../components/EditModal";
import Swal from "sweetalert2";
import mangasActions from "../store/actions/mangas";

const { destroyManga } = mangasActions;

const EditMangas = ({
  category,
  manga_id,
  title,
  cover_photo,
  type,
  color = "blanco",
  hover,
}) => {
  const dispatch = useDispatch();

  // Estado para manejar la apertura y cierre del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="group">
        <div className="bg-white  rounded-[20px] mt-[30px] w-[85%] mx-[8%]  xl:ml-[0%] sm:ml-[20%] sm:w-[60%] xl:w-[100%]  flex justify-between  shadow-lg  transition-transform duration-300 transform group-hover:scale-105 group-focus:scale-105 ">
          <div className="absolute flex mt-2 pl-4 ">
            <Anchor to={"/chapter-form/:manga_id"}>
              <RiAddCircleLine className="mr-2" />
            </Anchor>
            <Anchor to={"/edit-chapter/:manga_id"}>
              <RiCompass4Line />
            </Anchor>
          </div>
          <div>
            <Anchor to={"/mangas/:page"}>
              <h1 className="font-bold text-[17px] xl:text-[25px] mt-2 md:text-[20px] pl-[30px] pt-[20%]   ">
                {title}
              </h1>
            </Anchor>

            <h2
              className=" font-bold pl-[30px] md:text-[20px] "
              style={{ color: `${color}` }}
            >
              {type}
            </h2>
            <div className=" mt-2 pl-6 xl:mt-[20%]">
              <Anchor
                className=" mr-2  bg-[#8883F0] text-[#2c287a]  pr-[15px]   pl-[15px] md:pl-[26px] pt-2 pb-2  mx-[0%] xl:mx-[2%]   md:h-[45px] rounded-[50000px] text-[15px] md:text-[20px]"
                // onClick={openModal}
                onClick={() => {
                  openModal();
                }}
              >
                Edit
              </Anchor>
              <EditModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                currentCategory={category}
                manga_id={manga_id}
              />
              <Anchor
                className="  bg-[#EF8481] text-[#ca443f]   pr-[15px] pt-2 pb-2   pl-[15px] md:pl-[26px] mx-[0%] xl:mx-[2%]    md:h-[45px] rounded-[50000px] text-[15px] md:text-[20px]"
                onClick={() => {
                  Swal.fire({
                    title: "You are sure ?",
                    text: "This action will delete the item permanently",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "yes, delete",
                    cancelButtonText: "Cancel",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      //realizar la eliminación
                      dispatch(destroyManga({ manga_id, category }));
                      console.log("elimnado");
                    }
                  });
                }}
              >
                Delete
              </Anchor>
            </div>
          </div>
          <div className="">
            <Anchor to={"/mangas/:page"}>
              <img
                className=" w-[140px] xl:w-[300px]  md:w-[240px]  h-[140px]  md:h-[170px]  xl:h-[250px] rounded-l-[49%] object-cover rounded-r-[10%]  "
                src={cover_photo}
                alt="img"
              />
            </Anchor>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMangas;
