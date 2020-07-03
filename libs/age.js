export function getAge(dob){
    let DOB = new Date(dob);
    let diff = Date.now() - DOB.getTime();
    let age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
}