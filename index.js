// Your code here
function createEmployeeRecord(array){
    return new Object({
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents :[],
        timeOutEvents :[]
})

}



function createEmployeeRecords(arrays){
 let newArray =[]
 arrays.forEach(element => {
    newArray.push(createEmployeeRecord(element))
 });
 return newArray
}


function createTimeInEvent(recordObject, dates){
    let dateRecords= dates.split(" ")
  
    recordObject.timeInEvents.push(new Object({
      type : "TimeIn",
      date : dateRecords[0],
      hour : parseInt(dateRecords[1])
    }))
    return recordObject
}

function createTimeOutEvent(recordObject, datesOut){
    let dateRecords= datesOut.split(" ")
  
    recordObject.timeOutEvents.push(new Object({
      type : "TimeOut",
      date : dateRecords[0],
      hour : parseInt(dateRecords[1])
    }))
    return recordObject
}

function hoursWorkedOnDate (recordObject, param1){
    let hours = (recordObject.timeOutEvents[0].hour -recordObject.timeInEvents[0].hour)/100
    return hours
}



function wagesEarnedOnDate(recordObject,param1){
    let wages = hoursWorkedOnDate(recordObject, param1)*recordObject.payPerHour
    return wages

}

function allWagesFor(recordObject){
let i;
let hours = 0
for (i=0; i < recordObject.timeInEvents.length; i++){
 hours += (recordObject.timeOutEvents[i].hour - recordObject.timeInEvents[i].hour)/100
}

return hours *recordObject.payPerHour
}



function calculatePayroll(employees){
 let total = 0
 for (let employee of employees){
    console.log(employee)
    total += allWagesFor(employee)
 }
 return total 
}
console.log (calculatePayroll(employees))
