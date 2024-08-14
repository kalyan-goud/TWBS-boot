document.getElementById('convert').addEventListener('click', function() {

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;


    const rates = {
        USD: 1,
        EUR: 0.93,
        GBP: 0.82,
        JPY: 147.35,
        AUD: 1.48
    };


    if (isNaN(amount) || amount <= 0) {
        document.getElementById('converted-amount').textContent = "Please enter a valid amount.";
        return;
    }


    const convertedAmount = amount * (rates[toCurrency] / rates[fromCurrency]);


    document.getElementById('converted-amount').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});