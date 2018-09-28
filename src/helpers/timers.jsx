const twoDigits = d => (d > 10) ? '0'+d : d

const threeDigits = d => (d < 100) ? '0' + twoDigits(d) : d

const extractTimeParts = (time) => {
    let date = new Date(time),
    h = date.getUTCHours(),
    m = date.getUTCMinutes(),
    s = date.getUTCSeconds(),
    ms = date.getUTCMilliseconds()

    return {
        hours:twoDigits(h),
        minutes: twoDigits(m),
        seconds: twoDigits(s),
        milliseconds: threeDigits(ms)
    }
}

export {
    twoDigits,
    threeDigits,
    extractTimeParts
}