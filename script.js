const viewMoreBtn = document.getElementById("view-more-btn");
const viewLessbtn = document.getElementById("view-less-btn");
const initiallyHidden = document.getElementsByClassName("initially-hidden");

// Functionality for view more/less articles

viewMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  for (blog of initiallyHidden) {
    blog.style.display = "block";
  }
  viewMoreBtn.style.display = "none";
  viewLessbtn.style.display = "block";
});

viewLessbtn.addEventListener("click", function (e) {
  e.preventDefault();
  for (blog of initiallyHidden) {
    blog.style.display = "none";
  }
  viewMoreBtn.style.display = "block";
  viewLessbtn.style.display = "none";
});
