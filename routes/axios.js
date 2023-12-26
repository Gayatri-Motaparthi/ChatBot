const axios = require('axios');

async function getChatResponse(prompt) {
    try {
        const response = await axios.post('http://127.0.0.1:5000', { question: prompt });
        console.log(response);  // Access the response data
        return response;
    } catch (err) {
        console.error(err);
    }
}


module.exports = { getChatResponse };