import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "Web Dev",
    path: "/web-dev",
  },
  {
    title: "Cloud",
    path: "/cloud",
  },
  {
    title: "Algorithms",
    path: "/algos",
  },
  {
    title: "Brain Hacking",
    path: "/health",
  },
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Post Viewer",
    path: "/post",
  },
];

export default function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="site-navigation">
      <span className="menu-title">LA SALLE</span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link onClick={() => setMenuActive(false)} to={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-avatar-container">
          <Avatar
            src="https://images.unsplash.com/photo-1542727313-4f3e99aa2568?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            size={38}
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </div>
      </div>
      <i
        className="icon ionicons ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
