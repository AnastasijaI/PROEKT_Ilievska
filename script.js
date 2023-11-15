function processOrder() {
    alert('Order processed successfully!');
}

function addComment() {
    var comment = document.getElementById('commentInput').value;
    var commentsDiv = document.getElementById('comments');
    var newComment = document.createElement('p');
    newComment.textContent = comment;
    commentsDiv.appendChild(newComment);
    document.getElementById('commentInput').value = ''; 
}

var isLiked = false;
var brlajk = 0;

function Lajkovi() {
    isLiked = !isLiked;
    var likeButton = document.getElementById('likeButton');
    likeButton.textContent = isLiked ? 'Unlike' : 'Like';

    brlajk = isLiked ? brlajk + 1 : brlajk - 1;
    update();
}

function update() {
    var likesDisplay = document.getElementById('likesCount');
    likesDisplay.textContent = brlajk + ' Likes';
}


document.getElementById("input-image").addEventListener("change", function () {
    var imageContainer = document.getElementById("image-container");
    var src = URL.createObjectURL(this.files[0]);

    var newImage = document.createElement("img");
    newImage.src = src;
    newImage.alt = "Uploaded Image";
    imageContainer.appendChild(newImage);
});


