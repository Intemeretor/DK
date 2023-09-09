import { useState } from 'react';
import './App.scss';
import Head from './modules/Head/Head';
import About from './modules/About/About';
import Services from './modules/Services/Services';
import Prices from './modules/Prices/Prices';

function App() {


	return (

		<main className="wrapper">
			<Head />
			<About />
			<Services />
			<Prices />
		</main>
	)
}

export default App
