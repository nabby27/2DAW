class Room {

    id = '';
    square_meters = 0;
    free = false;

    constructor(id, square_meters, free) {
        this.id = id;
        this.square_meters = square_meters;
        this.free = free;
    }

    show() {
        let message;
        if (this.free) {
            message = 'It\'s free to reserve';
        } else {
            message = 'Sorry but can\'t reserve this room';
        }
        alert(message);
    }

    reserve() {
        if (this.free) {
            this.free = false;
        } else {
            alert('This room is yet reserved');
        }
    }

    breakFree() {
        if (!this.free) {
            this.free = true;
        } else {
            alert('This room is yet free');
        }
    }

}