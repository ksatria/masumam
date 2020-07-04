export function getAge(dob){
    let DOB = new Date(dob);
    let diff = Date.now() - DOB.getTime();
    let age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
}

export function getDOB(dob){
    let months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    let dobObj = new Date(dob);

    let date = dobObj.getDate();
    let month = months[dobObj.getMonth()];
    let year = dobObj.getFullYear();

    return `${date} ${month} ${year}`;
}