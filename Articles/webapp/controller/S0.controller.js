sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("nytArticles.controller.S0", {
		
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