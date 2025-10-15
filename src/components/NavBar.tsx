import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    return (
        <nav className="relative bg-transparent navy-blue py-2 flex items-center justify-between w-full h-15">
            <div className="h-full w-32">
                <a href="#" className="h-full w-full">
                    <img src="src/assets/britonePaintsLogo.png" alt="Britone Paints" />
                </a>
            </div>
            <ul className="flex space-x-6 item-center justify-center">
                <li className="flex-content">
                    <a href="#home" className="nav-btn btn-hover transition">Home</a>
                </li>
                <li className="relative group">
                    <button className="flex items-center nav-btn btn-hover transition">
                    About Us
                    <IoIosArrowDown className="navy-blue ml-1 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown items */}
                    <div className="absolute left-0 mt-0.5 w-40 bg-white rounded-md shadow-lg transition-opacity duration-100 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <ul>
                        <li className="px-4 py-2 nav-btn btn-hover hover:rounded-md">
                            <a href="#who-we-are">Who We Are</a>
                        </li>
                        <li className="px-4 py-2 nav-btn btn-hover hover:rounded-md transition">
                            <a href="#our-mission">Our Mission</a>
                        </li>
                        <li className="px-4 py-2 nav-btn btn-hover hover:rounded-md transition">
                            <a href="#our-vision">Our Vision</a>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="flex-content">
                    <a href="#products" className="nav-btn btn-hover transition">Products</a>
                </li>
                <li className="flex-content">
                    <a href="#blog" className="nav-btn btn-hover transition">Blog</a>
                </li>
                <li className="flex-content">
                    <a href="#contact-us" className="nav-btn btn-hover transition">Contact-Us</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;