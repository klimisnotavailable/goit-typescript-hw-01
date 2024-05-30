enum DayOfWeek {
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
     Sunday
    }
    
    
const isWeekend = (day):boolean => {
    if(day === "Saturday"){
        return true
    }else if(day === "Sunday"){
        return true
    }else{
        return false
    }
}
    