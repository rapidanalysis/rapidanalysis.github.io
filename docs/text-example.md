---
outline: deep
---

# Example

### Academic Abstract Analysis

Below is an example of some of the things you can do using RapidAnalysis ML endpoints on two academic text abstracts.

::: warning Token
Copy your API Token and pase it below to get started. Then press the green Analyse and Compare button below. 
:::

<script setup>
import axios from "axios";

function summarise(description, comment) {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }

            const q = { "fulltext" : comment, "percent" : 0.2 }
            const url = "https://api.weburban.com/text/to-summary";
            const json = JSON.stringify(q);

            axios.defaults.headers['x-api-key'] = document.getElementById("token").value;
            console.log(document.getElementById("token").value)
            
            axios.post(url, json, config)
                .then(response => {
                    console.log(response.data);
                    const botSaid = response.data["Output"];
                    prompt(botSaid, description);
            })
            .catch(error => {
                console.error(error);
                prompt(error, "error, server call interrupted");
            });
        }

        function generate(description, comment) {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }

            const q = { "url" : comment, "length" : 500 }
            const url = "https://api.weburban.com/generate/text-from-ngram";
            const json = JSON.stringify(q);

            axios.defaults.headers['x-api-key'] = document.getElementById("token").value;
            console.log(document.getElementById("token").value)
            
            axios.post(url, json, config)
                .then(response => {
                    console.log(response.data);
                    const botSaid = response.data["Output"];
                    prompt(botSaid, description);
            })
            .catch(error => {
                console.error(error);
                prompt(error, "error, server call interrupted");
            });
        }

        function vector(text1, text2) {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }

            const q = { "text1" : text1, "text2" : text2, "n_features" : 10 }
            const url = "https://api.weburban.com/text/to-vector";
            const json = JSON.stringify(q);

            axios.defaults.headers['x-api-key'] = document.getElementById("token").value;
            console.log(document.getElementById("token").value)
            
            axios.post(url, json)
                .then(response => {
                    console.log(response.data);
                    prompt(response.data["Output"]["n_features"], 'Number of vector dimensions');
                    prompt(response.data["Output"]["text1"], 'Vector Abstract A');
                    prompt(response.data["Output"]["text2"], 'Vector Abstract B');
                    prompt(response.data["Output"]["braycurtis_dissimilarity"], 'Bray Curtis Dissimilarity');
            })
            .catch(error => {
                console.error(error);
                prompt(error, "error, server call interrupted");
            });            
        }

        function chatbot(promptEngineering, text) {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }

            const q = { "prompt" : promptEngineering + " " + text }
            const url = "https://api.weburban.com/generate/text-from-text";
            const json = JSON.stringify(q);

            axios.defaults.headers['x-api-key'] = document.getElementById("token").value;
            console.log(document.getElementById("token").value)
            
            axios.post(url, json)
                .then(response => {
                    console.log(response.data);
                    const botSaid = response.data["recognised"];
                    prompt(botSaid, "LLM Output");                    
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
  summarise( 'Summarise Abstract A', getText('abstract_a') ); 
  summarise( 'Summarise Abstract B', getText('abstract_b') ); 
  generate( 'Generate New Short Abstract A', getText('abstract_a') ); 
  generate( 'Generate New Short Abstract B', getText('abstract_b') );
  vector( getText('abstract_a'), getText('abstract_b') );
  chatbot( 'Describe', getText('abstract_a') );
  //chatbot( 'Describe', getText('abstract_b') );
}
</script>

<input style='border-style: solid; color: white; background: #cccccc; padding: 1pt 10pt 1pt 10pt ' id="token" type="text" label='Token' placeholder="Paste token here" value="">
        
### Abstract A

<textarea id="abstract_a" name="abstract_a" rows="4" cols="80">Outlier scanpaths identification is a crucial preliminary step in designing visual software, digital media analysis, radiology training and clustering participants in eye-tracking experiments. However, the task is challenging due to the visual irregularity of the scanpath shapes and the diﬃculty in dimensionality reduction due to geometric complexity. Conventional approaches have used heat maps to exclude scanpaths that lack a similarity pattern. However, the typically-used packages, such as ScanMatch and MultiMatch often generate discordant results when outlier identification is done empirically. This paper introduces a novel outlier evaluation approach by integrating the fractal dimension (FD), capturing the geometrical complexity of patterns, as an additional parameter with the heat map. This additional parameter is used to evaluate the degree of influence of a scanpath within a dataset. More specifically, the 2D Cartesian coordinates of a scanpath are fitted to a space filling 1D fractal curve to characterise its temporal FD. The FDs of the scanpaths are then compared to match their geometric complexity to one another. The findings indicate that the FD can be a beneficial additional parameter when evaluating the candidacy of poorly matching scanpaths as outliers and performs better at identifying unusual scanpaths than using other methods, including scanpath matching, Jaccard, or bounding box methods alone.</textarea>

### Abstract B

<textarea id="abstract_b" name="abstract_b" rows="4" cols="80">Recent studies matching eye gaze patterns with those of others contain research that is heavily reliant on string editing methods borrowed from early work in bioinformatics. Previous studies have shown string editing methods to be susceptible to false negative results when matching mutated genes or unordered regions of interest in scanpaths. Even as new methods have emerged for matching amino acids using novel combinatorial techniques, scanpath matching is still limited by a traditional collinear approach. This approach reduces the ability to discriminate between free viewing scanpaths of two people looking at the same stimulus due to the heavy weight placed on linearity. To overcome this limitation, we here introduce a new method called SoftMatch to compare pairs of scanpaths. SoftMatch diverges from traditional scanpath matching in two different ways: firstly, by preserving locality using fractal curves to reduce dimensionality from 2D Cartesian (x,y) coordinates into 1D (h) Hilbert distances, and secondly by taking a combinatorial approach to fixation matching using discrete Fréchet distance measurements between segments of scanpath fixation sequences. These matching “sequences of fixations over time” are a loose acronym for SoftMatch. Results indicate high degrees of statistical and substantive significance when scoring matches between scanpaths made during free-form viewing of unfamiliar stimuli. Applications of this method can be used to better understand bottom up perceptual processes extending to scanpath outlier detection, expertise analysis, pathological screening, and salience prediction.</textarea>

<button style="border-radius: 8px; color: white; background: green; padding: 1pt 10pt 1pt 10pt " @click="callapi">Analyse and Compare</button>

<hr/>

### Output

<div id="chatList"></div>
