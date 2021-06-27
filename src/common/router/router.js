import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../../page/about';
import Beranda from "../../page/beranda";
import Portofolio from '../../page/portofolio';

export default function Router(){
	return(
		<Switch>
			<Route exact path="/" component={Beranda} />
			<Route path="/about" component={About} />
			<Route path="/portofolio" component={Portofolio} />
		</Switch>
	)
}