import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

function FeatureBurger() {
	return (
		<FeatureContainer>
			<h1>Burger of the Day</h1>
			<p>Buy the Classic Burger today and you have 20% discount</p>
			<FeatureButton>Order Now</FeatureButton>
		</FeatureContainer>
	);
}

export default FeatureBurger;
