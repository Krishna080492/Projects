function Calc() {
  let amt = document.getElementById('amt').value
  let period = document.getElementById('period').value
  let loan_period = document.getElementById('loan_period').value
  let loan_type = document.getElementById('loan_type').value
  let si

  //loan type
  switch (loan_type) {
    case 'home':
      Calculation(amt, period, loan_type)
      break
    case 'car':
      Calculation(amt, period, loan_type)
      break
    case 'personal':
      Calculation(amt, period, loan_type)
      break
    default:
      document.getElementById('result').innerHTML = "Please Select Valid Loan Type..."
  }

  //calculation
  function Calculation(amt, period, loan_type) {
    if (amt == "") {
      printErrorAmt()
    } else if (period == "") {
      printErrorPeriod()
    } else if (loan_period == "") {
      printErrorLoanPeriod()
    } else {
      if (loan_type == "home" && loan_period == "years") {
        si = (amt * period * 9) / 100
        document.getElementById('result').innerHTML = si
      } else if (loan_type == "home" && loan_period == "months") {
        si = (amt * period * 9) / (12 * 100)
        document.getElementById('result').innerHTML = si
      } else if (loan_type == "home" && loan_period == "days") {
        si = (amt * period * 9) / (365 * 100)
        document.getElementById('result').innerHTML = si
      } else {
        if (loan_type == "car" && loan_period == "years") {
          si = (amt * period * 11) / 100
          document.getElementById('result').innerHTML = si
        } else if (loan_type == "car" && loan_period == "months") {
          si = (amt * period * 11) / (12 * 100)
          document.getElementById('result').innerHTML = si
        } else if (loan_type == "car" && loan_period == "days") {
          si = (amt * period * 11) / (365 * 100)
          document.getElementById('result').innerHTML = si
        } else {
          if (loan_type == "personal" && loan_period == "years") {
            si = (amt * period * 18) / 100
            document.getElementById('result').innerHTML = si
          } else if (loan_type == "personal" && loan_period == "months") {
            si = (amt * period * 18) / (12 * 100)
            document.getElementById('result').innerHTML = si
          } else {
            si = (amt * period * 18) / (365 * 100)
            document.getElementById('result').innerHTML = si
          }
        }
      }
    }
  }

  function printErrorAmt(msg) {
    document.getElementById('result').innerHTML = "Please Enter Valid Loan Amount"
  }
  function printErrorPeriod(msg) {
    document.getElementById('result').innerHTML = "Please Enter Valid Loan Period Value"
  }
  function printErrorLoanPeriod() {
    document.getElementById('result').innerHTML = "Please Enter Valid Loan Period"
  }
}


