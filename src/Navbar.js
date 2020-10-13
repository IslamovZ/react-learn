import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

return (
<nav className="navbar">
<ul className="nav-list">
<li className="nav-item">
<NavLink
className="nav-link"
activeClassName="active-nav-link"
to="/"
exact
>
Catalog
</NavLink>
</li>
<li className="nav-item">
<NavLink
className="nav-link"
activeClassName="active-nav-link"
to="/cart"
>
Cart
</NavLink>
</li>
</ul>
</nav>
);
};