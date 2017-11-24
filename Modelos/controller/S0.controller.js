sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("modelo.demo.controller.S0", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf modelo.demo.view.S0
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf modelo.demo.view.S0
		 */
		onBeforeRendering: function() {

			// Binding do ComboBox

			// var aClientes = ["Monsanto", "Vale", "Bayer"];

			var oData = {
				clientes: [

					{
						Id: "100",
						Nome: "Monsanto"
					}, {
						Id: "200",
						Nome: "Vale"
					}, {
						Id: "300",
						Nome: "Bayer",
						habilitado: false
					}, {
						Id: "400",
						Nome: "Unilever"
					}

				]
			};

			var oModelClientes = new sap.ui.model.json.JSONModel(oData);
			
			this.getView().setModel(oModelClientes);
			
			// @type sap.m.List
			var oList = this.byId("lista_clientes");
			oList.bindItems({
				
				path: '/clientes',
				template: new sap.m.StandardListItem({
					
					title: '{Id} - {Nome}'
					
				})
				
			}); // Fim do oList.bindItems
			
			// oList.bindAggregation('items', {});
			
			// @type sap.m.Input
			var oInput = this.byId("input_cliente");
			
			oInput.bindValue({
				
				path: '/clientes/2/Nome'
				
			});
			
			oInput.bindProperty("enabled", {
				
				path: '/clientes/2/habilitado'
				
			});

			// @type sap.m.ComboBox
			// var oComboBox = this.byId("comboBox_clientes");
			// oComboBox.setModel(oModelClientes);

			// // @type sap.m.List
			// var oList = this.byId("lista_clientes");
			// oList.setModel(oModelClientes);

			// // @type sap.m.Input
			// var oInput = this.byId("input_cliente");
			// oInput.setModel(oModelClientes);
		}

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf modelo.demo.view.S0
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf modelo.demo.view.S0
		 */
		//	onExit: function() {
		//
		//	}

	});

});