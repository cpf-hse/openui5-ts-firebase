/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import { initializeApp, getAuth } from "wcintegration/lib/firebase";
import { email, string, endsWith } from "valibot";

/**
 * @namespace com.hse.wcintegration.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;

	public sayHello(): void {
		MessageBox.show("Hello World!");
		const emailSchema = string([email(), endsWith("@hse.com")]);
		console.log(emailSchema);
	}

	public onInit(): void {
		const firebaseConfig = {
			apiKey: "AIzaSyCy1d13pYC79sOgUZnn4-sJ5VM9QY6TjqM",
			authDomain: "github-followers-281ea.firebaseapp.com",
			projectId: "github-followers-281ea",
			storageBucket: "github-followers-281ea.appspot.com",
			messagingSenderId: "576057379323",
			appId: "1:576057379323:web:4fb59feea548cdefa1235e",
		};

		// Initialize Firebase
		const app = initializeApp(firebaseConfig);

		// // // Initialize Firebase Authentication and get a reference to the service
		const auth = getAuth(app);
		console.log(auth);
	}
}
