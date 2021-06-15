function updatescore()
{
    score = score +1;
    document.getElementById("score").innerHTML ="score: " + score;

}
function savescore()
{
    localStorage.setitem("score" , score);
}
function nextpage (){
    window.location= "activity_2.html";
}