export default function LocalTimeFormat(utcTime) {
    const date = new Date(utcTime)
    const istTime = new Date(date.getTime() + 5.5 *60*60*1000)    //here add 5 and half hour to get the IST which is UTC+5.30

    const options = {
        timeZone:"Asia/Kolkata",
        year:"numeric",
        month:"short",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true,
    }
    
    const istTimeString = istTime.toLocaleString("en-US", options)
     return istTimeString

}

