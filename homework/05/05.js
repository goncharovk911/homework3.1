/*var day = 'Tuesday',
/*if (day === 'Saturday'||day === 'Sunday') {

}else if (day ==='Monday'||day ==='Tuesday'||day ==='Wednesday'||day ==='Thursday'||day ==='Friday') { console.log('НА РАБОТУ ПОШЁЛ')}
*//*
work = day ==='Monday'||day ==='Tuesday'||day ==='Wednesday'||day ==='Thursday'||day ==='Friday' ?  'НА РАБОТУ ПОШЁЛ': ''
work = day === 'Saturday'||day === 'Sunday' ? '' : 'НА РАБОТУ ПОШЁЛ'
console.log(work)*/
let weekdays = ['monday', 'tuesday', 'wendey', 'thursday', 'friday']
let today = 'monday'
/*if (weekdays.includes(today)) {
	console.log('НА РАБОТУ')
}*/
weekdays.includes(today) ? console.log('НА РАБОТУ ПОШЁЛ') : '';