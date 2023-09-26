# Text Processing 

The following API endpoints perform analysis on text input. 

***

## Image to text recognition analysis endpoint

Text is extracted from an image with a response as a simple list of text or as complex as text and positional data.\
`response` : either `simple` or `complex`\
`imageUrl` : the url for the image to be analysed

::: code-group
```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "n_features": 100,
  "text1": "This guide describes best practices in using eye tracking technology for research in a variety of disciplines. A basic outline of the anatomy and physiology of the eyes and of eye movements is provided, along with a description of the sorts of research questions eye tracking can address. We then explain how eye tracking technology works and what sorts of data it generates, and provide guidance on how to select and use an eye tracker as well as selecting appropriate eye tracking measures. Challenges to the validity of eye tracking studies are described, along with recommendations for overcoming these challenges. We then outline correct reporting standards for eye tracking studies.",
  "text2": "Participants following spoken instructions to touch or move either real objects or objects on a computer screen make saccadic eye movements (to the objects) that are closely time-locked to relevant information in the speech stream. Monitoring eye movements using a head-mounted eye-camera allows one to use the locations and latencies of fixations to examine spoken word recognition during continuous speech in natural contexts. Preliminary work using this paradigm provides striking evidence for the continuous and incremental nature of comprehension, as well as clear effects of visual context on the earliest moments of linguistic processing. We review the eye-movement paradigm and refer to recent experiments applying the paradigm to issues of spoken word recognition (e.g. lexical competitor effects), syntactic processing (e.g. the interaction of referential context and ambiguity resolution), reference resolution (disambiguating temporarily ambiguous referential phrases), focus (modulating the salience of certain objects via contrastive stress), as well as issues in cross-modality integration that are central to evaluating the modularity hypothesis."
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

```js [curl]
curl --location 'https://api.weburban.com/text/to-vector' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "n_features" : 100,
    "text1" : "This guide describes best practices in using eye tracking technology for research in a variety of disciplines. A basic outline of the anatomy and physiology of the eyes and of eye movements is provided, along with a description of the sorts of research questions eye tracking can address. We then explain how eye tracking technology works and what sorts of data it generates, and provide guidance on how to select and use an eye tracker as well as selecting appropriate eye tracking measures. Challenges to the validity of eye tracking studies are described, along with recommendations for overcoming these challenges. We then outline correct reporting standards for eye tracking studies.",
    "text2" : "Participants following spoken instructions to touch or move either real objects or objects on a computer screen make saccadic eye movements (to the objects) that are closely time-locked to relevant information in the speech stream. Monitoring eye movements using a head-mounted eye-camera allows one to use the locations and latencies of fixations to examine spoken word recognition during continuous speech in natural contexts. Preliminary work using this paradigm provides striking evidence for the continuous and incremental nature of comprehension, as well as clear effects of visual context on the earliest moments of linguistic processing. We review the eye-movement paradigm and refer to recent experiments applying the paradigm to issues of spoken word recognition (e.g. lexical competitor effects), syntactic processing (e.g. the interaction of referential context and ambiguity resolution), reference resolution (disambiguating temporarily ambiguous referential phrases), focus (modulating the salience of certain objects via contrastive stress), as well as issues in cross-modality integration that are central to evaluating the modularity hypothesis."
}'
```

```swift [Swift]
let parameters = "{\n    \"n_features\" : 100,\n    \"text1\" : \"This guide describes best practices in using eye tracking technology for research in a variety of disciplines. A basic outline of the anatomy and physiology of the eyes and of eye movements is provided, along with a description of the sorts of research questions eye tracking can address. We then explain how eye tracking technology works and what sorts of data it generates, and provide guidance on how to select and use an eye tracker as well as selecting appropriate eye tracking measures. Challenges to the validity of eye tracking studies are described, along with recommendations for overcoming these challenges. We then outline correct reporting standards for eye tracking studies.\",\n    \"text2\" : \"Participants following spoken instructions to touch or move either real objects or objects on a computer screen make saccadic eye movements (to the objects) that are closely time-locked to relevant information in the speech stream. Monitoring eye movements using a head-mounted eye-camera allows one to use the locations and latencies of fixations to examine spoken word recognition during continuous speech in natural contexts. Preliminary work using this paradigm provides striking evidence for the continuous and incremental nature of comprehension, as well as clear effects of visual context on the earliest moments of linguistic processing. We review the eye-movement paradigm and refer to recent experiments applying the paradigm to issues of spoken word recognition (e.g. lexical competitor effects), syntactic processing (e.g. the interaction of referential context and ambiguity resolution), reference resolution (disambiguating temporarily ambiguous referential phrases), focus (modulating the salience of certain objects via contrastive stress), as well as issues in cross-modality integration that are central to evaluating the modularity hypothesis.\"\n}"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://api.weburban.com/text/to-vector")!,timeoutInterval: Double.infinity)
request.addValue("application/json", forHTTPHeaderField: "Accept")
request.addValue("<API Key>", forHTTPHeaderField: "x-api-key")
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

request.httpMethod = "POST"
request.httpBody = postData

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()
```

```kotlin [Kotlin]
:::

