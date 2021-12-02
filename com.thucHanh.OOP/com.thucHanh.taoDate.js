class MyDate {
    day;
    month;
    year;

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    setDay(day) {
        this.day = day;
    }

    getMonth() {
        return this.month;
    }

    setMonth(month) {
        this.month = month;
    }

    getYear() {
        return this.year;
    }

    setYear(year) {
        this.year = year;
    }

    myDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    toStringDate() {
        return this.day + "/" + this.month + "/" + this.year;
    }
}

let date = new MyDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();

alert(`${day}/${month}/${year}`);

date.setDay(22);
date.setMonth(11);
date.setYear(2021);

console.log(date.day);
console.log(date.month);
console.log(date.year);

date.myDate(20,11,2021)
console.log(date.toStringDate())
