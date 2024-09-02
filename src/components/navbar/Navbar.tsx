import {Profile} from '../'
import {CartModal} from '../../pages'
import { Link, Outlet } from "react-router-dom"



function Navbar() {
  return (
    <div className="flex flex-col p-8">
      {/* Navbar content */}
      <div className="flex gap-10">
        {/* Amazon logo */}
        <Link to="/">
          <span className="">Amazon logo</span>
        </Link>

        {/* Search bar */}
        <div className="">
          <span className="">Search-bar</span>
        </div>

        {/* Cart Modal */}
        <CartModal />

        {/* Profile Modal */}
        <Profile />
      </div>

      {/* Display remaining components */}
      <Outlet />
    </div>
  );
}

export default Navbar