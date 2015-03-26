angular.module('starter.controllers', [])
.controller("BarcodeController", function($scope, $cordovaBarcodeScanner) {
	console.log('ctrl');
	this.password = '';
	this.login = '';
	this.cardNumber = '';
	var me = this;
    this.scanBarcode = function(callback) {
		
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            me.cardNumber = imageData.text;
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
			if (callback != null) callback(true, imageData.text);
        }, function(error) {
            console.log("An error happened -> " + error);
			if (callback != null) callback(false, error);
        });
    };
	
	this.verifyCard = function() {
		console.log('verifying');
		
		var cont = function() {
			alert('num is ' + me.cardNumber);
		};
		
		if (this.cardNumber == null || this.cardNumber == '') {
			scanBarcode(function(s, r) {
				if (!s) {
					alert('error');
					return;
				};
				me.cardNumber = r;
				cont();
			});
		} else {
			cont();
		};
		
		
	};
});
