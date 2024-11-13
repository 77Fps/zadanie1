function obliczprowizje() {
    const salesValue = parseFloat(document.getElementById('salesValue').value);
    const margin = parseFloat(document.getElementById('margin').value);

    if (isNaN(salesValue) || isNaN(margin) || salesValue <= 0 || margin < 0) {
        document.getElementById('commissionResult').innerText = 'Proszę wprowadzić poprawne wartości.';
        document.getElementById('sellerCashResult').innerText = '';
        return;
    }

    const commission = (salesValue * margin) / 100;
    const sellerCash = salesValue - commission;

    document.getElementById('Wysokość Prowizji').innerText = `Prowizja: ${commission.toFixed(2)} PLN`;
    document.getElementById('Wysokość Gotówki').innerText = `Pieniądze dla sprzedawcy: ${sellerCash.toFixed(2)} PLN`;
}