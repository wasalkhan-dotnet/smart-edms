// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
window.loadBarChart = function () {

    var ctx = document.getElementById("myBarChart");

    if (!ctx) {
        console.log("Bar chart canvas not found");
        return;
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["A", "B", "C"],
            datasets: [{
                label: "Values",
                data: [5, 15, 25]
            }]
        }
    });
};