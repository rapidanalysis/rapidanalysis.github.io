# Numeric Processing 

The following API endpoints perform analysis on numeric input. 

***

### Trend Analysis

Analyse and predict trends using regression by inputting a set of numbers, some numeric lables, and a prediction value.     

::: tip Parameters
`endpoint` : https://api.weburban.com/numeric/to-trend    
`data` : JSON array of numbers`    
`labels` : Numeric array of numbers as labels     
`predict` : JSON array of numbers used to predict a label     
`regression` : The type of regression which can be `linear` or `logistic`     
:::

Example of how this would be implemented in shown below. 

::: details Explain what these numbers in mean
In the example below, the data provided are two arbitrary numbers [_a, b_] put together in a set of other arbitrary numbers as the inputs for `data`. Each set of numbers [_a, b_] corresponds with the `label` in order. In this example, _a_ multiplied by _b_ is the label value. The `predict` value of `[[2,7]]` asks the linear regression model to predict the label without knowing how the numbers are related. 
:::

::: code-group

```js [curl]
curl --location 'https://api.weburban.com/text/to-vector' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "data" : [[2,1], [2,2], [2,3], [2,4], [2,5], [2,6]],
    "labels" : [2,4,6,8,10,12],
    "predict" : [[2, 7]],
    "regression" : "linear"
}'
```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "data" : [[2,1], [2,2], [2,3], [2,4], [2,5], [2,6]],
    "labels" : [2,4,6,8,10,12],
    "predict" : [[2, 7]],
    "regression" : "linear"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.weburban.com/text/to-vector", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
:::
