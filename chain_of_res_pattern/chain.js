class ExpenseHandler {
    constructor(name, approvalLimit, nextHandler = null) {
        this.name = name;
        this.approvalLimit = approvalLimit;
        this.nextHandler = nextHandler;
    }

    handleExpense(expense) {
        if (expense.amount <= this.approvalLimit) {
            console.log(`${this.name} approved the expense of $${expense.amount}`);
        }
        else if (this.nextHandler) {
            console.log(`${this.name} cannot approve. Forwarding to ${this.nextHandler.name}`);
            this.nextHandler.handleExpense(expense);
        }
        else {
            console.log(`${this.name} cannot approve. Expense exceeds all approval limits.`);
        }
    }
}

const president = new ExpenseHandler("President", 30000);
const vicePresident = new ExpenseHandler("Vice President", 10000, president);
const director = new ExpenseHandler("Director", 5000, vicePresident);
const manager = new ExpenseHandler('Manager', 1000, director);

const expenses = [
    { amount: 800, description: "Office supplies" },
    { amount: 1500, description: "Team lunch" },
    { amount: 8000, description: "Sponsorship" },
    { amount: 20000, description: "New furniture" },
    { amount: 40000, description: "New office" }
];

for (const expense of expenses) {
    console.log(`\nSubmitting expense request: $${expense.amount} - ${expense.description}`);
    manager.handleExpense(expense);
}