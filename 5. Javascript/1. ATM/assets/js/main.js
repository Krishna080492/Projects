
  // Pin
  function Verify() {
    let pin = document.getElementById("pin").value
    if (pin != "") {
      if (pin == 1234) {
        document.getElementById('output').innerHTML = 'Login Successfully'
        window.location.href = "final.html";
      } else {
        document.getElementById('output').innerHTML = 'Incorrect Pin'
      }
    } else {
      document.getElementById('output').innerHTML = 'Enter a Pin'
    }
  }
  // Balance
    let balance = 5000
    function Balance() {
      document.getElementById('output').innerHTML = `Your balance is Rs.${balance}/-`
    }
   
  // Withdraw
  function withdraw() {
    var amt = parseInt(document.getElementById('amt').value)
    if (amt > 0 && amt <= balance) {
      balance = balance - amt
      document.getElementById('output').innerHTML = `Withdrawal successful.<br> Your new balance is Rs.${balance}/-`
    } else {
      document.getElementById('output').innerHTML = `Insufficiant Balance. <br>Your balance is Rs.${balance}/-`
    }
  }

  // Deposit
  function deposit() {
    var amt = parseInt(document.getElementById('amt').value)
    if (amt > 0) {
      balance = balance + amt
      document.getElementById('output').innerHTML = `Your new balance is Rs.${balance}/-`
    } else {
      document.getElementById('output').innerHTML = `Invalid Amount`
    }

  }

// Exit
function exit(){
  window.location.href = "atm.html";

}
