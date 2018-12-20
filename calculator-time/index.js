//------------------------------------------------------------------------------------------------------------------------------------------

const monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const daysName = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

//------------------------------------------------------------------------------------------------------------------------------------------

console.log("Calculator Date");

const ourDate = new Date();

console.log("Now I show you full date:", ourDate);

const timeCustom = {
    yearValue: dateObject => {
        return dateObject.getFullYear()
    },
    mounthNumberValue: dateObject => {
        return dateObject.getMonth()
    },
    mounthStringValue: dateObject => {
        const index = dateObject.getMonth()
        return monthsName[index]
    },
    dayVAlue: dateObject => {
        const index = dateObject.getDay()
        return daysName[index]
    }
}

console.log("this is our year:", timeCustom.yearValue(ourDate));
console.log("this is our mounth:", timeCustom.mounthNumberValue(ourDate));
console.log("this is our mounth in string:", timeCustom.mounthStringValue(ourDate));

console.log("this is our day:", timeCustom.dayVAlue(ourDate));


//------------------------------------------------------------------------------------------------------------------------------------------


/*

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]




console.log("Calculator: Time")

const time = {
    createDateObject: (customDate = null) => {
        if (customDate) {
            return new Date(customDate)
        } else {
            return new Date()
        }
    },
    dateNumber: dateObject => {
        return dateObject.getDate()
    },
    dayString: dateObject => {
        const index = dateObject.getDay() - 1
        return days[index]
    },
    monthNumber: dateObject => {
        return dateObject.getMonth() + 1
    },
    monthString: dateObject => {
        const index = dateObject.getMonth()
        return months[index]
    },
    yearNumber: dateObject => {
        return dateObject.getFullYear()
    },
    displayFull: dateObject => {
        const chosenDay = time.dayString(dateObject)
        const chosenDate = time.dateNumber(dateObject)
        const chosenMonth = time.monthString(dateObject)
        const chosenYear = time.yearNumber(dateObject)
        const chosenFull = `${chosenDay}, ${chosenDate} ${chosenMonth} ${chosenYear}`
        return chosenFull
    }
}

const TODAY = time.createDateObject()
const CUSTOM_DATE = time.createDateObject("10 January 2019")

console.log("Today:", TODAY)

const todayFull = time.displayFull(TODAY)
const customFull = time.displayFull(CUSTOM_DATE)

console.log(todayFull)
console.log(customFull)

*/