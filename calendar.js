const oneDay = 86400000 //24 * 60 * 60 * 1000... hours*minutes*seconds*milliseconds


function calcDays (day0,day1){
    const diffDays = Math.round(Math.abs((day0.getTime() - day1.getTime()) / (oneDay)));
    
    console.log(`${day0} to ${day1}` )
    const message = (`Difference: ${diffDays} days`);
    
    return message;
}


const firstDate = new Date(1997, 10, 11, 12, 0, 0, 0); // 11th of october at noon your timezone
const secondDate = new Date(2022, 2, 1, 12, 0, 0, 0); // 3rd of june at noon
console.log(calcDays(firstDate,secondDate))