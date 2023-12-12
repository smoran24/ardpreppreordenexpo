/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AR_DP_REP_PREORDENCREACION_EXPO/AR_DP_REP_PREORDENCREACION_EXPO/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});