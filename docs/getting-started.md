---
outline: deep
---

<script setup>
import axios from "axios";
import { watchEffect } from 'vue';
import { onMounted } from 'vue';

const logoutUri = "logout?client_id=7mj6g74m7h9q5m127ehtnlo3m0&logout_uri="
const loginUri = "login?client_id=7mj6g74m7h9q5m127ehtnlo3m0&response_type=token&redirect_uri="

onMounted(() => {
  const apiKeyButton = document.getElementById("apiKeyLoginButton");
  apiKeyButton.innerText = "Sign In or Register Here";
  apiAction();
});

watchEffect(() => {  
  if (window.location.hash) {    
    const queryString = window.location.hash.replace('#','?');    
    const urlParams = new URLSearchParams(queryString);
    const jwt = urlParams.get('id_token');        

    const config = {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    const url = "https://p0j19rggqa.execute-api.ap-southeast-2.amazonaws.com/v1/test";
    const json = JSON.stringify({ "token" : jwt});
    const data = { 'body' : json }

    axios.post(url, data, config)
    .then(response => {
        const jsonApiKey = JSON.parse(response.data.body);
        const apiKey = jsonApiKey["Output"]["apikey"];   
        const apiKeyEmail = jsonApiKey["Output"]["email"];
        // Set Local Storage
        localStorage.setItem("apiKey", apiKey);
        localStorage.setItem("apiKeyEmail", apiKeyEmail);
        apiAction();
    }).catch(error => console.error(error));
    } 
});

function apiAction() {
  const apiKey = localStorage.getItem("apiKey");
  const apiKeyEmail = localStorage.getItem("apiKeyEmail");
  const apiKeyId = document.getElementById("apiKey");
  apiKeyId.innerText = "API KEY: " + (apiKey == null ? '(Sign In for API Key)' : apiKey);
  const apiKeyButton = document.getElementById("apiKeyLoginButton");
  var link = "https://rapid.auth.ap-southeast-2.amazoncognito.com/"

  if( apiKey != null) {    
    link = link + logoutUri
    apiKeyButton.innerText = "Sign Out " + apiKeyEmail;
    apiKeyButton.onclick = removeLocalStorage;
  } else {
    link = link + loginUri
    apiKeyButton.innerText = "Sign In or Register Here";
    apiKeyButton.onclick = null;
  }
  
  link = link + encodeURIComponent(window.location.origin)
  link = link + encodeURIComponent("/getting-started.html")
  apiKeyButton.href = link
}

function removeLocalStorage() {
  localStorage.removeItem("apiKey"); 
  localStorage.removeItem("apiKeyEmail");
}

</script>
<!-- <button @click="callapi">Test Button</button> -->

# Account Settings

### Create an Account and Sign In

New accounts are free and developer accounts will allow you to use the API for 5,000 calls per month. 

<a id="apiKeyLoginButton" data-v-2dba8ca9="" data-v-72cc4481="" style="text-decoration: none" class="VPButton medium brand" href="">Sign In or Register Here</a>

### Your API Key

All calls require your own unique secret key, set as `x-api-key` in the request header. After you Register and Sign In, you will see your API Key below. 

<div style="fontWeight: bold" id='apiKey'>API Key: -</div>

::: warning
None of these calls will work without an API Key. The developer key is always free!
:::

## Getting Started

These pages contain code examples for querying the RapidAnalysis API. All queries use JSON in the request body to return a response from the server using POST. 

::: details What is an API?
APIs serve as the bridge that enables seamless communication and data exchange between different software systems, allowing them to work together harmoniously. 
For more information about what an API can do, please see: https://weburban.com/2023/09/21/what-is-an-api-how-does-it-work/
:::

::: info Skip the Basics
If you want to skip the basics and head straight to implementation, we have Postman documentation here: https://www.postman.com/weburban/workspace/rapidanalysis-api-by-weburban/documentation/303357-92a170b1-f6a6-430c-9b88-a441ab05abf8
:::

## API Examples

The following code will detect text in an image using Node.js to make an API call with a URL pointing to the image. Please note: the `x-api-key` in the line highlighted below is a placeholder for your real key. 

::: info Node.js code to recognise text in an image 
```js{10}
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.weburban.com/image/to-text',
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    'x-api-key': 'xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'
  },
  body: JSON.stringify({
    "imageUrl": "https://www.your-website.com/image.jpg"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```
:::

The API is language agnostic and can be called from any language, including Go Native, and shown below. Please note: the `x-api-key` in the line highlighted below is a placeholder for your real key. 

::: info Go Native code to recognise text in an image
```go{29}
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.weburban.com/image/to-text"
  method := "POST"

  payload := strings.NewReader(`{
    "imageUrl" : "https://www.your-website.com/image.jpg"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Accept", "application/json")
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("x-api-key", "xxxxx-xxxxx-xxxxx-xxxxx-xxxxx")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```
:::

Finally, this example shows how the call can be made using a Javascript fetch request. Please note: the `x-api-key` in the line highlighted below is a placeholder for your real key. 

```js{4}
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "xxxxx-xxxxx-xxxxx-xxxxx-xxxxx");

var raw = JSON.stringify({
  "imageUrl": "https://www.your-website.com/image.jpg"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.weburban.com/image/to-text", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

The response from the server will always be a JSON object. An example of a response is shown below. 

```json
{
    "Version": "1.0",
    "Output": {
        "text": [
            "HUMPHREY",
            "INGRID",
            "PAUL",
            "BOGART BERGMAN HENREID"
        ]
    }
}
```

This JSON response will always contain `Version` and `Output` data. Versions can be targetted for specific legacy algorithms used by the endpoints. Please see detailed documentation for syntax and specifications. 
