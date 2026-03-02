import { useEffect, useRef } from "react";
import gsap from "gsap";
import { navLinks } from "../constants";

const Navbar = ({ loading }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (loading) {
      // Keep navbar hidden initially
      gsap.set(navRef.current, { y: -60, opacity: 0 });
    } else {
      // Animate it in smoothly
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [loading]);

  return (
    <header ref={navRef}>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul className="flex gap-8">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
