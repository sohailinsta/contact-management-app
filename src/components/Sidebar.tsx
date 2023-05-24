import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    setIsPopupOpen((prevState) => !prevState);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className=" text-gray-500 focus:outline-none focus:text-gray-700">
      <button className="md:hidden" onClick={toggleMenu}>
        <svg
          className={`h-6 w-6 ${isMenuOpen || isPopupOpen ? "hidden" : "block"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2.25 4.75a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1h-14a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <svg
          className={`h-6 w-6 ${isMenuOpen || isPopupOpen ? "block" : "hidden"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M14.95 14.95a.5.5 0 0 1-.708 0L10 10.707l-4.243 4.243a.5.5 0 0 1-.708-.708L9.293 10 5.05 5.757a.5.5 0 0 1 .708-.708L10 9.293l4.243-4.243a.5.5 0 0 1 .708.708L10.707 10l4.243 4.243a.5.5 0 0 1 0 .708z"
          />
        </svg>
      </button>
      {isMenuOpen || isPopupOpen ? (
        <div className="md:flex md:flex-col md:items-center">
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <Link to="/" className="my-2 mx-2">
                <button
                  onClick={closePopup}
                  className="bg-blue-500 hover:bg-blue-600 mb-2 md:0 text-white font-semibold py-2 px-4 rounded"
                >
                  Home
                </button>
              </Link>
              <Link to="/chart" className="my-2 mx-2">
                <button
                  onClick={closePopup}
                  className="bg-blue-500 hover:bg-blue-600 mb-2 md:0 text-white font-semibold py-2 px-4 rounded"
                >
                  Chart
                </button>
              </Link>
              <Link to="/map" className="my-2 mx-2">
                <button
                  onClick={closePopup}
                  className="bg-blue-500 hover:bg-blue-600 mb-2 md:0 text-white font-semibold py-2 px-4 rounded"
                >
                  Map
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      {/* Render the additional div only for devices larger than "md" */}
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center">
        <div className="bg-white flex flex-col justify-center items-center p-4 rounded shadow-lg">
          <Link to="/" className="my-2">
            <button className="bg-blue-500 hover:bg-blue-600 mb-2 md:0 text-white font-semibold py-2 px-4 rounded">
              Home
            </button>
          </Link>
          <Link to="/chart" className="my-2">
            <button className="bg-blue-500 hover:bg-blue-600 mb-2 md:0 text-white font-semibold py-2 px-4 rounded">
              Chart
            </button>
          </Link>
          <Link to="/map" className="my-2">
            <button className="bg-blue-500 hover:bg-blue-600 mb-2 md:0 text-white font-semibold py-2 px-4 rounded">
              Map
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
