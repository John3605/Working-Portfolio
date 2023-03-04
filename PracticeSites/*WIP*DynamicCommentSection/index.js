function createEnclosingDiv() {
	var enclosingDiv = document.createElement("div");
	enclosingDiv.classList.add("comment");
	return enclosingDiv;
	
}

function createAvatar(initials) {
	var newAvatar = document.createElement("span");
	newAvatar.innerText = initials;
	newAvatar.classList.add("avatar");
	return newAvatar;
}

function createText(text) {
	var newText = document.createElement("span");
	newText.classList.add("text");
	newText.innerText = text;
	return newText;
}

function addComment() {
 let commentsDiv = document.getElementById("commentSection");
	let initialsInput = document.getElementById("initials").value;
	let textInput = document.getElementById("commentText").value;

	let enclosingDiv = createEnclosingDiv();
	let avatar = createAvatar(initialsInput);
	let text = createText(textInput);
}
