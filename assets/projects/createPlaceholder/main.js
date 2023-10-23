var select = document.querySelector('select'),
    inputAll = document.querySelectorAll('input'),
    img = document.querySelector('img'),
    textArea = document.querySelector('textarea');
console.log(inputAll)
var urlObj = {}

const removeHashTag = (str) => {
    return str.replace("#", "")
}
const addPlus = (str) => {
    return str.split(" ").join("+")
}
const createImgPath = () => {
    console.log(inputAll)
    urlObj.size = select.value;
    urlObj.text = addPlus(inputAll[0].value);
    urlObj.bgColor = removeHashTag(inputAll[1].value)
    urlObj.textColor = removeHashTag(inputAll[2].value)

    var urlPath = `http://via.placeholder.com/${urlObj.size}/${urlObj.bgColor}/${urlObj.textColor}?text=${urlObj.text}`;

    img.src = urlPath;
    textArea.value = urlPath;

    // copy textarea value 
    textArea.focus();
    text.select();
    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            console.log('clipboard successfully set');
        })
        .catch(() => {
            console.error('clipboard write failed');
        });
}
inputAll.forEach((ele) => ele.addEventListener('change', createImgPath))
select.addEventListener('change', createImgPath);


var arr = ['mahesh', 'raju', 'akash', 'sawraj', 'nitin'];
// arr.pop()
// arr.unshift('vip')
for (var name of arr) {
    console.log(name.toLocaleUpperCase())
}
// arr.map((name)=> console.log(name))
// arr.forEach((name)=> console.log(name))
// for (var n = 0; n < arr.length; n++) {
//     console.log(arr[n].toLowerCase())
// }   
arr.splice(2,1, 'ram')
console.log(arr)