import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
    tags,
  } = book;

  console.log(tags);

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-10 bg-gray-100 rounded-xl">
          <img src={image} className="w-full max-h-[600px] rounded-xl" alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p className="text-lg font-medium">By : {author}</p>
          <div className="divider my-1"></div>
          <p className="text-xl font-medium">{category}</p>
          <div className="divider my-1"></div>
          <p className="text-gray-700 text-lg">
            <span className="font-bold">Review:</span> {review}
          </p>
          <p className="flex gap-5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-green-400 font-medium px-3 py-2 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </p>
          <div className="divider my-1"></div>
          <div className="flex items-center gap-5">
            <p className="w-1/4 mb-1">Number of Pages: </p>
            <p className="w-3/4 font-bold">{totalPages}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="w-1/4 mb-1">Publisher: </p>
            <p className="w-3/4 font-bold">{publisher}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="w-1/4 mb-1">Year of Publishing: </p>
            <p className="w-3/4 font-bold">{yearOfPublishing}</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="w-1/4 mb-1">Rating: </p>
            <p className="w-3/4 font-bold">{rating}</p>
          </div>
          <div className="flex gap-5">
          <button className="btn btn-active btn-neutral">Neutral</button>
            <button className="btn btn-accent">Accent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
