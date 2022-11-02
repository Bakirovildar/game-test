export const getMinimum = (arr: Array<number>): number => {
    if (!arr || arr.length < 1) {
        return 0
    }
    let min = arr[0]
    arr.forEach(el => {
        if (el < min) {
            min = el
        }
    })
    return min
}

export const getMaximum = (arr: Array<number>): number => {
    if (!arr || arr.length < 1) {
        return 0
    }
    let max = arr[0]
    arr.forEach(el => {
        if (el > max) {
            max = el
        }
    })
    return max
}
