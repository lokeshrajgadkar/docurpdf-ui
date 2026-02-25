import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState("Home");
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "corporate"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "corporate" ? "black" : "corporate");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = ["Features", "Pricing", "Support", "About"];

    return (
        <div
            className={`
        navbar px-4 md:px-8
        sticky top-0 z-50
        transition-all duration-300
        ${isScrolled
                    ? "bg-base-100/80 backdrop-blur-lg shadow-md"
                    : "bg-base-100"}
      `}
        >
            {/* LEFT */}
            <div className="navbar-start">
                <a className="btn btn-ghost text-lg md:text-xl font-bold text-primary">
                    DocUrPDF
                </a>
            </div>

            {/* CENTER MENU */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a
                                onClick={() => setActive(item)}
                                className={`
                  transition-all duration-200
                  ${active === item
                                        ? "text-primary font-semibold border-b-2 border-primary"
                                        : "hover:text-primary"}
                `}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="navbar-end gap-3">

                {/* THEME TOGGLE */}
                <ThemeToggle />

                {/* CTA */}
                <button className="btn btn-primary btn-sm md:btn-md rounded-full transition-all duration-300 hover:scale-105">
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Navbar;