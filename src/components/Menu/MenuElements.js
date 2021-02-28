import styled from "styled-components";
import { Link } from "react-scroll";
import { GiFullPizza, GiHamburger, GiCakeSlice } from "react-icons/gi";

export const OurMenu = styled.div`
	width: 100%;
	height: 40vh;
	background-color: #908178;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 80%;
`;

export const HeadingText = styled.h1`
	font-size: 2rem;
	color: white;
	margin: 1rem 0;
`;

export const OurMenuLink = styled(Link)`
	width: 30%;
	height: 60%;
	text-decoration: none;
	list-style: none;
	transition: 1.2s ease-in-out;
`;

export const MenuBox = styled.div`
	height: 100%;
	width: 100%;
	border: 1px solid #eb534c;
	background-color: #eb534c;
	border-radius: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;

	&:hover {
		transform: scale(1.1)
	}
	
`;

export const Icon = styled(GiFullPizza)`
	color: #eb534c;
	background-color: white;
	height: 60%;
	width: 25%;
	border-radius: 20%;
`;
export const Icon2 = styled(GiHamburger)`
	color: #eb534c;
	background-color: white;
	height: 60%;
	width: 25%;
	border-radius: 20%;
`;
export const Icon3 = styled(GiCakeSlice)`
	color: #eb534c;
	background-color: white;
	height: 60%;
	width: 25%;
	border-radius: 20%;
`;

export const Text = styled.h2`
	font-size: clamp(2rem,2.5vw,3rem);
	color: white;
`;
