export const createPaginationBtnElement = (
  wrapperClass,
  btnClass,
  btnText,
  callback
) => {
  const btnWrapper = document.createElement("li");
  btnWrapper.className = wrapperClass;

  const btnComponent = document.createElement("button");
  btnComponent.addEventListener("click", callback);
  btnComponent.className = btnClass;
  btnComponent.innerHTML = btnText;
  btnWrapper.appendChild(btnComponent);

  return btnWrapper;
};
