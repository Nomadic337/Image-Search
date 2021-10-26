var API_KEY =  "563492ad6f91700001000001cd1e02693d5b4dd6a5273bcc109891fb";


var userInput = document.querySelector("#submit");

userInput.addEventListener("submit", function(e) {
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var imageResp = JSON.parse(xhttp.responseText).photos;
            
            var searchedImages = document.querySelector("#image-gallery");

            searchedImages.innerHTML = "";
            imageResp.forEach(element => {
                searchedImages.innerHTML += `
                <di class = "imgwrap">
                    <img src="${element.src.medium}">
                </div>
            `
            });

        }
    };

    var inputTest = document.querySelector("#input").value;

    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${inputTest}`, true);
    xhttp.setRequestHeader("Authorization",  API_KEY);
    xhttp.send();
    

})
// 
 







