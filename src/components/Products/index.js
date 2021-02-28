import React from "react";
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductTitle,
	ProductButton,
	ProductPrice,
} from "./ProductsElements";

function Products({ heading, data, id }) {
	return (
		<ProductsContainer id={id}>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<ProductCard key={index}>
							<ProductImg src={product.img} alt={product.alt} />
							<ProductInfo>
								<ProductTitle>{product.name}</ProductTitle>
								<ProductPrice>{product.price}</ProductPrice>
								<ProductButton>{product.button}</ProductButton>
							</ProductInfo>
						</ProductCard>
					);
				})}
			</ProductsWrapper>
		</ProductsContainer>
	);
}

export default Products;
