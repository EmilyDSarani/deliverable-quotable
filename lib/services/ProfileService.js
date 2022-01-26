require('dotenv').config();
const fetch = require('cross-fetch');
const Profile = require('../models/Profile');
const KEY = process.env.FUT_URL;

module.exports = class ProfileService {
  static async create({ name }) {
    const resp = await fetch(KEY);
    const [{ quote }] = await resp.json();

    const profile = await Profile.insert({
      name,
      quote
    });
    return profile;
  }
};
