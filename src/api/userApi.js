import { get } from "babel-register/lib/cache";
import "whatwg-fetch";

export function getUsers() {
  return get("users");
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(res) {
  return res.json();
}

function onError(err) {
  console.error(err); // eslint-disable-line no-console
}
