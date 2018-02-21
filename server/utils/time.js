const moment = require('moment');

const isDate =  (date) => {
    if (!isNaN(date)) {
        date = parseInt(date);
    }
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}


const timeStamp = (time) => {
    if (isDate(time)) {
        if (!isNaN(time)) {
            time = parseInt(time);
            var theDate = new Date(time * 1000);
        } else {
            var theDate = new Date(time);
            theDate = new Date(theDate.valueOf() - theDate.getTimezoneOffset() * 60000);
        }

        var unix = moment(theDate).unix();
        var natural = moment(theDate).format("MMMM D, YYYY");

        return { unix, natural }
    } else {
        return {
            "unix": null,
            "natural": null
        }

    }

};

module.exports = { timeStamp };

