// const random = Math.trunc(Math.random() * 100) + 1
// console.log(random)

today = new Date().getDay()
// console.log(today)

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for (const day in days) {
    if (day == today) {
        console.log(`Have a happy ${days[day]}`)
 }
}

const [Sun, Mon, ...others] = days 
console.log(Sun, Mon, others)