const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 md:min-h-screen my-5 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-2/4 "
            src="https://iili.io/2nkXbUB.png"
          />
          <div>
            <h1 className="md:text-5xl text-xl font-bold">Books to freshen up your bookshelf</h1>
            <button className="btn bg-green-500 text-gray-800 mt-5">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
