class SeatAsgn {
  constructor(row, seat) {
    this.row = row;
    this.seat = seat;
  }
}

class AirlineTicket {
  constructor(fromCity, toCity, flightNum, seat) {
    this.fromCity = fromCity;
    this.toCity = toCity;
    this.flightNum = flightNum;
    this.seat = seat;
  }

  get() {
    return this.seat
  }
}

const AirlineTicket1 = new AirlineTicket(
  "Mumbai",
  "LA",
  "123A",
  new SeatAsgn(23, "A2")
);

console.log(AirlineTicket1.get());