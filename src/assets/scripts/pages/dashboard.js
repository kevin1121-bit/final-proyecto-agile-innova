import { addComment } from "../service/comments/comments.js";
import { getAllPiedras } from "../service/piedras/piedras.js";
import { navigator } from "../main.js";

const formDate = document.getElementById("form-date");
const buttonAddComment = document.getElementById("add-comment");


formDate.addEventListener("submit", async (e) => {
  e.preventDefault();
  const piedras = await getAllPiedras();
  console.log(e.target[0].value)
  const date = new Date(e.target[0].value.split("-")[2],e.target[0].value.split("-")[1]);
  for (let i = 0; i < piedras[0].length; i++) {
    const startDate = new Date(piedras[0][i]["start-date"].split("/")[0],piedras[0][i]["start-date"].split("/")[1]);
    const endDate = new Date(piedras[0][i]["end-date"].split("/")[0],piedras[0][i]["end-date"].split("/")[1]);
    if(date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime()) {
      localStorage.setItem("piedra", JSON.stringify(piedras[0][i]));
      navigator("piedra")
    }
  }
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