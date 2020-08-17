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
        if(notifications[value].message !== 'Sit'){
        notifications[value].read = false
        //console.log(value)
    }
    return countdown(value + 1);
    } 
};
countdown(0)

console.log(notifications)