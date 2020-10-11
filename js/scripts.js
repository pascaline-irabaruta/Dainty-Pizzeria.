function Pizza(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
  }
  var sizePrice = {
      small: 5000,
      medium: 7000,
      large: 9000
    };
    var toppingPrice =[
      {
        Ham: {
          small: 500,
          medium: 700,
          large: 1000
        },
        Pepperoni: {
          small: 700,
          medium: 1000,
          large: 1500
        },
        Mozzarella: {
          small: 500,
          medium: 800,
          large: 1100
        },
          Sausage: {
            small: 1000,
          medium: 1500,
          large: 1700
          },
          Bacon: {
            small: 500,
          medium: 1000,
          large: 1500
          },
            Mushroom: {
              small: 800,
          medium: 1000,
          large: 1200
            }
      }
      ];
