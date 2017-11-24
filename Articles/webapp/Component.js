sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"nytArticles/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("nytArticles.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' + 
			          '?'														 + 
			          'api-key=d3192fa8d79f4832a3469b619d5b9ddc'				 + 
			          '&'														 + 
			          'q=Neymar';
			
			// var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d3192fa8d79f4832a3469b619d5b9ddc&q=Neymar';
			
			// @typeof sap.ui.model.json.JSONModel
			var oModel = new JSONModel(url);
			this.setModel(oModel);
			
		}
	});
});