let rooms = [];
let hotel;

function init() {
    createRoomsOnHotel(10);
    paintRooms();
}

function paintRooms() {
    rooms.forEach((room) => {
        let div_room = document.createElement('div');
        div_room.innerHTML = 
            '<button id=show_' + room.id + ' onclick=show(this)>Show room</button>' +
            '<button id=reserve_' + room.id + ' onclick=reserve(this)>Reserve</button>' +
            '<button id=break-free_' + room.id + ' onclick=\'breakFree(this)\'>Break free</button>';
        
        document.body.appendChild(div_room);
    })
}

function show(element) {
    debugger;
}

function reserve(element) {
    debugger;
}

function breakFree(element) {
    debugger;
}

function createRoomsOnHotel(number_of_rooms) {
    let square_meters_available = [50, 40, 30, 25, 10];
    let free_available = [true, false];

    for (let index = 0; index < number_of_rooms; index++) {
        let square_meters = square_meters_available[Math.floor(Math.random() * square_meters_available.length)];
        let free = free_available[Math.floor(Math.random() * free_available.length)];
        
        room = new Room(index, square_meters, free);
        rooms.push(room);
    }

    hotel = new Hotel('Great Hotel', rooms);
}