const removeFromArray = function(array, ...toDelete) { 

    // [1, 2, 3, 4], 3, 2

    for (i = 0; i < array.length; i++) {

        for (j = 0; j < toDelete.length; j++) {
            if (array[i] === toDelete[j]) {
                array.splice(i, 1);
                i -= 1;
            }
        }
    }

    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
