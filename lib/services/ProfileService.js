const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    const resp = await fetch(process.env.FUT_URL);
    const [{ quote }] = await resp.json();

    const profile = await Profile.insert({
      name,
      quote
    });
    return profile;
  }
};
