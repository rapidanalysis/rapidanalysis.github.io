---
outline: deep
---

# Image Processing 

The following API endpoints perform analysis on an image input. 

***

### Image Prediction

Analyse an image and make a prediction about the primary subject depicted.    

::: tip Parameters
`endpoint` : https://api.weburban.com/image/to-predict    
`top` : (int) the number of top predictions returned   
:::

Example of how this would be implemented in shown below. 

::: code-group

```js [curl]
curl --location 'https://api.weburban.com/image/to-predict' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "url" : "https://www.your-website.com/image.jpg",
    "top" : 3
}'
```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "imageUrl": "https://www.your-website.com/image.jpg"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.weburban.com/image/to-predict", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
:::

![Koala](/koala.jpg)

Example input for [this image](https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg) on Wikipedia would be:

```json
{
    "Version": "1.0",
    "Output": {
        "predictions": [
            {
                "label": "koala",
                "score": 0.996078431372549
            },
            {
                "label": "indri",
                "score": 0.00392156862745098
            },
            {
                "label": "toilet tissue",
                "score": 0.0
            }
        ]
    }
}
```


***

### Recognise and extract text from an image

Analyse and extract the text shown in an image. Text is extracted from an image with a response as `simple` as a list of text or as `complex` as text and positional data.    

::: tip Parameters
`endpoint` : https://api.weburban.com/image/to-text    
`response` : either `simple` or `complex`    
`imageUrl` : the url of the image to be analysed    
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

***

### Image Colour k-Means
Colours are extracted using k-means analysis and output as RGB values, with their frequency. This analysis will provide a summary of `k` colours in an image. 

::: tip Parameters
`endpoint` : https://api.weburban.com/image/to-text    
`k` : the final number of extracted colours     
`imageUrl` : the url of the image to be analysed    
:::

Example of how this would be implemented in shown below. 

::: code-group

```js [curl]
curl --location 'https://api.weburban.com/image/kmeans-palette' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "k" : 16,
    "imageUrl" : "https://www.your-website.com/image.jpg"
}'
```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "k": 16,
  "imageUrl": "https://www.your-website.com/image.jpg"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.weburban.com/image/kmeans-palette", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
:::
