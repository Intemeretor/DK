import { useState } from 'react';
import './App.scss';
import Header from './modules/Header/Header';
import About from './modules/About/About';
import Services from './modules/Services/Services';
import Prices from './modules/Prices/Prices';

function App() {


	return (

		<main className="wrapper">
			<Header />
			<About />
			<Services />
			<Prices />
		</main>
	)
}

export default App
