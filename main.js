var select = document.getElementById("country");
var h2 = document.getElementById("valorConvertido");
var bitcoin = document.getElementById("bitcoin");

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
        h2.innerHTML = `O valor de ${cash} ${value} é igual á ${total.toFixed(
          1
        )} R$`;
        bitcoin.innerHTML = `O valor de ${cash} ${value} é igual á ${
          cash * 0.000026
        } Bitcoin`;
        break;
      case "GBP":
        let gbp = 6.6749;
        total = calcConverter(gbp, cash);
        h2.innerHTML = `O valor de ${cash} ${value} é igual á ${total.toFixed(
          1
        )} R$`;
        bitcoin.innerHTML = `O valor de ${cash} ${value} é igual á ${
          cash * 0.000034
        } Bitcoin`;
        break;
      case "EUR":
        let eur = 5.5372;
        total = calcConverter(eur, cash);
        h2.innerHTML = `O valor de ${cash} ${value} é igual á ${total.toFixed(
          1
        )} R$`;
        bitcoin.innerHTML = `O valor de ${cash} ${value} é igual á ${
          cash * 0.000028
        } Bitcoin`;
        break;
      case "CAD":
        let cad = 3.9558;
        total = calcConverter(cad, cash);
        h2.innerHTML = `O valor de ${cash} ${value} é igual á ${total.toFixed(
          1
        )} R$`;
        bitcoin.innerHTML = `O valor de ${cash} ${value} é igual á ${
          cash * 0.00002
        } Bitcoin`;
        break;
      case "CHF":
        let chf = 0.04405;
        total = calcConverter(chf, cash);
        h2.innerHTML = `O valor de ${cash} ${value} é igual á ${total.toFixed(
          1
        )} R$`;
        bitcoin.innerHTML = `O valor de ${cash} ${value} é igual á ${
          cash * 0.000028
        } Bitcoin`;
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
