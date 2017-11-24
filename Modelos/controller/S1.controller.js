sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	return Controller.extend("modelo.demo.controller.S1", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf modelo.demo.view.S1
		 */
		//	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf modelo.demo.view.S1
		 */
		onBeforeRendering: function() {
			var oData = {};
			oData.nome = "Leonardo";
			oData.valor = 2;
			
			var oViewModel = new JSONModel(oData);
			
			// @type sap.ui.model.json.JSONModel
			//oViewModel.loadData(oViewModel);
			this.getView().setModel(oViewModel);
			window.xxx = oViewModel;
		},
		onPress: function() {
			var oViewModel = this.getView().getModel();
			oViewModel.setProperty("/nome", "obrigado");
		}
	});
});