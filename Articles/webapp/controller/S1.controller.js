sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("nytArticles.controller.S1", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf nytArticles.view.S1
		 */ //	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf nytArticles.view.S1
		 */ //	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf nytArticles.view.S1
		 */ //	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf nytArticles.view.S1
		 */ //	onExit: function() {
		//
		//	}
		/**
		 *@memberOf nytArticles.controller.S1
		 */
		onSearch: function(oEvent) {
		
			var sTerm = oEvent.getParameters().query;
			
			var oModel = this.getOwnerComponent().getModel();
			
			var sUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
			
			oModel.loadData(sUrl, {
				"api-key": 'd3192fa8d79f4832a3469b619d5b9ddc',
				q: sTerm
			});
			
		}
	});
});