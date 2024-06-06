// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    modalImg1.alt = this.alt;
    captionText1.innerHTML = this.alt;
}

var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    modalImg2.alt = this.alt;
    captionText2.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
modal1.onclick = function() {
    modalImg1.className += " out";
    setTimeout(function() {
       modal1.style.display = "none";
       modalImg1.className = "modal-content";
     }, 400);
    
}

modal2.onclick = function() {
    modalImg2.className += " out";
    setTimeout(function() {
       modal2.style.display = "none";
       modalImg2.className = "modal-content";
     }, 400);
    
} 
