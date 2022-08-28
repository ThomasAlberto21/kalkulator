// ! mengupdate angka ke calculator screen
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number
}


// * menambahkan event ketika button diklik , kemudian ketika tombol diklik jalankan function update screen nya , setelah itu perbaharui atribut nilai input di calculator screen
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value)
  })
})



// ! Definisikan Variable untuk melakukan kalkulasi
let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"



// * permasalahan saat 0 di pencet terlebih dahulu
const inputNumber = (number) => {
  if(currentNumber === '0'){
    currentNumber = number
  } else {
    currentNumber += number
  }
}


// * Memberikan the Number yang di klik ke variable currentNumber
numbers.forEach((number) => {
  number.addEventListener("click" , (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})



// ! Definisikan function inputOperator
const inputOperator = (operator) => {
  if(calculationOperator === ""){
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = "0"
}


// * Menambah Click event ke operator tombol-tombol
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener("click" , (event) => {
    inputOperator(event.target.value)
  })
})


// * Tambahkan click event ke tombol sama-dengan (=)
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click" , () => {
  calculate()
  updateScreen(currentNumber)
})


// ! Definisikan function Calculation
const calculate = () =>{
  let result = ""
  switch(calculationOperator){
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    case "%":
      result = parseFloat(prevNumber) % parseFloat(currentNumber)
      break
    default:
      break
  }
  currentNumber = result
  calculationOperator = ""
}


// ! Definisikan dan jalankan Function clearAll
const clearAll = () =>{
  prevNumber = ""
  calculationOperator = ""
  currentNumber = "0"
}


// * Membuat tombol AC(all clear) berjalan dengan lancar 
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click" , () =>{
  clearAll()
  updateScreen(currentNumber)
})


// ! Definisikan dan jalankan Function inputDecimal
inputDesimal = (dot) => {
  if(currentNumber.includes(".")){
    return
  }
  currentNumber += dot
}

// * Membuat aplikasi dapat mengkalkulasi angka desimal.
const desimal = document.querySelector(".desimal");
  desimal.addEventListener("click" , (event) => {
  inputDesimal(event.target.value)
  updateScreen(currentNumber)
})

// ! Definisikan input persentase
const inputPersentase = (persentase) => {
  if(calculationOperator === ""){
    prevNumber = currentNumber
  }
  calculationOperator = persentase
  currentNumber = "0"
}

// * Membuat aplikasi dapat mengkalkulasi angka persentase
const persentase = document.querySelectorAll('.persentase');
persentase.forEach((persentase) => {
  persentase.addEventListener("click" , (event) => {
    inputPersentase(event.target.value)
  })
})