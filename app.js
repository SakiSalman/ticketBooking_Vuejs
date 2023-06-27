var app = Vue.createApp({
  data() {
    return {
      appliedCoupon: null,
      name : '',
      mobile : '',
      coupons : '',
      coupons: [
        {
          code: "100TAKAOFF",
          discount: 100,
        },
        {
          code: "200TAKAOFF",
          discount: 200,
        },
      ],
      seatStates: {
        sold: {
          text: "Sold",
          color: "#ff0000",
        },
        available: {
          text: "Available",
          color: "#fff",
        },
        booked: {
          text: "Booked",
          color: "gray",
        },
        selected: {
          text: "Selected",
          color: "#00ff00",
        },
      },
      seats: [
        {
          name: "A1",
          type: "available",
          price: 500,
        },
        {
          name: "A2",
          type: "available",
          price: 500,
        },
        {
          name: "A3",
          type: "available",
          price: 500,
        },
        {
          name: "A4",
          type: "available",
          price: 500,
        },
        {
          name: "B1",
          type: "available",
          price: 450,
        },
        {
          name: "B2",
          type: "available",
          price: 450,
        },
        {
          name: "B3",
          type: "available",
          price: 450,
        },
        {
          name: "B4",
          type: "available",
          price: 450,
        },
        {
          name: "C1",
          type: "sold",
          price: 500,
        },
        {
          name: "C2",
          type: "sold",
          price: 500,
        },
        {
          name: "C3",
          type: "sold",
          price: 500,
        },
        {
          name: "C4",
          type: "sold",
          price: 500,
        },
        {
          name: "D1",
          type: "available",
          price: 400,
        },
        {
          name: "D2",
          type: "available",
          price: 400,
        },
        {
          name: "D3",
          type: "available",
          price: 400,
        },
        {
          name: "D4",
          type: "available",
          price: 400,
        },
        {
          name: "E1",
          type: "available",
          price: 300,
        },
        {
          name: "E2",
          type: "available",
          price: 300,
        },
        {
          name: "E3",
          type: "booked",
          price: 300,
        },
        {
          name: "E4",
          type: "booked",
          price: 300,
        },
        {
          name: "F1",
          type: "available",
          price: 300,
        },
        {
          name: "F2",
          type: "available",
          price: 300,
        },
        {
          name: "F3",
          type: "available",
          price: 300,
        },
        {
          name: "F4",
          type: "available",
          price: 300,
        },
      ],
    };
  },
  
  computed: {
    selectedSeat() {
      let sc = this.seats.filter((data) => data.type == "selected");
      return sc;
    },
    totalCost() {
      let tc = 0;
      this.selectedSeat.forEach((element) => {
        return  tc += element.price;
      });

      if (this.appliedCoupon != null ) {
       return tc = tc - this.appliedCoupon.discount
      }
      return tc;
    },
  },
  methods: {
    handleClick(i) {
      let seat = this.seats[i];
      if (seat.type == "sold" || seat.type == "booked") {
        return alert("You can not Select this Seat!");
      }
      if (seat.type == "available" && this.selectedSeat.length > 2) {
        return alert("You can not Select more then 3 Seat!");
      }
      seat.type = "selected";
    },
    confirm(){
      if (!this.name || !this.mobile) {
        return alert('Enter Name and Mobile!')
      }

      this.name = '',
      this.mobile = ''
      this.seats.forEach((seat) => {
        if (seat.type === "selected") {
          seat.type = "sold";
        }
      });
      return alert('Ticket is Booked')
    }
  },
  watch: {
    
    }
  
});

app.mount("#app");
