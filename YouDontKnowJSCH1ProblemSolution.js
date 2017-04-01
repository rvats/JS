const SPENDING_THRESHOLD = 1000;
const TAX_RATE = 8;
const PHONE_PRICE = 799.99;
const ACCESSORY_PRICE = 34.99;
console.log("Enter Your Initial Balance: ");
var bank_balance = prompt();
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE /100;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// keep buying phones while you still have money
while (amount < bank_balance) {
	// buy a new phone!
	amount = amount + PHONE_PRICE;

	// can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

// don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log(
	"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase. :("
	);
}
// You can't afford this purchase. :(