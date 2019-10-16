let rooms = [];
let hotel;

function init() {
    createRoomsOnHotel(5);
    paintRooms();
}

function paintRooms() {
    rooms.forEach((room) => {
        let div_room = document.createElement('div');
        div_room.innerHTML = 
            '<button class="button" id=show_' + room.id + ' onclick=show(this)>Show room</button>' +
            '<button class="button" id=reserve_' + room.id + ' onclick=reserve(this)>Reserve</button>' +
            '<button class="button" id=break-free_' + room.id + ' onclick=\'breakFree(this)\'>Break free</button>' +
            '<hr>';
        
        document.body.appendChild(div_room);
    })
}

function show(element) {
    room_id = getRoomIdFromElementHTML(element);
    room = getRoom(room_id);
    room.show();
}

function reserve(element) {
    room_id = getRoomIdFromElementHTML(element);
    room = getRoom(room_id);
    room.reserve();
}

function breakFree(element) {
    room_id = getRoomIdFromElementHTML(element);
    room = getRoom(room_id);
    room.breakFree();
}

function getRoomIdFromElementHTML(element) {
    return parseInt(element.id.split('_')[1]);
}

function getRoom(room_id) {
    let roomToReturn;
    hotel.rooms.forEach((room) => {
        if (room.id === room_id) {
            roomToReturn = room;
        }
    })

    return roomToReturn;
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