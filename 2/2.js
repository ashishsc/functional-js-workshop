// Higher Order Functions

module.exports = function(operation, num) {
    'use strict';
    var i;
    for (i = 0; i < num; i++){
        operation();
    }

};
