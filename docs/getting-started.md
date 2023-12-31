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

