function addComment() {

    let username = document.getElementById("username").value;
    let commentText = document.getElementById("commentText").value;
  
    if (username.trim() === "" || commentText.trim() === "") {
      alert("Ingrese tu nombre y agrega un comentario.");
      return;
    }

    var newComment = document.createElement("div");
    newComment.className = "comment";
  
    var avatar = document.createElement("img");
    avatar.src = "user-placeholder.jpg";
    avatar.className = "user-avatar";
  
    var commentContent = document.createElement("div");
    commentContent.className = "comment-content";
  
    var userNameElement = document.createElement("h4");
    userNameElement.className = "user-name";
    userNameElement.textContent = username;
  
    var commentTextElement = document.createElement("p");
    commentTextElement.className = "comment-text";
    commentTextElement.textContent = commentText;

    commentContent.appendChild(userNameElement);
    commentContent.appendChild(commentTextElement);
  
    newComment.appendChild(avatar);
    newComment.appendChild(commentContent);
  
    var commentsContainer = document.getElementById("comments-container");
    commentsContainer.appendChild(newComment);
  

    document.getElementById("username").value = "";
    document.getElementById("commentText").value = "";
  }