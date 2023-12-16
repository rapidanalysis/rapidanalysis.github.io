---
outline: deep
---

# RapidAnalysis Google Sheets Add-On

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
