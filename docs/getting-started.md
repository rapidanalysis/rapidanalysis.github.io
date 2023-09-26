---
outline: deep
---

# Getting Started

These pages contain code examples for querying the RapidAnalysis API. All queries use JSON in the request body to return a response from the server using POST. 

::: details What is an API?
APIs serve as the bridge that enables seamless communication and data exchange between different software systems, allowing them to work together harmoniously. 
For more information about what an API can do, please see: https://weburban.com/2023/09/21/what-is-an-api-how-does-it-work/
:::

::: tip
All calls require your own unique secret key, set as `x-api-key` in the request header. 
:::

::: info Skip the Basics
If you want to skip the basics and head straight to implementation, we have Postman documentation here: https://www.postman.com/weburban/workspace/rapidanalysis-api-by-weburban/documentation/303357-92a170b1-f6a6-430c-9b88-a441ab05abf8
:::

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

The response for a request will be a JSON object. An example of a response is shown below. 

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
