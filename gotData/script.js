const base = "https://strainapi.evanbusse.com/ofJ0JOx/"

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", base + type);
    // xhr.open("GET", "https://strainapi.evanbusse.com/ofJ0JOx/strains/search/all");
    xhr.send();
}

function writeToDoc(type) {
    getData(type, function(data) {
        // data = data.results;
        // data.forEach(function(item){
            document.getElementById("data").innerHTML = JSON.stringify(data); 
            // document.getElementById("data").innerHTML = data.Afpak.race; 
            // document.getElementById("data1").innerHTML = data.Afpak; 
            // document.getElementById("data2").innerHTML = JSON.stringify(data.Afpak); 
            // document.getElementById("data3").innerHTML = JSON.stringify(data); 
            // document.getElementById("data3").innerHTML = data.Afpak.race; 
            console.log(data);
        // })
    });
}
