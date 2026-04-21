/*REgistratio form code*/

// smooth scroll on focus (mobile)
document.addEventListener("focusin", function (e) {
    if (e.target.classList.contains("form-control")) {
        setTimeout(() => {
            e.target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 200);
    }
});

// success message
function formSaved() {
    alert("Saved Successfully ✅");
}



/*loading spiner*/
function hideLoaderAfterDelay() {
    setTimeout(function () {
        var loader = document.getElementById("app");
        if (loader) {
            loader.style.display = "none";
        }
    }, 9000); // 3 seconds
}







/*Transmital*/

// smooth scroll on focus (mobile UX)
document.addEventListener("focusin", function (e) {
    if (e.target.classList.contains("form-control")) {
        setTimeout(() => {
            e.target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 200);
    }
});

// checkbox click animation feedback
document.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") {
        e.target.parentElement.style.transform = "scale(1.02)";
        setTimeout(() => {
            e.target.parentElement.style.transform = "scale(1)";
        }, 150);
    }
});





/* Docoument list*/

/* PRINT ONLY TABLE */
function printTableOnly() {

    const table = document.getElementById("printTableArea");

    if (!table) {
        alert("Table not found!");
        return;
    }

    const printWindow = window.open('', '_blank');

    printWindow.document.write(`
        <html>
        <head>
            <title>Print</title>
            <style>
                body {
                    font-family: Arial;
                    padding: 20px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 12px;
                }

                th, td {
                    border: 1px solid black;
                    padding: 6px;
                    text-align: left;
                }

                th {
                    background: black;
                    color: white;
                }

                @page {
                    size: A4 portrait;
                    margin: 10mm;
                }
            </style>
        </head>

        <body>
            ${table.outerHTML}
        </body>
        </html>
    `);

    printWindow.document.close();

    printWindow.onload = function () {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };
}