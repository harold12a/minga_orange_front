import React from 'react';
import { useState } from 'react';

const ButtonDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };
  return (
    <label className="w-52 flex items-center cursor-pointer rounded-full h-8 bg-white border border-gray-400">
      <div
        className={`flex items-center justify-center w-1/2 h-full rounded-full border-white ${isChecked ? 'bg-orange-500 text-white' : 'bg-white text-[#9D9D9D]'
          }`}
        onClick={() => handleChange(false)}
      >
        Manga
      </div>
      <div
        className={`flex items-center justify-center w-1/2 h-full rounded-full ${isChecked ? 'bg-white text-[#9D9D9D]' : 'bg-orange-500 text-white'
          }`}
        onClick={() => handleChange(true)}
      >
        Chapter
      </div>
    </label>
  );
};

export default ButtonDetails;
