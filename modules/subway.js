const admin = require('../admin');
const blacklist = require('../blacklist');
const Discord = require('discord.js');
const config = require('../botsetting.json');
const client = require('../client').client;
const stringhandler = require('../stringhandler');
const request = require('request');

module.exports = {
