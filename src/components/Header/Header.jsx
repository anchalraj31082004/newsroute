import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Header() {
  const bookmark = useSelector((state) => state.list);

  return (
    <header className="flex flex-col lg:flex-col-reverse justify-between">
      <nav className="flex bg-teal-900/50 rounded-lg backdrop-filter backdrop-blur-md lg:flex-col lg:justify-start lg:items-center py-2 px-5 lg:my-32 text-white shadow-2xl shadow-black">
        <div className="flex gap-10 overflow-x-auto no-scroll text-sm lg:text-xl lg:px-16 lg:py-10 lg:flex-col">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            Everything
          </NavLink>{" "}
          <NavLink
            to="/filtered-news/sports"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            Sports
          </NavLink>
          <NavLink
            to="/filtered-news/entertainment"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            Entertainment
          </NavLink>
          <NavLink
            to="/filtered-news/business"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            Business
          </NavLink>
          <NavLink
            to="/filtered-news/technology"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            Technology
          </NavLink>
          <NavLink
            to="/filtered-news/general"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            General
          </NavLink>
          <NavLink
            to="/filtered-news/science"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            Science
          </NavLink>
          <NavLink
            to="/filtered-news/health"
            className={({ isActive }) =>
              isActive ? "flex-shrink-0 text-orange-500" : "flex-shrink-0"
            }
          >
            Health
          </NavLink>
        </div>
      </nav>
      <div className="flex relative items-center justify-between w-full px-5 py-2">
        <Link to={"/"} className=" text-2xl cursor-pointer text-orange-600 block">News Route</Link>
        <div>
          {bookmark.length > 0 ? (
            <NavLink to="/bookmark" className={({ isActive }) =>
            isActive ? "flex-shrink-0 text-green-400" : " text-white flex-shrink-0"
          }>
              <FaBookBookmark className="text-lg"/>
            </NavLink>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
