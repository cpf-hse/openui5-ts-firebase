import UIComponent from "sap/ui/core/UIComponent";
import { support } from "sap/ui/Device";
import models from "./model/models";
import { initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

/**
 * @namespace com.hse.wcintegration
 */
export default class Component extends UIComponent {
	public static metadata = {
		manifest: "json",
	};

	private contentDensityClass: string;

	public init(): void {
		// call the base component's init function
		super.init();

		this.setModel(models.createDeviceModel(), "device");

		// create the views based on the url/hash
		this.getRouter().initialize();

		const firebaseConfig: FirebaseOptions = {
			apiKey: "AIzaSyBtRIMLkSVfptH4ASinlEfnKhP-mBwUV24",
			authDomain: "react-register-12564.firebaseapp.com",
			projectId: "react-register-12564",
			storageBucket: "react-register-12564.appspot.com",
			messagingSenderId: "1074586181097",
			appId: "1:1074586181097:web:47236fd450006cd1fabf78",
			measurementId: "G-JSN76LC2EC",
		};

		const firebaseApp = initializeApp(firebaseConfig);
		const firebaseAuth = getAuth(firebaseApp);
	}

	/**
	 * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
	 * design mode class should be set, which influences the size appearance of some controls.
	 *
	 * @public
	 * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
	 */
	public getContentDensityClass(): string {
		if (this.contentDensityClass === undefined) {
			// check whether FLP has already set the content density class; do nothing in this case
			if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
				this.contentDensityClass = "";
			} else if (!support.touch) {
				// apply "compact" mode if touch is not supported
				this.contentDensityClass = "sapUiSizeCompact";
			} else {
				// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
				this.contentDensityClass = "sapUiSizeCozy";
			}
		}
		return this.contentDensityClass;
	}
}
