const moment = require.requireActual('moment');

module.exports= (timestamp = 0) => {
    return moment(timestamp);
};