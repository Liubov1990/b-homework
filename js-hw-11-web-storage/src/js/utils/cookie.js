export const setCookie = (name, value, hours) => {
  let expiry = "";
  if (hours) {
    let date = new Date();
    date.setTime(date.getTime() + hours * 2 * 60 * 60 * 1000);
    expiry = date.toUTCString();
  }

  document.cookie = `${name}=${value};expires=${expiry}`;

  // const cookieAge = 3600; // 1h
  // document.cookie = `${name}=${value}; max-age=${date.getTime() + cookieAge}`;
};

export const getCookie = (name) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
