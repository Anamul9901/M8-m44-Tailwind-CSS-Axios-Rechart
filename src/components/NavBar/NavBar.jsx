import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home Route", path: "/home" },
        { id: 2, name: "About Route", path: "/about" },
        { id: 3, name: "Services Route", path: "/services" },
        { id: 4, name: "Contact Route", path: "/contact" },
        { id: 5, name: "Products Route", path: "/products" }
    ]


    return (
        <nav>
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            {
                    open === true ? <AiOutlineMenu className=" "></AiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
                }
            
            </div>
            <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;