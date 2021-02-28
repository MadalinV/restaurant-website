import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarBtnWrapper,
	SidebarLink,
	SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to="burger" smooth={true}>Burgers</SidebarLink>
				<SidebarLink to="pizza" smooth={true}>Pizza</SidebarLink>
				<SidebarLink to="desserts" smooth={true}>Dessert</SidebarLink>
				<SidebarBtnWrapper>
					<SidebarRoute to="/">Order Now</SidebarRoute>
				</SidebarBtnWrapper>
			</SidebarMenu>
		</SidebarContainer>
	);
}

export default Sidebar;
