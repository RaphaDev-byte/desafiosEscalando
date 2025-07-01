let farinhreit = document.getElementById("temperaturaF");
let celsius = document.getElementById("temperaturaC");

celsius.addEventListener("input", function() { if(celsius.value !== "") {
    farinhreit.value = ((parseFloat(celsius.value) * 9/5) + 32).toFixed(2);
} else {
    farinhreit.value = "";}
});

farinhreit.addEventListener("input", function() { if(farinhreit.value !== "") {
    celsius.value = ((parseFloat(farinhreit.value) - 32) * 5/9).toFixed(2);
} else {
    celsius.value = "";}
}); 


