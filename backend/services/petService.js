const axios = require('axios');

exports.fetchPets = async () => {
    const API_URL = 'https://api.petfinder.com/v2/animals';
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${process.env.PET_FINDER_API_KEY}` }
    });
    return response.data.animals;
};