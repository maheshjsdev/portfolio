// find min val and max val of array
var arr = [10, 15, 4, 6, 8, 3, 7, 45, 32];

function findMinVal(arr) {
    let min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min

}
var res = findMinVal(arr)
console.log(res);

let myObj = [
    { id: 1, name: 'mahesh', rollno: 1 },
    { id: 2, name: 'akash', rollno: 10 },
    { id: 3, name: 'ram', rollno: 18 },
    { id: 4, name: 'shyam', rollno: 34 },
    { id: 5, name: 'raju', rollno: 5 },
]

function findMaxVal(a) {
    let max = arr[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i].rollno > max) {
            max = a[i].rollno
        }
    }
    return max
}

var res = findMaxVal(myObj)
console.log(res)