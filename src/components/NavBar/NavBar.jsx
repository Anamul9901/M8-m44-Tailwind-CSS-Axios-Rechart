import Link from "../Link/Link";

const NavBar = () => {

    const routes = [
        { id: 1, name: "Home Route", path: "/home" },
        { id: 2, name: "About Route", path: "/about" },
        { id: 3, name: "Services Route", path: "/services" },
        { id: 4, name: "Contact Route", path: "/contact" },
        { id: 5, name: "Products Route", path: "/products" }
    ]


    return (
        <nav>
            <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;