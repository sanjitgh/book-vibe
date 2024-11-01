import React from "react";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const { bookName, author, image, tags, category, rating } = book;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-8 pb-0">
        <img className="w-32 mx-auto max-h-[170px] rounded-lg" src={image} />
      </figure>
      <div className="card-body">
        <div className="flex gap-5">
          {tags.map((tags) => (
            <div className="badge badge-outline bg-green-400 border-none text-white px-5 py-4">
              {tags}
            </div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>by : {author}</p>
        <div className="border-t-2 border-dashed mb-3"></div>
        <div className="flex justify-between">
          <p>{category}</p>
          <p className="flex items-center gap-2 justify-end">
            {rating} <CiStar />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
