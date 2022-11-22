import NavbarComponent from "./NavBar";
import CartWidget from "./CartWidget";

export const Layout = ({ children }) => {
return (
    <main>
    <NavbarComponent>
        <CartWidget/>
    </NavbarComponent>
    {children}
    </main>
);
};