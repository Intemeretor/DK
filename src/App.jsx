import { useState } from 'react';
import './App.scss';
import Head from './modules/Head/Head';
import About from './modules/About/About';
import Services from './modules/Services/Services';
import Prices from './modules/Prices/Prices';
import Team from './modules/Team/Team';
import Reviews from './modules/Reviews/Reviews';
import Consultation from './modules/Consultation/Consultation';
import Footer from './modules/Footer/Footer';


function App() {
	return (

		<main className="wrapper">
			<Head />
			<About />
			<Services />
			<Prices />
			<Team />
			<Reviews />
			<Consultation />
			<Footer />
		</main>
	)
}

export default App
