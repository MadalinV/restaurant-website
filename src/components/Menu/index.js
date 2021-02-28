import React from "react";

import {
	OurMenu,
	OurMenuLink,
	MenuBox,
	Icon,
	Icon2,
	Icon3,
	Text,
	HeadingText,
	Wrapper,
} from "./MenuElements";

const Menu = () => {
	return (
		<OurMenu>
			<HeadingText>Menu</HeadingText>
			<Wrapper>
				<OurMenuLink to="burger" smooth={true}>
					<MenuBox>
						<Icon2 />
						<Text>Burgers</Text>
					</MenuBox>
				</OurMenuLink>
				<OurMenuLink to="pizza" smooth={true}>
					<MenuBox>
						<Icon />
						<Text>Pizza</Text>
					</MenuBox>
				</OurMenuLink>
				<OurMenuLink to="desserts" smooth={true}>
					<MenuBox>
						<Icon3 />
						<Text>Desserts</Text>
					</MenuBox>
				</OurMenuLink>
			</Wrapper>
		</OurMenu>
	);
};

export default Menu;
