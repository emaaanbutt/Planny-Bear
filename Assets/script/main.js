// document.querySelector("#input-box").addEventListener("input", function(){

//     let task = document.getElementById("input-box").value;
//     let list = document.querySelector("#one");
//     list.lastElementChild.textContent = task;
// })


var nums = ['#one','#two','#three','#four','#five','#six','#seven','#eight','#nine','#ten'];

function addToTask()
{
    if (checkTask())
    {
        let task = document.getElementById("input-box").value;
        for (var i=0; i<=nums.length; i++)
        {
            if (document.querySelector(nums[i]).lastElementChild.classList.contains("empty"))
            {
                let list = document.querySelector(nums[i]).lastElementChild;
                list.textContent = task;
                document.querySelector(nums[i]).lastElementChild.classList.remove("empty");
                document.querySelector(nums[i]).lastElementChild.classList.add("full");
                document.getElementById("input-box").value= "";
                break;
            }
        }

    }
}

function checkTask()
{
    let task = document.getElementById("input-box").value;
    return task.trim() !== "";

}

function crossTask(id)
{
    let list = document.getElementById(id).lastElementChild;
    if (list.classList.contains("full"))
    {
        list.classList.add("strike");
    }
}

document.querySelector(".list-group").addEventListener("click", calculateProgress)

document.querySelector("#container button").addEventListener("click", calculateProgress);


function calculateProgress(){
    var totalCount = 0;
    var strikeCount = 0;
    for (var i=0; i<nums.length; i++)
    {
        if (document.querySelector(nums[i]).lastElementChild.classList.contains("full"))
        {
            totalCount++;
        }
        if (document.querySelector(nums[i]).lastElementChild.classList.contains("strike"))
        {
            strikeCount++;
        }

    }

    var percentage;
    percentage = (strikeCount / totalCount) * 100;
    percentage = "" + percentage + "%";
    document.querySelector("#progress").style.width = percentage;

}

function storeProgress()
{
    let percentage = document.querySelector("#progress").style.width;
    sessionStorage.setItem("progress-percentage", percentage);
}

function getLocalDate() {
    let dateTime = new Date();
    let day = dateTime.toLocaleString('en-US', { weekday: 'long' });
    let month = dateTime.toLocaleString('en-US', { month: 'long' });
    let date = dateTime.getDate();

    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;
    document.getElementById("month").textContent = month;
}

document.addEventListener("DOMContentLoaded", getLocalDate);




