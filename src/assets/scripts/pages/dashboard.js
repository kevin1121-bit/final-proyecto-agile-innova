import { addComment } from "../service/comments/comments.js";

const formDate = document.getElementById("form-date");
const buttonAddComment = document.getElementById("add-comment");


formDate.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
})

buttonAddComment.addEventListener("click", () => {

  let commentText = document.getElementById("commentText").value;

  if (commentText.trim() === "") {
    alert("Ingrese tu nombre y agrega un commentario.");
    return;
  }

  var newComment = document.createElement("div");
  newComment.className = "comment";

  var commentContent = document.createElement("div");
  commentContent.className = "comment-content";

  var userNameElement = document.createElement("h4");
  userNameElement.className = "user-name";
  userNameElement.textContent = "kevin";

  var commentTextElement = document.createElement("p");
  commentTextElement.className = "comment-text";
  commentTextElement.textContent = commentText;

  commentContent.appendChild(userNameElement);
  commentContent.appendChild(commentTextElement);

  newComment.appendChild(commentContent);

  var commentsContainer = document.getElementById("comments-container");
  commentsContainer.appendChild(newComment);

  document.getElementById("commentText").value = "";

  
  addComment(commentText);
}) 