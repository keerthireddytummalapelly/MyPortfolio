import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "#home" },
  { name: "education", path: "#education" },
  { name: "experience", path: "#experience" },
  { name: "projects", path: "#projects" },
  { name: "contact", path: "#contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setIsOpen(false);
    setActiveSection(path.replace("#", ""));
    const sectionId = path.replace("#", "");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = links.map((link) => link.path.replace("#", ""));
      let active = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop - sectionHeight / 2 &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            active = sectionId;
          }
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full py-8 xl:py-12 bg-background text-white z-50">
      <div className="container flex justify-between items-center xl:px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/assets/Logo.png"
            alt="Logo"
            className="w-[40px] h-auto object-cover"
          />
          <span className="text-white text-[32px] font-bold hover:text-primary transition-all">
            KEERTHI
          </span>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.path)}
              className={`${
                activeSection === link.path.replace("#", "")
                  ? "text-primary border-b-2 border-primary"
                  : ""
              } capitalize font-medium hover:text-primary transition-all`}
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="xl:hidden">
          <button
            onClick={toggleSidebar}
            className="flex justify-center items-center"
          >
            <CiMenuBurger className="text-2xl text-accent" />
          </button>
          {isOpen && (
            <div
              onClick={toggleSidebar}
              className="fixed inset-0 z-40 bg-black/80"
            />
          )}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-background flex flex-col items-center p-4 z-50"
          >
            <button onClick={toggleSidebar} className="absolute top-4 right-4">
              <MdOutlineClose className="text-[32px] text-primary" />
            </button>
            <nav className="flex flex-col gap-8 mt-16 items-center">
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.path)}
                  className={`${
                    activeSection === link.path.replace("#", "")
                      ? "text-primary border-b-2 border-primary"
                      : ""
                  } text-xl capitalize hover:text-primary transition-all`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
