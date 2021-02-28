import styled from "styled-components";
import FeatureBurgerImg from "../../images/burger-bg.jpg";

export const FeatureContainer = styled.div`
	background: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 0.4)
		),
		url(${FeatureBurgerImg});
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;

	h1 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		font-size: clamp(2rem, 3vw, 3rem);
		margin-bottom: 1rem;
	}
`;

export const FeatureButton = styled.button`
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #ffc500;
	color: #000;
	transition: 0.2s ease-in-out;
	border-radius: 20px;

	&:hover {
		color: #fff;
		background: #e31837;
		transition: 0.2s ease-in-out;
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;
