import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";
import axios from "axios";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  console.log(user, "from navbar");
 const handleLogout =async () => {
   try {
       await axios.post(BASE_URL + "/logout",{}, {withCredentials:true});
      dispatch(removeUser())
       navigate("/login")
   } catch (error) {
     console.log(error)
   }
 }
  return (
    <div className="navbar bg-neutral shadow-sm overflow-visible">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👨‍💻DevTinder</Link>
      </div>
      {user && (
        <div className="flex gap-2 items-center">
          <p className="text-white">Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end mx-5">
            {/* Avatar button */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            {/* Dropdown content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
