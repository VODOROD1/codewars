function sumIntervals(intervals) {
    let arr = removeOverlap(intervals).sort((a,b) => a - b)
    let newIntervals = formNewIntervals(arr)
    let result = 0
    newIntervals.forEach((elem,index) => {
      result += elem[elem.length-1] - elem[0]
    })
    return result
}

function formNewIntervals(arr) {
    let newIntervals = []
    newIntervals.push([arr[0]])
    for(let i=1; i<arr.length; i++) {
        if(arr[i] === arr[i-1]+1) {
            newIntervals[newIntervals.length-1].push(arr[i])
        } else {
            newIntervals.push([])
            newIntervals[newIntervals.length-1].push(arr[i])
        }
    }
  return newIntervals
}

function removeOverlap(intervals) {
    let resultArr = []
    resultArr.push(intervals[0][0])
    intervals.forEach((interval, index) => {
        for(let i=interval[0]; i<=interval[1]; i++) {
            let isPush = true
            for(let j=0; j<resultArr.length; j++) {
                if(resultArr[j] === i) {
                    isPush = false
                }
            }
            if(isPush) {
                resultArr.push(i)
            }
        }
    })
    return resultArr
}

var test1 = [[1,5],[3,8]];
var test2 = [[1,4],[7, 10],[3, 5]];

sumIntervals(test1)