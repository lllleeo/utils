// 获取某个范围内某个数字整数倍的数字
//  1~100 内 7 的倍数的数字

function retMultOfNum-1(min, max, num) {
    for (var i=min; i<max; i++) {
        (i % num === 0 && i !== 0) && console.log(i)
    }
}

function retMultOfNum-2(min, max, num) {
    min % num === 0 && console.log(num)
    var i = 1
    var res = min
    while (res < max) {
        console.log(i++)
        if (res % num === 0 && res !== 0) {
            console.log(res)
            res +=7
        } else {
            res++
        }
    }
}