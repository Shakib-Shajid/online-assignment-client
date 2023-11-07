import { NavLink, Link } from "react-router-dom"
import userPic from '../../../public/userPic.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log("user:", user.email)



    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addCoffee">Add Assignment</NavLink></li>
        <li><NavLink to="/cart">My Assignment</NavLink></li>
        <li><Link to="/bookings">My Bookings</Link></li>

        <li><NavLink to="/login">Login</NavLink></li>
        {/* <li><NavLink to ="/gallery">Gallery</NavLink></li> */}


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-sm  md:text-xl lg:text-2xl font-bold">Online Group</a>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="icecone.jpg" />
                    </div>
                </label>

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                    <div className="w-10 rounded-full">
                        {/* <img src={userDefaultpic} /> */}
                        {/* <img src='food.jpg' alt="no image" /> */}
                    </div>
                </label>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <div className="flex justify-evenly items-center">
                        <span>{user.displayName} </span>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <button onClick={handleSignOut} className="btn">Sign out</button>
                    </div>

                        :
                        <div className="flex items-center gap-4">
                            <div className="w-10 rounded-full">
                                <img src={userPic} />
                            </div>
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;