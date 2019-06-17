console.log('*******************Welcome To Do App*******************');
console.log('            You can create your events here.           ');
console.log('            1.To create a new event.           \n',
    '           2.To list all  events.          \n ',
    '          3.To modify a new event.          \n ',
    '          4.To delete a new event.           \n',


);
var event = []; 
var tempCheckMain ="Y";
main();
function main(){

    switchMenu();
    //console.clear();
    tempCheckMain = (prompt('Do you want to go to home sceen menu.\nEnter any character to goto homescreen.(y/n)')).toUpperCase();

if(tempCheckMain === "Y"){
    main();
}else{
    return;
};

};


function switchMenu() {    
var condition = prompt('Enter the step number you want to perform.(1,2,3,4) \n 1.To create a new event.\n 2.To list all  events.\n 3.To modify a new event. \n 4.To delete a new event.');
    switch (condition) {
        case "1":
            console.log('*********Add   Event  process*********');
            addEvent();
            break;
        case "2":
            console.log('*********List  Event  process*********');
            listEvent();
            break;
        case "3":
            console.log('*********Modify Event process*********');
            modifyEvent();
            break;
        case "4":
            console.log('*********Delete Event process*********');
            deleteEvent();
            break;

        default:
            console.log('Thanks for visiting us.');
            prompt('Thanks for visiting us.\nYour entered Value was out of criteria.');
    }
};



function addEvent() {
    var temp = prompt('Welcome to  add events.\nEnter the event that you want to add.');
    event.push(temp);
    var tempCheck = prompt('Enter any character to add more events.(y/n)');
    if (tempCheck === "y") {
        addEvent();
    } else {
        console.log('Thanks for adding events.');
        for (var i = 0; i < event.length; i++) {
        console.log(i+1+'.',event[i]);
        };
    };

};

function listEvent() {
    console.log('Welcome to list all Events.')
    for (var i = 0; i < event.length; i++) {
         console.log(i+1+'.',event[i]);
    };
};

function modifyEvent() {
var modifyelement=prompt('Enter the exact event no. that you want to modify.')-1;
event[modifyelement]=prompt('Enter the event for modification.');
for (var i = 0; i < event.length; i++) {
    console.log(i+1+'.',event[i]);
};
};

function deleteEvent() {
    var startv= prompt('Enter the exact starting event that you want to delete.') -1 ;
    var endv= prompt('Enter the number ofevent that you want to delete.') ;
    var removed = event.splice(startv,endv);
    console.log(removed);
    for (var i = 0; i < event.length; i++) {
        console.log(i+1+'.',event[i]);
    };
};