---
outline: deep
---

# Text Processing 

The following API endpoints perform analysis on text input. 

***

### Measure text similarity using Hashing Vectorizer

Measure the similarity between `text1` and `text2` as two different paragraphs of text. Method uses Bray-Curtis dissimilarity for analysis. Please see details about this method here: https://en.wikipedia.org/wiki/Bray%E2%80%93Curtis_dissimilarity

::: tip Parameters
`endpoint` : https://api.weburban.com/text/to-vector    
`n_features` : (int) number of features the paragraphs will be reduced.    
`text1` : (string) the first text paragraph used in the analysis.    
`text2` : (string) the second text paragraph used in the analysis.    
:::

Example of how this would be implemented in shown below. 

::: code-group

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

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "n_features": 100,
  "text1": "Outlier scanpaths identification is a crucial preliminary step in designing visual software, digital media analysis, radiology training and clustering participants in eye-tracking experiments. However, the task is challenging due to the visual irregularity of the scanpath shapes and the difficulty in dimensionality reduction due to geometric complexity. Conventional approaches have used heat maps to exclude scanpaths that lack a similarity pattern. However, the typically-used packages, such as ScanMatch and MultiMatch often generate discordant results when outlier identification is done empirically. This paper introduces a novel outlier evaluation approach by integrating the fractal dimension (FD), capturing the geometrical complexity of patterns, as an additional parameter with the heat map. This additional parameter is used to evaluate the degree of influence of a scanpath within a dataset. More specifically, the 2D Cartesian coordinates of a scanpath are fitted to a space filling 1D fractal curve to characterise its temporal FD. The FDs of the scanpaths are then compared to match their geometric complexity to one another.",
  "text2": "Recent studies matching eye gaze patterns with those of others contain research that is heavily reliant on string editing methods borrowed from early work in bioinformatics. Previous studies have shown string editing methods to be susceptible to false negative results when matching mutated genes or unordered regions of interest in scanpaths. Even as new methods have emerged for matching amino acids using novel combinatorial techniques, scanpath matching is still limited by a traditional collinear approach. This approach reduces the ability to discriminate between free viewing scanpaths of two people looking at the same stimulus due to the heavy weight placed on linearity. To overcome this limitation, we here introduce a new method called SoftMatch to compare pairs of scanpaths. SoftMatch diverges from traditional scanpath matching in two different ways: firstly, by preserving locality using fractal curves to reduce dimensionality from 2D Cartesian (x,y) coordinates into 1D (h) Hilbert distances, and secondly by taking a combinatorial approach to fixation matching using discrete Fréchet distance measurements between segments of scanpath fixation sequences. "
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


***

### Summarise text using a percentage value

Summarise the `fulltext` paragraph using a `percent` reduction  target value. 

::: tip Parameters
`endpoint` : https://api.weburban.com/text/to-summary    
`percent` : (float) number of features the paragraphs will be reduced.    
`fulltext` : (string) the full text paragraph used in the analysis.    
:::

Example of how this would be implemented in shown below. 

::: code-group

```js [curl]
curl --location 'https://api.weburban.com/text/to-summary' \
--header 'Accept: application/json' \
--header 'x-api-key: <API Key>' \
--header 'Content-Type: application/json' \
--data '{
    "percent" : 0.25,
    "fulltext" : "Outlier scanpaths identification is a crucial preliminary step in designing visual software, digital media analysis, radiology training and clustering participants in eye-tracking experiments. However, the task is challenging due to the visual irregularity of the scanpath shapes and the difficulty in dimensionality reduction due to geometric complexity. Conventional approaches have used heat maps to exclude scanpaths that lack a similarity pattern. However, the typically-used packages, such as ScanMatch and MultiMatch often generate discordant results when outlier identification is done empirically. This paper introduces a novel outlier evaluation approach by integrating the fractal dimension (FD), capturing the geometrical complexity of patterns, as an additional parameter with the heat map. This additional parameter is used to evaluate the degree of influence of a scanpath within a dataset. More specifically, the 2D Cartesian coordinates of a scanpath are fitted to a space filling 1D fractal curve to characterise its temporal FD. The FDs of the scanpaths are then compared to match their geometric complexity to one another. The findings indicate that the FD can be a beneficial additional parameter when evaluating the candidacy of poorly matching scanpaths as outliers and performs better at identifying unusual scanpaths than using other methods, including scanpath matching, Jaccard, or bounding box methods alone."
}'
```

```js [Javascript]
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("x-api-key", "<API Key>");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "percent": 0.25,
  "fulltext": "Outlier scanpaths identification is a crucial preliminary step in designing visual software, digital media analysis, radiology training and clustering participants in eye-tracking experiments. However, the task is challenging due to the visual irregularity of the scanpath shapes and the difficulty in dimensionality reduction due to geometric complexity. Conventional approaches have used heat maps to exclude scanpaths that lack a similarity pattern. However, the typically-used packages, such as ScanMatch and MultiMatch often generate discordant results when outlier identification is done empirically. This paper introduces a novel outlier evaluation approach by integrating the fractal dimension (FD), capturing the geometrical complexity of patterns, as an additional parameter with the heat map. This additional parameter is used to evaluate the degree of influence of a scanpath within a dataset. More specifically, the 2D Cartesian coordinates of a scanpath are fitted to a space filling 1D fractal curve to characterise its temporal FD. The FDs of the scanpaths are then compared to match their geometric complexity to one another. The findings indicate that the FD can be a beneficial additional parameter when evaluating the candidacy of poorly matching scanpaths as outliers and performs better at identifying unusual scanpaths than using other methods, including scanpath matching, Jaccard, or bounding box methods alone."
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.weburban.com/text/to-summary", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
:::
