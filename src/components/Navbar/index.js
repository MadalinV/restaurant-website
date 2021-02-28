import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavBarElements";

function Navbar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to="/">Restaurant</NavLink>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default Navbar;
