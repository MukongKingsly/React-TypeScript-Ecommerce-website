import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ProjectsIcon,
  ContactIcon,
  BackArrow,
  MenuHamburger,
} from "../icons/Icons";
import "./menu.scss";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface ClickEvent extends MouseEvent {
  target: EventTarget & HTMLElement;
}

export const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      name: "Home",
      href: "/",
      icon: (
        <HomeIcon className={location.pathname === "/" ? "active-icon" : ""} />
      ),
    },
    {
      name: "Store",
      href: "/store",
      icon: (
        <ProjectsIcon
          className={location.pathname === "/store" ? "active-icon" : ""}
        />
      ),
    },
    {
      name: "Contact",
      href: "/contact",
      icon: (
        <ContactIcon
          className={location.pathname === "/contact" ? "active-icon" : ""}
        />
      ),
    },
  ];

  const handleClickOutside = (e: ClickEvent) => {
    if (!e.target.closest) return;

    const menuToggle = e.target.closest(".menu-toggle");
    if (menuToggle) return;

    setIsOpen(false);
  };

  const checkUrl = () => {
    const paths = ["/", "/contact", "/projects"];
    return paths.includes(location.pathname);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside as EventListener);

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside as EventListener
      );
    };
  }, []);

  const handleNavigate = (href: string) => {
    navigate(href);
  };

  return (
    <>
      <header id="mobile-header">
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          id="menu-button"
        >
          <MenuHamburger />
        </button>
        {!checkUrl() && (
          <button id="mobile-back-arrow-button" onClick={() => navigate(-1)}>
            <BackArrow />
          </button>
        )}
      </header>

      <nav className={`menu ${isOpen ? "open" : ""}`} id="mobileNavbar">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className={location.pathname === item.href ? "active-li" : ""}
            >
              {item.icon} {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
