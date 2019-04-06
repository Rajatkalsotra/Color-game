var pick;
var numsquare=6;
var colors=[];
var correct;
var disp=document.getElementById("disp");
var squares = document.querySelectorAll(".square");
var result = document.querySelector("#result");
var h1=document.querySelector("h1");
var resetbtn=document.querySelector("#resetbtn");
var mode=document.querySelectorAll(".mode");
disp.textContent=correct;
init();

function init(){
	modes();
	selectsquares();
	reset();
}
function modes(){
	for(var i=0;i<mode.length;i++)
	{
		mode[i].addEventListener("click",function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent=== "EASY" ? numsquare=3 : numsquare=6;
			reset();
		});
	}
}
function selectsquares(){
	for(var i=0;i<numsquare;i++)
	{
		squares[i].addEventListener("click",function(){
				pick=this.style.backgroundColor;
			if(pick===correct)
			{
				result.textContent="Correct!";
				change(pick);
				h1.style.backgroundColor=pick;
				resetbtn.textContent="PLAY AGAIN?";
			}
			else
			{
				this.style.backgroundColor="#232323";
				result.textContent="Try again!";
			}
		});
	}
}
function reset()
{
	colors=arraycolors(numsquare);
	result.textContent="";
	resetbtn.textContent="NEW COLORS";
	h1.style.backgroundColor="steelblue";
	correct=pickcolor();
	disp.textContent=correct;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display="none";
	}
}

resetbtn.addEventListener("click",function(){
	reset();
});

function change(color)
{
	for(i=0;i<numsquare;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function arraycolors(num)
{
	var arr=[];
	for (i=0;i<num;i++)
	{
		arr.push(randcolor());
	}
	return arr;
}
function randcolor()
{
	var r=Math.floor(Math.random()*258);
	var g=Math.floor(Math.random()*258);
	var b=Math.floor(Math.random()*258);
	return "rgb("+r+", "+g+", "+b+")";
} 
function pickcolor(){
	var col=Math.floor(Math.random()*colors.length);
	return colors[col];
} 