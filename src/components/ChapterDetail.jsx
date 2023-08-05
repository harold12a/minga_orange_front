import imageSrc from "../../src/assets/images/Frame588.png";
import icon_comment from "../assets/images/icon_comment.svg";
import { useEffect, useState } from 'react';
import apiURL from '../apiUrl.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom';

export default function ChapterDetail() {
  const { manga_id, page } = useParams();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    axios(apiURL + '/chapters?manga_id=' + manga_id + '&page=' + page, headers)
      .then(res => setChapters(res.data.response))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mt-8 overflow-x-auto justify-center" style={{ maxHeight: '300px' }}>
      {chapters?.map((each, index) => (
        <div key={index} className="flex items-center bg-white p-4 rounded-md shadow-md w-[300px] flex-shrink-0">
          <img src={each?.cover_photo} alt="image-chapter" className="w-14 rounded-2xl" />
          <div className="flex flex-col items-center flex-1 ml-2">
            <h1 className="text-sm text-center">{each?.title}</h1>
            <div className="flex items-center">
              <img src={icon_comment} alt="" className="w-6" />
              <h2 className="ml-2">{each?.pages.length}</h2>
            </div>
          </div>
          <Anchor
            to={'/details-chapter/' + each._id + '/' + page}
            className="flex h-12 w-20 items-center justify-center bg-orange-600 rounded-2xl font-roboto font-bold text-[14px] text-white cursor-pointer"
          >
            Read
          </Anchor>
        </div>
      ))}
    </div>


  );
}
