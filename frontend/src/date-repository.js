// date manipulation utilities

export const formatDate = (dateToParse) => {
    const dateObj = new Date(dateToParse)
    const year = dateObj.getFullYear();
    const date = dateObj.getDate();
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    const monthName = months[dateObj.getMonth()]
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const dayName = days[dateObj.getDay()]
    return `${dayName}, ${monthName} ${date}, ${year}`
}

export const findDuration = (date1, date2) => {
    const earlierDate = Date.parse(date1);
    const laterDate = Date.parse(date2);

    return Math.ceil(( laterDate - earlierDate ) / (60*60*24*1000))
}