/**
 * Convert to Military Time:
 * 
 * Rules 
 * 12:00am -> 12pm is 00:00 -> 12:00
 * 12pm -> 12am is 12:00 --> 00:00
 * 
 * Tasks:
 * 1. Parse Hours, Mins, TOD
 * 2. Convert Hours
 * 
 * Main Points:
 * 1. Split into hours, min, tod. 
 * 2. Check if AM or PM
 * 3. 12AM you substract 12, 12PM you leave it alone and add 12 to rest
 */
let time = '09:03AM';
console.log(time.substring(5, 7));

function convertTime(time) {
    let hour = parseInt(time.substring(0, 2));
    let min = time.substring(3, 5);
    let tod = time.substring(5, 7);

    //Convert AM
    if (tod === 'AM') {
        if (hour === 12) {
            let newHour = time - 12;
            return newHour.toString() + min;
        }
        else {
            //Prefix the 0 before
            if (hour < 10) {
                return '0' + hour.toString() + min;
            }
            else {
                return hour.toString() + min;
            }
        }
    }
    //Convert PM
    else {
        if (hour === 12) {
            return hour.toString() + min;
        }
        else {
            let newHour = hour + 12;
            return newHour.toString() + '' + min;
        }
    }
}

console.log("convertTIme: ", convertTime(time));
