
// ---  Smallest Common Multiple --- 

function smallestCommons(arr) {
    //get the max and min number of the arr
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);

    var result = min;

    //calculate greatest common divisor (GDC)
    function gcd(a, b) {
        return (b == 0) ? a : gcd(b, a % b);
    }

    //calculate lowest common multiple (LCM)
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    for (var i = min; i < max; i++) {
        result = lcm(result, i + 1);
    }

    return result;
}


// --- Finders Keepers --- 
// looks through an array (first argument) and returns the first element in the array that passes a truth test (func).

function findElement(arr, func) {

    var filtered = arr.filter(func);
    return filtered[0];
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });


// --- Drop it! ---
//Drop the elements of an array, starting from the front, until the predicate (second argument) returns true.

function dropElements(arr, func) {
    // Drop them elements.


    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];

}

dropElements([1, 2, 3], function (n) { return n < 3; });


// -- Steamroller -- Flatten Array ---

function steamrollArray(arr) {

    resultedArray = [];

    function flatten(args) {
        if (!Array.isArray(args)) {
            console.log(args)
            resultedArray.push(args);
        } else {
            for (var i = 0; i < args.length; i++) {
                flatten(args[i]);
                console.log(args.length);
            }
        }
    }

    arr.forEach(flatten);

    return resultedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);