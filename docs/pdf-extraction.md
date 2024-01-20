---
outline: deep
---

# Text API Example

### PDF Extraction and Analysis

Below is an example of some of the things you can do using RapidAnalysis ML endpoints on a PDF.

::: warning Token
If your token is not automatically pasted into the text field below, be sure to copy your API Token and pase it below to get started. Then press the green Analyse and Compare button below. 
:::

<script setup>
import { onMounted } from 'vue';
import axios from "axios";

onMounted(() => {
  const tokenField = document.getElementById("token");
  const apiKey = localStorage.getItem("apiKey");
  tokenField.value = apiKey != null ? apiKey : '' ;  
});

function pdfToText() {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const pdfUrl = document.getElementById("pdfUrl").value;
    const q = { "url" : pdfUrl }
    const url = "https://api.weburban.com/text/from-pdf";
    const json = JSON.stringify(q);

    axios.defaults.headers['x-api-key'] = document.getElementById("token").value;
    console.log(document.getElementById("token").value)
            
    axios.post(url, json, config)
        .then(response => {
            console.log(response.data);
            const botSaid = response.data["Output"];
            prompt(botSaid, 'Extracted Text');
    })
    .catch(error => {
        console.error(error);
        prompt(error, "error, server call interrupted");
    });
}

function prompt(comment, id) {            
    const newDiv = document.createElement("p");
    newDiv.id = id
    const text = document.createTextNode(id + " : " + comment);
    newDiv.appendChild(text);
    var chatList = document.getElementById("chatList");
    chatList.appendChild(newDiv)
}

function getText(objName) {
    return document.getElementById(objName).value
}

function removeAll() {
    const parent = document.getElementById("chatList")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

function callapi() {
  removeAll();
  pdfToText();
}
</script>

<input style='
border-style: solid; 
color: black; 
background: #eeeeee;
width: 300px;
border-radius:8px;
padding: 1pt 10pt 1pt 10pt 
' id="token" type="text" label='Token' placeholder="Paste token here" value="">
        
### URL of PDF

<input style='
border-style: solid; 
color: black; 
background: #eeeeee;
width: 400px;
border-radius:8px;
padding: 1pt 10pt 1pt 10pt 
' id="pdfUrl" type="text" label='Token' placeholder="Paste URL of PDF here" value="">

<button style="
border-radius: 8px; 
color: white; 
background: green; 
padding: 1pt 10pt 1pt 10pt 
" @click="callapi">Extract Text</button>

<hr/>

### Output

<div id="chatList"></div>
