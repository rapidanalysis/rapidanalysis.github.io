---
outline: deep
---

# Google Sheets Add-On

Interface with our ML API endpoints in your Google Sheets easily with this Add-on. Below are instructions for getting started with our custom functions.

::: warning Before you start
Make sure you have an API key by registering. It is free and easy to register. Just go here:
https://rapidanalysis.github.io/getting-started.html#create-an-account-and-sign-in

Once you have your API key, activate the Add-on by going into Extensions > RapidAnalysis > Api Key and paste your key into the box.
:::

### Chat with our LLM using questions in cells

`RAPID_CHAT('TEXT')`

Use RAPID_CHAT to interact with our LLM. Pass it a cell containing text from your spreadsheet. 

### Summarise Text from a cell

`RAPID_SUMMARIZE('TEXT', 0.25)`

Use RAPID_SUMMARIZE to summarize text. Pass it a cell containing text from your spreadsheet and a percentage between 0.1 and 0.9 to reduce the text. 

### Reword Text from a cell

`RAPID_REWORD('TEXT', 150)`

Use RAPID_REWORD to word text differently. Pass it a cell containing text from your spreadsheet and a percentage between 0.1 and 0.9 to change the wording of your text.

### Compare Text from two Cells

`RAPID_VEC_COMPARE('TEXT1','TEXT2',100)`

Use RAPID_VEC_COMPARE to compare the Bray Curtis vector similarity of two bodies of text. Pass it a cell containing text and another different cell containing text from your spreadsheet along with the number of features you want pulled from them to make a vector comparison. 

### Support

Please contact us for support. We can be reached at info@rapidanalysis.com
