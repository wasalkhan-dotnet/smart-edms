// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
window.loadAreaChart = function () {

    var ctx = document.getElementById("myAreaChart");

    if (!ctx) {
        console.log("Area chart canvas not found");
        return;
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar"],
            datasets: [{
                label: "Data",
                data: [10, 20, 30]
            }]
        }
    });
};