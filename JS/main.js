const parallax1= document.getElementById("parallax1");
window.addEventListener("scroll", function ()
{
   let offset = window.pageYOffset;
   parallax.style.backgroundPositionY = offset 
   * 0.5 + "px";
})
const parallax2= document.getElementById("parallax2");
window.addEventListener("scroll", function ()
{
   let offset = window.pageYOffset;
   parallax.style.backgroundPositionY = offset 
   * 0.7 + "px";
})
const parallax3= document.getElementById("parallax3");
window.addEventListener("scroll", function ()
{
   let offset = window.pageYOffset;
   parallax.style.backgroundPositionY = offset 
   * 0.7 + "px";
})


