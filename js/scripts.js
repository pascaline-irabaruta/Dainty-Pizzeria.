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
      var crustPrice = {
    crispy: 1500,
    stuffed: 1000,
    gluten: 1200,
    neapolitan:2000,
    Thin:1000
  };
  function sizeCalcPrice(size) {
    if (size === "small") {
      return sizePrice.small * 1;
    } else if (size === "medium") {
      return sizePrice.medium * 1;
    } else {
      return sizePrice.large * 1;
    }
  }

  function crustCalcPrice(crust) {
    if (crust === "crispy") {
      return crustPrice.crispy * 1;
    } else if (crust === "stuffed") {
      return crustPrice.stuffed * 1;
    } else if (crust === "neapolitan") {
      return crustPrice.neapolitan * 1;
    } else {
      return crustPrice.gluten * 1;
    }
  }

  function toppingsCalcPrice(toppings) {
    var noOfTopping = 0;
    for (i = 0; i < toppings.length; i++) {
      if (toppings[i] == "Ham") {
        noOfTopping += 2000;
      }
      if (toppings[i] == "Pepperoni") {
        noOfTopping += 1000;
      }
      if (toppings[i] == "Mozzarella") {
        noOfTopping += 4500;
      }
      if (toppings[i] == "Sausage") {
        noOfTopping += 3000;
      }
      if (toppings[i] == "Bacon") {
        noOfTopping += 4000;
      }
      if (toppings[i] == "Mushroom") {
        noOfTopping += 3500;
      }
    }
    return noOfTopping * 1;
  }


  function checkPepperoni(topping) {
    return topping === "pepperoni";
  }
  $(document).ready(function(){
  function getPizzaSize() {
      return $("#sz").find(":selected").val();
    }
    function getCrust() {
    return $("#crst").find(":selected").val();
  }
  function getToppings() {
      var toppingList = [];
      $(".form-check-input:checked:enabled").each(function() {
        toppingList.push($(this).val());
      });
      return toppingList;
    }

    $("form#orderform").submit(function(event) {
      event.preventDefault();
      var pizzaSize = getPizzaSize();
      var crust = getCrust();
      var toppingList = getToppings();

      var newPizza = new Pizza(pizzaSize, crust);
      newPizza.toppings.push(toppingList);
      $("#chckout").show();
      var oneOrder =
        sizeCalcPrice(pizzaSize) +
        crustCalcPrice(crust) +
        toppingsCalcPrice(toppingList);

        $("#items").append(

            "<li> Pizza size: "  +newPizza.size + "<br> crust :"+newPizza.crust+"<br> toppings: " +newPizza.toppings+ "<br> Total price: "+oneOrder+ " rwf </li>"

          );
        });
        $("#chckout").click(function() {
              $(".checkouts").show();
              var userName = $("#uname").val();
              var userPhone = $("#phn").val();
              $("#clientname").text(userName);
              $("#clientphone").text(userPhone);

              $("#checkoutslist").html($("#items").html());
            });
            $("#delivers").click(function() {
              $(".addresses").show();
            });
            $("#addre").click(function() {
              var userName = $("#uname").val();
              alert("Dear "+userName+" Your order will be delivered in not more than 20 minutes. Thank you for choosing Dainty Pizzeria! Please come back again")
            });
            $("#messageform").submit(function(){
                var uname= $("input#names").val();
                alert(uname+" we have received your message. Thank you for reaching out to us.");
              });



            });
