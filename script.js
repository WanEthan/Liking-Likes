

var count1 = 9;
var count2 = 12;
var count3 = 10;

var countCard;

function addOne(likename) {

    if (likename == "likes1") {
        var countCard1 = document.querySelector(".likes1")
        count1++;
        countCard1.innerText = count1 + " like(s)";
    }

    if (likename == "likes2") {
        var countCard2 = document.querySelector(".likes2")
        count2++;
        countCard2.innerText = count2 + " like(s)";
    }

    if (likename == "likes3") {
        var countCard3 = document.querySelector(".likes3")
        count3++;
        countCard3.innerText = count3 + " like(s)";
    }

}