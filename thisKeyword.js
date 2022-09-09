let laptop = {
  cpu: "19",
  ram: 16,
  brand: "HP",
  greet: function () {
    console.log(this.cpu);
  },
};
laptop.greet();
