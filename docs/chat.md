---
outline: deep
---

# Chat with our LLM

Type a question in the prompt input box below to see a sample of our LLM bot. The bot is best used with a document or PDF to augment it with retrieval information. 

::: warning 
If the box below is empty you will need to <a href='/getting-started'>Register or Sign In</a> before using this prompt. 
:::

<script setup>
import axios from "axios";
import { onMounted } from 'vue';

function callapi() {
    const comment = document.getElementById('chatText').value;
    prompt(comment, 'me')
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    const q = { "prompt" : comment }
    const url = "https://api.weburban.com/generate/text-from-text";
    const json = JSON.stringify(q);

    axios.defaults.headers['x-api-key'] = document.getElementById("token").value;
    console.log(document.getElementById("token").value)
    
    axios.post(url, json, config)
        .then(response => {
            console.log(response.data);
            const botSaid = response.data["output"];
            prompt(botSaid, "bot");
    })
    .catch(error => {
        console.error(error);
        prompt(error, "error, server may be warming up");
    });
}

function prompt(comment, id) {
    const chatText = document.getElementById("chatText");
    const newDiv = document.createElement("div");
    newDiv.id = id
    const text = document.createTextNode(id + " : " + comment);
    newDiv.appendChild(text);
    var chatList = document.getElementById("chatList");
    chatList.appendChild(newDiv)
}

onMounted(() => {
  const apiKey = localStorage.getItem('apiKey');
  const token = document.getElementById("token");
  token.value = apiKey != null ? apiKey : '';
});

</script>

<input style='
border-style: solid; 
color: black; 
background: #eeeeee;
width: 300px;
border-radius:8px;
padding: 1pt 10pt 1pt 10pt 
' id="token" type="text" label='Token' placeholder="Paste API Key here" value="">

Type a question: <br />

<input style='
border-style: solid; 
color: black; 
background: #eeeeee;
width: 300px;
border-radius:8px;
padding: 1pt 10pt 1pt 10pt 
' id="chatText" type="text" label='Prompt' placeholder="Prompt text here" value="">

<button style="
border-radius: 8px; 
color: white; 
background: green; 
padding: 1pt 10pt 1pt 10pt 
" @click="callapi">Send Prompt</button>

<div id="chatList"></div>
