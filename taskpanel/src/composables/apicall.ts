export async function apicall(url: String | any, options: Object = {}) {
  let jsondata: any = {};
  const urlval: String = toValue(url)
  try {
    if (Object.keys(options).length != 0) {
      const response = await fetch(import.meta.env.VITE_API + urlval, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(options),
      });
      if (!response.ok) {
        console.log(response.status);
      } else {
        jsondata = await response.json();
      }
    } else {
      const response = await fetch(import.meta.env.VITE_API + urlval, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        console.log(response.status);
      } else {
        jsondata = await response.json();
      }
    }
  } catch (e) {
    console.log(e);
  } finally {
    return jsondata;
  }
}

export default apicall
