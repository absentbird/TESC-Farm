export async function apicall(url: String, options: Object) {
  let jsondata: any = {};
  try {
    const response = await fetch(import.meta.env.VITE_API + url);
    if (!response.ok) {
      console.log(response.status);
    } else {
      jsondata = await response.json();
    }
  } catch (e) {
    console.log(e);
  } finally {
    return jsondata;
  }
}
