export async function apicall(url: String, options: Object) {
  let jsondata: any = {};
  try {
    if (options) {
      const response = await fetch(import.meta.env.VITE_API + url, {
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
      const response = await fetch(import.meta.env.VITE_API + url);
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
