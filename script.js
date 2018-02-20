
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
