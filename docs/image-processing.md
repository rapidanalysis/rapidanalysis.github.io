# Text Processing 

The following API endpoints perform analysis on an image input. 

***

### Recognise and extract text from an image

Analyse and extract the text shown in an image. Text is extracted from an image with a response as `simple` as a list of text or as `complex` as text and positional data.    

::: tip Parameters
`endpoint` : https://api.weburban.com/image/to-text    
`response` : either `simple` or `complex`    
`imageUrl` : the url for the image to be analysed    
:::

Example of how this would be implemented in shown below. 

::: code-group

```js [curl]
curl --location 'https://api.weburban.com/image/to-text' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "imageUrl" : "https://www.your-website.com/image.jpg"
}'
```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "imageUrl": "https://weburban-uploads-raw.s3.ap-southeast-2.amazonaws.com/poster.jpg"
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
:::

