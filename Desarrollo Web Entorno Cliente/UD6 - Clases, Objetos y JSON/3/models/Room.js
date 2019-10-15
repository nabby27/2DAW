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
        console.log(this.id, this.square_meters, this.free);
    }

    reserve() {
        this.free = false;
    }

    breakFree() {
        this.free = true;
    }

}