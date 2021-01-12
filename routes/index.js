'use strict';
var express = require('express');
var router = express.Router();
var request = require("request");
var cryptico = require('cryptico');
var app = require('../app');
var commonLib = require('../lib/commonLib');
const coinHelper = require('../lib/coinHelper');
var sqlHelper = require('../lib/mssql-helper');
// logger setup
var Logger = require('../lib/logger');
const procedureNamse = require('../lib/procedure-info').procedureNames
var logger = Logger('routes/index');
var lang = require('../config/lang');
var fs = require('fs')
// csrf setup
var countryCode = require('../config/countryCodeFormat.json');
var procision = require('../config/procision.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  // if(req.session.userInfo['LOGIN']){
  //   res.render('index');
  //   return
  // }
  var num = req.query.lang;
  if (num != undefined) {
    req.session.num = num;
  }
  res.render('signin');
});
router.get('/referralchart', function(req, res, next) {
  res.render('referralchart', {
    TYPE: req.query.type
  });
});
router.get('/wallethistory', function(req, res, next) {
  res.render('wallethistory', {
    TYPE: req.query.type
  });
});
router.get('/api/getOrgData', async function(req, res, next) {
  var nodes = []
  var orgData = await sqlHelper.callProcedure('SP_ORG_CHART', {
    //D_UID: 'EOS'
    D_UID: req.query.uid
    // D_LEVEL: req.query.lev,
    // D_STEP: req.query.step
  });
  var result = orgData.recordset
  for (var name in result) {
    if (isNaN(result[name].CONTRY * 1) || result[name].CONTRY == null || result[name].CONTRY == 0) {
      result[name]["img"] = 'https://www.countryflags.io/KR/shiny/64.png'
    } else {
      result[name]["img"] = 'https://www.countryflags.io/' + countryCode[result[name].CONTRY].alpha2Code + '/shiny/64.png'
    }
    result[name]['jic'] = ''
    result[name]['tags'] = [result[name].JICODE]
    nodes.push(result[name])
  }
  res.json(nodes)
});
router.get('*', function(req, res, next) {
  var urlName = (req.url).replace('/', '')
  var PageTItle = "Cowit"
  if (urlName.indexOf('signup') != -1) {
    var R_UID = (req.query.recId) ? req.query.recId : ""
    var LINE = (req.query.line) ? req.query.line : ""
    res.render('signup', {
      R_UID: R_UID,
      LINE: LINE
    });
    return
  } else if (urlName.indexOf('forgot') != -1) {

    res.render('forgot');
    return
  } else if (urlName.indexOf('findPwdChange') != -1) {
    var PW_KEY = (req.query.PW_KEY) ? req.query.PW_KEY : ""
    res.render('passchange', {
      PW_KEY: PW_KEY
    });
    return
  }
  switch (urlName) {
    case "farmer":
      PageTItle = "Farmer"
      break;
    case "list":
      PageTItle = "판매/구매 내역"
      break;
    case "depositlist":
      PageTItle = "입금내역"
      break;
    case "withdrawallist":
      PageTItle = "출금내역"
      break;
  }
  if (req.session.userInfo == undefined) {
    res.render('signin')
    return
  }
  res.render(urlName, {
    PAGETITLE: PageTItle
  });
});
module.exports = router;
