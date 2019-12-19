const getSleepHours = day =>{
    day = day.toLowerCase();
    if (day === 'monday'){
        return Math.floor(Math.random()*10);
    } else if (day === 'tuesday'){
        return Math.floor(Math.random()*10);
    } else if (day === 'wednesday'){
        return Math.floor(Math.random()*10);
    } else if (day === 'thursday'){
        return Math.floor(Math.random()*10);
    } else if (day === 'friday'){
        return Math.floor(Math.random()*10);
    } else if (day === 'saturday'){
        return Math.floor(Math.random()*10);
    } else {
        return Math.floor(Math.random()*10);
    }
};

// console.log(getSleepHours('thursday'));

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

// console.log(getActualSleepHours());

const getIdealSleepHours = () =>{
    let idealHours = 8
    return idealHours * 7;
}

// console.log(getIdealSleepHours());

const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        console.log(actualSleepHours + ' weekly hours is a perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours){
        console.log(actualSleepHours + ' weekly hours of sleep , that is  more than needed');
    } else if(actualSleepHours < idealSleepHours) {
        console.log('User had ' + actualSleepHours + '  weekly hours of sleep , Get some rest');
    }
};


calculateSleepDebt();
