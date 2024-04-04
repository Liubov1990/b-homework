document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.querySelector("#upload-photo");
  const profilePhoto = document.querySelector(".popup__profile-photo");
  const resetFileInputBtn = document.querySelector(".popup__delete-photo-btn");

  const textInputColored = getComputedStyle(document.body).getPropertyValue(
    "--heading-color"
  );

  const textInputTransparent = getComputedStyle(document.body).getPropertyValue(
    "--transparent"
  );

  function uploadFile(event) {
    const srcPath = event.target?.files[0];

    if (srcPath) {
      profilePhoto.src = URL.createObjectURL(srcPath);
      fileInput.style.color = textInputColored;
      fileInput.blur();
    } else {
      profilePhoto.src = "./public/profile_photo.png";
      fileInput.style.color = textInputTransparent;
      fileInput.blur();
    }
  }

  function clearFileInput() {
    fileInput.style.color = textInputTransparent;
    profilePhoto.src = "./public/profile_photo.png";
  }

  fileInput.addEventListener("change", uploadFile);
  resetFileInputBtn.addEventListener("click", clearFileInput);
});
