import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Feature";
import FeatureBurger from "./components/FeatureBurger";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import OurMenu from "./components/Menu";
import Products from "./components/Products";
import {
	productData,
	productData2,
	productData3,
} from "./components/Products/data";
import { GlobalStyle } from "./GlobalStyle";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Hero />
			<OurMenu />
			<Products
				heading="Choose your favorite Burger"
				data={productData3}
				id="burger"
			/>
			<FeatureBurger />
			<Products
				heading="Choose your favorite Pizza"
				data={productData}
				id="pizza"
			/>
			<Feature />
			<Products
				heading="Choose your favorite Dessert"
				data={productData2}
				id="desserts"
			/>
			<Footer />
		</Router>
	);
}

export default App;
