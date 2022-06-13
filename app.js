const diver = document.querySelector(".total-container");
const splitDiver = document.querySelector(".split-container");
const billInput = document.getElementById("user-input");
const tipPrecent = document.getElementById("precent-input");
const btn = document.getElementById("button");
const dinersChoices = document.getElementById("diners-choices");

const calTip = function (bill, precent) {
  return (bill * precent) / 100;
};

const diners = function () {
  const dinersNumbers = `<div id="second-header"><h1>לכמה סועדים אתם מעוניינים לחלק את החשבון ?</h1> </div>
 
<div class="form-floating ">
  <select class=" btn btn-outline text-white btn btn-primary"
   id="floatingSelect" aria-label="Floating label select example ">
    <option selected>מספר סועדים</option>
    <option id="a" value="1">1</option>
    <option id="b" value="2">2</option>
    <option id="c" value="3">3</option>
    <option id="d" value="4">4</option>
    <option id="e" value="5">5</option>
    <option id="f" value="6">6</option>
    <option id="g" value="7">7</option>
    <option id="h" value="8">8</option>
  </select>
   <input
          class="btn text-black btn btn-warning "
          type="button"
          value="לחץ כאן"
          id="second-button"
        />
</div>
  `;
  splitDiver.innerHTML = dinersNumbers;
  return dinersNumbers;
};
const calcTotalBill = function (bill, precent) {
  let tipCalc = calTip(bill, precent);
  let fullAmount = tipCalc + Number(bill);

  let bills = `
        <button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
<h6>סה"כ טיפ ${tipCalc}  ש"ח (${precent}%) אחוזים</h6>
</button>
<button type="button" class="btn btn-warning " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover"> 
        <h6>סה"כ לתשלום כולל טיפ - ${fullAmount}  ש"ח</h6>
               `;

  setTimeout(() => {
    diners();
    split();
  }, 1000);
  return (diver.innerHTML = bills);
};

btn.addEventListener("click", function () {
  return calcTotalBill(billInput.value, tipPrecent.value);
});

const split = function () {
  const btn2 = document.getElementById("second-button");
  const dinersNumbers = document.getElementById("floatingSelect");

  btn2.addEventListener("click", function () {
    const tip = (billInput.value * tipPrecent.value) / 100;
    const full = tip + Number(billInput.value);
    renderHtml = (full, num) => {
      perDiner = `${full}` / num;
      return `
      <div class="alert" role="alert">
      
      סה"כ לתשלום עבור כל סועד ${perDiner} ש"ח
</div>
      
   `;
    };

    // const tipCalc = calTip(bill, precent);
    // const fullCalc = tipCalc + Number(bill);

    if (dinersNumbers.value == 1) {
      return (dinersChoices.innerHTML = renderHtml(full, 1));
    } else if (dinersNumbers.value == 2) {
      return (dinersChoices.innerHTML = renderHtml(full, 2));
    } else if (dinersNumbers.value == 3) {
      return (dinersChoices.innerHTML = renderHtml(full, 3));
    } else if (dinersNumbers.value == 4) {
      return (dinersChoices.innerHTML = renderHtml(full, 4));
    } else if (dinersNumbers.value == 5) {
      return (dinersChoices.innerHTML = renderHtml(full, 5));
    } else if (dinersNumbers.value == 6) {
      return (dinersChoices.innerHTML = renderHtml(full, 6));
    } else if (dinersNumbers.value == 7) {
      return (dinersChoices.innerHTML = renderHtml(full, 7));
    } else if (dinersNumbers.value == 8) {
      dinersChoices.innerHTML = renderHtml(full, 8);
    }
  });
};

// for (x = 0; x < values.length; x++) {
//   let counter = values[x];
//
