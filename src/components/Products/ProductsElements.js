import styled from "styled-components";

export const ProductsContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #908178;
`;

export const ProductsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;

export const ProductCard = styled.div`
	margin: 0 2rem;
	line-height: 2;
	width: 300px;
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 25px;
	color: black;
	margin-bottom: 2rem;

	&:hover {
		transform: scale(1.04);
	}
`;

export const ProductImg = styled.img`
	height: 50%;
	width: 50%;
	margin-top: 1rem;
`;

export const ProductsHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
	color: white;
`;

export const ProductTitle = styled.h2`
	font-weight: 400;
	font-size: 1.5rem;
	color: #3e281c;
`;
export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`;

export const ProductPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 1.5rem;
	color: #e31837;
`;
export const ProductButton = styled.button`
	font-size: 1rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-in-out;
	border-radius: 20px;

	&:hover {
		background: #eb534c;
		transition: 0.2s ease-in-out;
		cursor: pointer;
		color: #000;
	}

	&:focus {
		outline: none;
	}
`;
