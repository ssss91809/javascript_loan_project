// 全域變數

const amountE1 = document.querySelector('#amount')
const yearE1 = document.querySelector('#years')
const rateE1 = document.querySelector('#rate')
const payment1E1 = document.querySelector('#payment1')
const payment2E1 = document.querySelector('#payment2')
const feeE1 = document.querySelector('#fee')
const calcE1 = document.querySelector('#calc')
const tableE1 = document.querySelector('#table')

console.log(tableE1, calcE1, amountE1, yearE1, rateE1, payment1E1, payment2E1, feeE1);

calcE1.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountE1.value * 10000;
    let years = yearE1.value;
    let rate = rateE1.value;
    // let fee = 0;
    // if (feeE1.checked) {
    //     fee = 5000;
    // }
    // 取得不同計算方法
    let fee = feeE1.checked ? 5000 : 0;
    // 總金額
    let rule = payment1E1.checked ? 1 : 2;

    let result;
    if (rule == 1) {
        result = rule1(amount, years, rate);
        console.log(result);
    } else {

        alert("功能製作中....")
        return;
    }

    let totalInterest = result[1];
    let totalAmount = amount + totalInterest + fee;
    console.log(amount, years, rate, fee, rule, totalAmount, totalInterest);
    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest;
    const resultE1 = document.querySelector("#result");
    resultE1.style.display = "none";
    setTimeout(function () {
        resultE1.style.display = "block";
    }, 500);

    drawTable(result[0]);

}

function drawTable(datas) {
    let tablesStr = "<ul>"
    for (let i = 0; i < datas.length; i++) {
        console.log(datas[i].join(","));
        tablesStr += `<li> ${datas[i].join(",")} </li>`;


    }
    tablesStr += "</ul>";
    console.log(tablesStr);
    tableE1.innerHTML = tablesStr
}


function rule1(total_amount, years, rate) {
    let amount = total_amount;
    let period = years * 12;
    let month_rate = rate / 100 / 12;
    let month_pay = parseInt(amount / period);

    let datas = [];
    let totalInterest = 0;

    for (let i = 0; i < period; i++) {
        interest = Math.round(amount * month_rate);
        amount -= month_pay;
        //最後一期 ?

        if (i == period - 1) {
            datas.push([i + 1, month_pay + amount, interest, month_pay + amount + interest, 0]);
        } else {
            datas.push([i + 1, month_pay, interest, month_pay + interest, amount]);
        }

        totalInterest += interest;
    }

    // console.log(datas);
    return [datas, totalInterest];
}
