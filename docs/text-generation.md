---
outline: deep
---

# Text Generation 

The following API endpoints generate text based on input. 


***

### Natural Language Chat

Send natural language text to this endpoint for a text response back based on general intelligence.         

::: tip Parameters
`endpoint` : https://api.weburban.com/generate/text-from-text     
`prompt` : (text) The text prompt you want to send           
:::

Example of how this would be implemented in shown below.     

::: code-group

```js [curl]
curl --location 'https://api.weburban.com/generate/text-from-text' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "prompt" : "How do I cook an egg?"
}'
```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "prompt" : "How do I cook an egg?"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.weburban.com/generate/text-from-text", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
:::





***

### Generate new text from document

Create a new text arrangement from ngrams of an existing text document. The new generated text draws from logical arrangements in the provided text document.         

::: tip Parameters
`endpoint` : https://api.weburban.com/generate/text-from-ngram     
`url` : (url) Text file at url for ngram creation      
`length` : (int) number of words the new text should contain`       
:::

Example of how this would be implemented in shown below.     

::: code-group

```js [curl]
curl --location 'https://api.weburban.com/generate/text-from-ngram' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "url" : "https://www.gutenberg.org/cache/epub/1342/pg1342.txt",
    "length" : 100
}'
```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "url" : "https://www.gutenberg.org/cache/epub/1342/pg1342.txt",
  "length" : 100
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.weburban.com/generate/text-from-ngram", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
:::

The output of the request above will produce the following response.

::: warning Please note!
Your `text` response will be different to the one shown below because the concatenated ngrams in this endpoint are random and your text `url` may contain different phrases and words. 
:::

```json
{
    "Version": "1.0",
    "Output": {
        "text": "Elizabeth was forced to put it out of marital authority, and so small a family of five daughters, in favour of matrimony; it remains to be alone, and fearful of its proprietor, and, with no very striking resemblance"
    }
}
```





