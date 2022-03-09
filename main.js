  var select = document.getElementById("country");
  var h2 = document.getElementById("valorConvertido");
  var bitcoin = document.getElementById("bitcoin");

  function text(cash, value) {
    var a =
      (h2.innerHTML = `O valor de ${cash} ${value} é igual á ${total.toFixed(1)} R$`);
    return a;
  }
  function bitco(cash, value, bitvalue) {
    var bit = (bitcoin.innerHTML = `O valor de ${cash} ${value} é igual á ${cash * bitvalue} Bitcoin`);
    return bit;
  }

  function converter() {
    let cashValue = document.getElementById("valor").value;

    let value = select.value;
    cash = parseFloat(cashValue);

    if (cash <= 0) {
      alert("Digite um valor válido");
    } else {
      switch (value) {
        case "USD":
          let usd = 5.0903;
          total = calcConverter(usd, cash);
          text(cash, value);
          bitco(cash, value, 0.000026);
          break;
        case "GBP":
          let gbp = 6.6749;
          total = calcConverter(gbp, cash);
          text(cash, value);
          bitco(cash, value, 0.000034);
          break;
        case "EUR":
          let eur = 5.5372;
          total = calcConverter(eur, cash);
          text(cash, value);
          bitco(cash, value, 0.000028);
          break;
        case "CAD":
          let cad = 3.9558;
          total = calcConverter(cad, cash);
          text(cash, value);
          bitco(cash, value, 0.000019);
          break;
        case "CHF":
          let chf = 5.41;
          total = calcConverter(chf, cash);
          text(cash, value);
          bitco(cash, value, 0.000028);
          break;
        default:
          break;
      }
    }
  }

  function calcConverter(n1, n2) {
    result = n1 * n2;
    return result;
  }
