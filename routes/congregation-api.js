var db = require('../models/modelprovider.js'),
	async = require('async'),
	_ = require('underscore');

exports.getCongregationData = function (req, res) {
	var query = db.Congregation.findOne({'Congregation': req.CongregationNumber}).exec(function(err, ))
};

exports.updateCongregation = function (req, res) {
	
};

exports.updateFamily = function (req, res) {
	
};

exports.updateFamilyMember = function (req, res) {
	
};

exports.updateEvacuationLocation = function (req, res) {
	
};

exports.updateGroup = function (req, res) {
	
};


exports.addFamily = function (req, res) {
	
};

exports.addFamilyMember = function (req, res) {
	
};

exports.addEvacuationLocation = function (req, res) {
	
};

exports.addGroup = function (req, res) {
	
};

