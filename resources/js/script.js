// Personal Info JSON Data
fetch("/resources/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.image);
    // console.log(data.name);
    // console.log(data.username);
    // console.log(data.bio);

    let userImage = document.querySelector(".user-photo");
    userImage.src = data.image;

    let myName = document.querySelector(".name");
    myName.innerHTML = data.name;

    let username = document.querySelector(".username");
    username.innerHTML = data.username;

    let userBio = document.querySelector(".user-bio");
    userBio.innerHTML = data.bio;
  })
  .catch((error) => console.error(error));
