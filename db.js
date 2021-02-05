const { Client } = require('pg');
const db = process.env.NODE_ENV === 'test' ? 'verbdrillsapi_test' : 'verbdrillsapi';

let client = new Client({
    connectionString: `postgresql://localhost/${db}`
});

client.connect();

export default client; 