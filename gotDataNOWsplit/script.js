const base = "https://strainapi.evanbusse.com/ofJ0JOx/"

var collection = new Mongo.Collection("");

console.log(collection.rawCollection().db.options.url)

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", base + type);
    // xhr.open("GET", "https://strainapi.evanbusse.com/ofJ0JOx/strains/search/all");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];
    // obj = this.obj;
    // obj = obj;

    Object.keys(obj).forEach(function (key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}


function writeToDoc(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        // data = JSON.stringify(data);
        data = this.data;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            // el.innerHTML += "<p>" + item.name + "</p>";
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}

// THIS function works but i cannot unpack to sort or build headers

// function writeToDoc(type) {
//     getData(type, function (data) {
//         data = JSON.stringify(data);
//         document.getElementById("data").innerHTML = data; 
//         console.log(data);
//         console.log(JSON.parse(data));
//     });
// }



//  API calls
//         // document.getElementById("data").innerHTML = data.Afpak.race; 
//         // document.getElementById("data1").innerHTML = data.Afpak; 
//         // document.getElementById("data2").innerHTML = JSON.stringify(data.Afpak); 
//         // document.getElementById("data3").innerHTML = JSON.stringify(data); 
//         // document.getElementById("data3").innerHTML = data.Afpak.race; 
//         // console.log(Object.keys(item).forEach(function(key){console.log(key);}))