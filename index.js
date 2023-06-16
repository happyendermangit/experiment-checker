let data;

const request = new XMLHttpRequest();
request.open('GET', 'https://api.distools.xhyrom.dev/v2/experiments', true);
request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    const json = JSON.parse(this.response);
    data = json.experiments;
  } else {
    console.error('Error fetching data:', this.status, this.statusText);
  }
};
request.onerror = function() {
  console.error('Error fetching data:', this.status, this.statusText);
};
request.send();


function check(args) {
  let splited = args.split(':');
  let experiment = splited[0];
  let murmurhash3 = hash(args);

  let ids = [];
  for (let d of data) {
    ids.push(Object.keys(d)[0]);
  }

  if (ids.indexOf(experiment) !== -1) {
    let url = 'https://api.distools.xhyrom.dev/v2/eligible';
    let body = {
      "experiment_id": experiment,
      "guild": {
        "id": splited[1],
        "features": []
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {


      let result = '';
      result = data.eligible ? `❌ You don't have ${experiment} in ${splited[1]} (DEBUG: ||${murmurhash3}||)` : `✅ You do have ${experiment} in ${splited[1]} (DEBUG: ||${murmurhash3}||)`;
      if (result.startsWith('✅')) {
        let b =  data.bucket 
        result += b == null ? `(None)`: `(Treatment ${b})`;
      }
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error('API request error:', error);
    });
  } else {
    console.log("❌ Experiment doesn't exist!");
    return "❌ Experiment doesn't exist!";
  }
}
