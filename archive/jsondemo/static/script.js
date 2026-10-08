const newworker = `{
  "name": "",
  "barcode": "",
  "position": ""
}`;
const newhours = `{
  "start": "0001-01-01T00:00:00Z",
  "duration": 0.0,
  "department": "",
  "task": "",
  "worker_id": 0,
  "harvest_id": 0,
  "process_id": 0
}`;
const newcrop = `{
  "name": "",
  "season": "",
  "type": ""
}`;
const newharvest = `{
  "weight": 0.0,
  "bin": "",
  "crop_id": 0
}`;
const newprocess = `{
  "unit": "",
  "quantity": 0,
  "weight": 0.0,
  "cull": 0.0,
  "student_use": 0.0,
  "value_added": 0.0,
  "harvest_id": 0,
  "product_id": 0
}`;
const newproduct = `{
  "name": "",
  "type": "",
  "unit": "",
  "price": 0,
  "quantity": 0,
  "weight": 0,
  "length": 0,
  "width": 0,
  "height": 0
}`;
const newsale = `{
  "type": "",
  "quantity": 0,
  "price": 0,
  "tax": 0,
  "total": 0,
  "product_id": 0
}`;
document.getElementById("json").value = newworker;
const endpoint = document.getElementById("endpoint");
endpoint.addEventListener("change", (e) => {
    let val = "";
    switch (e.target.value) {
      case "worker/new":
        val = newworker;
        break;
      case "hours/new":
        val = newhours;
        break;
      case "crop/new":
        val = newcrop;
        break;
      case "harvest/new":
        val = newharvest;
        break;
      case "process/new":
        val = newprocess;
        break;
      case "product/new":
        val = newproduct;
        break;
      case "sale/new":
        val = newsale;
        break;
    }
    document.getElementById("json").value = val;
});
const url = document.getElementById("url").value;
const join = ':8078/';
//const join = '/';
function submitapi() {
    const val = endpoint.value;
    if (endpoint == "") {
	  document.getElementById("postresponse").innerText = "Invalid Endpoint";
        return;
    }
    const payload = document.getElementById("json").value;
	  fetch(url+join+endpoint.value, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
	  }).then(response => {
		    if (!response.ok) {
		        console.log(response);
        }
        return response.json();
    }).then(data => {
        console.log(data);
        const result = "RESPONSE:\n"+JSON.stringify(data, null, 2);
		    document.getElementById("postresponse").innerText = result;
        
	  });
}
function getdata(endpoint) {
  fetch(endpoint), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  }).then(response => {
      if (!response.ok) {
          console.log(response);
      }
      return response.json();
  }).then(data => {
      console.log(data);
      const result = "DATA:\n"+JSON.stringify(data, null, 2);
      document.getElementById("getresponse").innerText = result;    
  });
}
document.querySelectorAll('#datalinks li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    getdata(url+join+e.target.getAttribute('href'));
    document.querySelectorAll('#datalinks li a').forEach(l => {
      l.classList.remove('active');
    });
    link.classList.add('active');
  });
});
