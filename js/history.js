// Retrieve transaction history from local storage
const transactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
const historyContainer = document.getElementById('history-container');

// Display transaction history (amount and time)
if (transactionHistory.length === 0) {
    historyContainer.innerHTML = '<p>No transactions available.</p>';
} 
else {
    transactionHistory.forEach(transaction => {
        const historyCard = document.createElement('div');
        historyCard.classList.add('border', 'rounded-lg', 'p-4', 'bg-white', 'shadow-md');

        // Display the donation amount and date
        historyCard.innerHTML = `
            <p class="font-bold text-lg">${transaction.amount} Taka is Donated for ${transaction.purpose}</p>
            <p class="text-gray-500">Date: ${transaction.date}</p>
        `;
        historyContainer.appendChild(historyCard);
    });
}
