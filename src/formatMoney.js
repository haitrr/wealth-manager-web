export const formatMoney = (amount, currency) => {
  if(currency === "VND") {
    return formatVND(amount)
  }
}

const formatVND = (amount) => {
  let str = amount.toString()
  let first = str
  let second = null
  if(str.includes(".")) {
    [first,second] = str.split(".")
  }
  let l = first.length
  let rs = ""
  for(let i = l - 1; i>= 0; i-- ) {
    rs = first[i] + rs
    if((l-i)%3 === 0 && i!==0) {
      rs = "," + rs
    }
  }
  if(second) {
    rs+="."+second
  }
  return rs
}

console.log(formatVND(31500.21))

