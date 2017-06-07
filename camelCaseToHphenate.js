// myButton To: my-button
function camelCaseToHphenate (str) {
    var UpCaseArr = str.match(/[A-Z]/g) || []
    var result = str
    UpCaseArr.forEach(function (item) {
        var low = item.toLowerCase()
        result = result.replace(item, `-` + low )
    })
    return result
}