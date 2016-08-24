import {Component, ViewChild} from '@angular/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod, HTTP_PROVIDERS} from '@angular/http';
import {Platform, ionicBootstrap, Nav, MenuController} from 'ionic-angular';

import {Service} from './service'

import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {HomePage} from './pages/home/home';
import {AboutPage} from './pages/about/about';
import {ContactPage} from './pages/contact/contact';

@Component({
  templateUrl: 'build/app.html',
  providers: [Service]
})
class MyApp {
	@ViewChild(Nav) nav: Nav;
	
	rootPage: any;
	pages: Array<{title: string, component: any}>;
	
	constructor(public platform: Platform, public menuCtrl: MenuController){
		this.initializeApp();
		this.rootPage = HomePage;
		this.pages = [
			{title: 'Home', component: HomePage},
			{title: 'About', component: AboutPage},
			{title: 'Contact', component: ContactPage}
		]
	}
	
	initializeApp() {
		this.platform.ready().then(() => {
		  // Okay, so the platform is ready and our plugins are available.
		  // Here you can do any higher level native things you might need.
		  StatusBar.styleDefault();
		});
	}
	
	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menuCtrl.close();
		// navigate to the new page if it is not the current page
		this.nav.setRoot(page.component);
	}
}

ionicBootstrap(MyApp, [HTTP_PROVIDERS]);
