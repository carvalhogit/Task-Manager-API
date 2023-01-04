const {resolve} = require('path');
require('dotenv').config({ path: resolve(__dirname, '../.env') });
const connectToDatabase = require('./database/connect');

connectToDatabase();

require('./modules/express');