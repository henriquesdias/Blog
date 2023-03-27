async function get(URL: string) {
  return fetch(URL, { method: "GET" });
}

const request = {
  get,
};

export default request;
