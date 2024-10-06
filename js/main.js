const btnLeft = $('#menu-btn').offset().left;

$("#menu-btn , #x").on("click" , function(){
    if($('#menu-btn').offset().left == btnLeft )
    {
        $('#menu').animate({width:'20%'},1000); 
        $('#menu-btn').animate({left:'21%'},1000); 
    }
    else{
        $('#menu').animate({width:'0%'},1000); 
        $('#menu-btn').animate({left:'1%'},1000);
    } 
})

function closeAll(time,res)
{
    $("#fst-p, #sec-p, #trd-p, #fth-p").not(`#${res}`).slideUp(time);
}
closeAll(0);
$("#fst , #sec , #trd , #fth").on("click",function(e){
    let res = e.target.attributes[0].value;
    res += '-p';
    closeAll(800,res);
    console.log(res);
    
    $(`#${res}`).slideToggle(800);
})

var countDownDate = new Date("Nov 10, 2024 12:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = (`${days} days`);
  document.getElementById("hour").innerHTML = (`${hours} hours`);
  document.getElementById("min").innerHTML = (`${minutes} minutes`);
  document.getElementById("secs").innerHTML = (`${seconds} seconds`);
  

}, 1000);

const textarea = document.getElementById('area');
const charCountDisplay = document.getElementById('Count');

textarea.addEventListener('input', function() {
    const maxLength = 100;
    const currentLength = textarea.value.length;
    const remainingChars = maxLength - currentLength;

    charCountDisplay.innerHTML = `<span class="text-danger">${remainingChars}</span> characters left`;
});


