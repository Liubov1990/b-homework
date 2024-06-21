export const tranqText = (elem) =>
  elem?.length > 110 ? elem.substring(0, 110) + "..." : elem;
