function getData(url, cb) {
    var xhr = new XMLHttpRequest();
    var url = "https://strainapi.evanbusse.com/ofJ0JOx/strains/search/all";

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr style="background-color:red;">${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDoc('${prev}')">Previous</button>
                <button onclick="writeToDoc('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDoc('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDoc('${prev}')">Previous</button>`;
    }
}

function writeToDoc(url) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(url, function(data) {
        var pagination = "";

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td style="background-color:lime;">${truncatedData}</td>`);
            });
            tableRows.push(`<tr style="color:tea;"l>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}.replace("/,/g"," ")`;
    });
}