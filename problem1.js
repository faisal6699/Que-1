let allRead = true;

let notifications = [
{ message: 'Lorem', read: true},
{ message: 'Ipsum', read: true },
{ message: 'Dolor', read: true },
{ message: 'Sit', read: false },
{ message: 'Amet', read: true }
];

var countdown = function(value) {
    if (value < 5) {
        notifications[value].allRead = false
    return countdown(value + 1);
    } 
};
countdown(0)

console.log(notifications)