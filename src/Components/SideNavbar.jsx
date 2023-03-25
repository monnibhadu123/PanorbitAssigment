import { Link, useLocation } from "react-router-dom";
import React from "react";

// Define a functional component called SideNavbar
const SideNavbar = () => {
  const activeLink = useLocation();
  const dataArr = JSON.parse(localStorage.getItem("userData"));

  const getIndicator = (path, color, marginTop) => {
    return activeLink.pathname === path && (
      <div style={{ marginTop }} className="indicator">
        <style>
          {`
            .indicator::before {
              background-color: ${color};
            }
            .indicator::after {
              background-color: ${color};
            }
          `}
        </style>
      </div>
    );
  };

  // Render the side navigation bar with the appropriate links and indicators
  return (
    <nav className="p-8">
      <div className="bg-gradient-to-b from-indigo-500 to-purple-800 p-8 h-[45rem] rounded-3xl">
        <div className="text-left py-44 leading-[4rem] font-semibold">
          <ul>
           
            <li>
              <Link
                to={`/profile/${dataArr.id}`}
                className={`${activeLink.pathname === `/profile/${dataArr.id}`
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Profile
              </Link>
            </li>
            <hr />
            {/* Render the posts link with the appropriate text color */}
            <li>
              <Link
                to="/profile/posts"
                className={`${activeLink.pathname === "/profile/posts"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Posts
              </Link>
            </li>
            <hr />
            {/* Render the gallery link with the appropriate text color */}
            <li>
              <Link
                to="/profile/gallery"
                className={`${activeLink.pathname === "/profile/gallery"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                Gallery
              </Link>
            </li>
            <hr />
            {/* Render the to-do link with the appropriate text color */}
            <li>
              <Link
                to="/profile/todo"
                className={`${activeLink.pathname === "/profile/todo"
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                ToDo
              </Link>
              <hr />
            </li>
            {/* Render the indicators for the posts, to-do, profile, and gallery links */}
            {getIndicator("/profile/posts", "#664bd5", "-11rem")}
            {getIndicator("/profile/todo", "#6740c9", "-3rem")}
            {getIndicator(`/profile/${dataArr.id}`, "#6652db", "-15rem")}
            {getIndicator("/profile/gallery", "#6646cf", "-7rem")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
