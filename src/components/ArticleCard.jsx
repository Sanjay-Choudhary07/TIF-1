import React from 'react';

const ArticleCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-10 lg:w-[30%] p-7 border border-gray-400 rounded-2xl text-[#444957] text-sm">
      <img src={props.image} alt={props.title} className="rounded-md" />
      <h3 className="font-poppins text-blueish text-xl lg:text-2xl font-bold">{props.title}</h3>
      <p className="tracking-wide">{props.description}</p>
      <button type='button' className="rounded-3xl w-32 lg:w-40 h-10 lg:h-12 font-bold z-50 border-2 border-blueish hover:bg-pink-400 transition duration-300">
        Read More
      </button>
    </div>
  );
};

export default ArticleCard;
