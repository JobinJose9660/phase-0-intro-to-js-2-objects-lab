const employee = {
    name : "Jobin",
    StreetAddress : "189 Littleton"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...obj}
    newEmployee[key]=value;
    return newEmployee
}
const employees = updateEmployeeWithKeyAndValue(employee,"sam","'11 Broadway'");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj;
}
const employeess = destructivelyUpdateEmployeeWithKeyAndValue(employee,"sam","12 Broadway");

function deleteFromEmployeeByKey(obj,key,value){
    const newEmployee = {...obj}
    newEmployee[key]=value;
    return newEmployee
}
const employeesss  = deleteFromEmployeeByKey(employee);

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
}
