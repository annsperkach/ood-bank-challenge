function displayBankStatements(statements) {
    const bankStatementsDiv = document.getElementById("bankStatements");
    bankStatementsDiv.innerHTML = "";
  
    for (const statement of statements) {
      const statementDiv = document.createElement("div");
      statementDiv.textContent = statement;
      bankStatementsDiv.appendChild(statementDiv);
    }
  }
  
  // Create accounts
  const savingsAccount = new SavingsAccount("SAV123");
  const investmentAccount = new InvestmentAccount("INV456");
  const checkingAccount = new CheckingAccount("CHK789", 1000);
  
  // Make transactions
const date1 = new Date("2012-01-10")
const date2 = new Date("2012-01-13")
const date3 = new Date("2012-01-14")

const transaction1 = new Transaction("1", date1, 1000.0)
const transaction2 = new Transaction("2", date2, 2000.0)
const transaction3 = new Transaction("3", date3, -500.0)

savingsAccount.deposit(transaction1.getAmount())
savingsAccount.deposit(transaction2.getAmount())
savingsAccount.withdraw(transaction3.getAmount())

investmentAccount.deposit(transaction2.getAmount())
investmentAccount.applyInterest()

checkingAccount.deposit(transaction1.getAmount())
checkingAccount.withdraw(transaction3.getAmount())
checkingAccount.withdraw(1500)

// Generate statements
const savingsStatement = new BankStatement("1", savingsAccount.getAccountNumber())
const investmentStatement = new BankStatement("2", investmentAccount.getAccountNumber())
const checkingStatement = new BankStatement("3", checkingAccount.getAccountNumber())

savingsStatement.addTransaction(transaction1)
savingsStatement.addTransaction(transaction3)
  
  // Function to handle deposit form submission
  document.getElementById("depositForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (depositAmount > 0) {
      savingsAccount.deposit(depositAmount);
      // Generate new statements
      const savingsStatement = new BankStatement("1", savingsAccount.getAccountNumber());
      // Add transactions to the statement (use the existing code)
      const updatedStatements = savingsStatement.generateStatement();
      displayBankStatements(updatedStatements);
    }
  });
  
  // Function to handle withdraw form submission
  document.getElementById("withdrawForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    if (withdrawAmount > 0) {
      savingsAccount.withdraw(withdrawAmount);
      // Generate new statements
      const savingsStatement = new BankStatement("1", savingsAccount.getAccountNumber());

      const updatedStatements = savingsStatement.generateStatement();
      displayBankStatements(updatedStatements);
    }
  });
  
  // Function to format date as "DD/MM/YYYY"
  function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  }
  
  // Initial display of bank statements
  const initialStatements = [];
  displayBankStatements(initialStatements);