// Chart for Income vs Expense
var ctx = document.getElementById('incomeExpenseChart').getContext('2d');
var incomeExpenseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [2000, 4000, 3000, 5000, 7000, 6000, 8000, 3000, 4000, 5000, 6000, 7000],
            backgroundColor: '#3E468D'
        },
        {
            label: 'Expense',
            data: [1000, 2000, 1500, 3000, 2500, 2000, 4000, 3500, 3000, 5000, 2500, 3000],
            backgroundColor: '#FF6384'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                }
            }
        }
    }
});
