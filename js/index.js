// 全域變數

const amountE1 = document.querySelector('#amount')
const yearE1 = document.querySelector('#years')
const rateE1 = document.querySelector('#rate')
const payment1E1 = document.querySelector('#payment1')
const payment2E1 = document.querySelector('#payment2')
const feeE1 = document.querySelector('#fee')
const calcE1 = document.querySelector('#calc')


console.log(amountE1, yearE1, rateE1, payment1E1, payment2E1, feeE1);

calcE1.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountE1.value * 10000;
    let years = yearE1.value;
    let rate = rateE1.value / 100;
    // let fee = 0;
    // if (feeE1.checked) {
    //     fee = 5000;
    // }
    // 取得不同計算方法
    let fee = feeE1.checked ? 5000 : 0;
    let rule = payment1E1.checked ? 1 : 2;

    let totalInterest = amount * rate * years;
    let totalAmount = amount + totalInterest + fee;
    console.log(amount, years, rate, fee, rule, totalAmount, totalInterest);

    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest;
    const resultE1 = document.querySelector("#result");
    resultE1.style.display = "none";
    setTimeout(function () {
        resultE1.style.display = "block";
    }, 500);
}