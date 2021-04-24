function twin (arr) {
    let obj = {}
    let result = []
    arr.sort()
    obj[`index${arr[0]}`] = [arr[0], 1]
    for (let i = 1; i < arr.length; i++) {
        for (let keys in obj) {
            if (arr[i] !== obj[keys][0]) {
               obj[`index${arr[i]}`] = [arr[i], 1]
            } else if (arr[i] === obj[keys][0]) {
                obj[keys][1] += 1
            } 
        }
    }
    for (let properties in obj) {
            if  (obj[properties][1] === 2) {
              result.push (obj[properties][0])
            }
    }
    return console.log (result)
}

twin([2, 3, 4, 2, 2, 3])