let progress = sessionStorage.getItem("progress-percentage");
progress = parseFloat(progress);
if (isNaN(progress))
{
    progress = "0";
}
else{
    progress = Math.round(progress);
}

progressStatement = "Your final progress is " + progress + "%";

let progressLine = document.querySelector("#final-progress > p");
progressLine.textContent = progressStatement;