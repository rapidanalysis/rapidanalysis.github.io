---
outline: deep
---

<script setup>
import RapidButton from './.vitepress/theme/RapidButton.vue'
</script>

# Hardware Documentation: Xerxes ML

This project is to make a low cost NVIDIA Jetson Orin Nano™ compute module carrier that fits neatly into your home or small business network rack. 

__Sign up to support this project!__

<RapidButton text="Kickstarter!" url="https://www.kickstarter.com/projects/1907647187/xerxes-machine-learning" color="#2fb61bff" />

Our mission is to launch a cheap, well documented platform for small business and personal clustered computing. But what, exactly, does that mean? It means you can run all the cool open source software out there for free on your own home or small business server.

<img src="/xerxes/xerxesml.gif" alt="Xerxes ML" />


Right now, we are launching our Xerxes ML carrier board aimed at home lab enthusiasts and technical professionals looking for a low cost way to run their AI agents, CUDA™ applications and other machine learning server based software. Our goal is to be able to experiment and develop highly performant clusters and integrate with other AI devices (e.g., NVIDIA DGX™) in a home lab, academic lab, or small business. 

## Key Innovations

The size of the board is 60 mm x 120 mm which makes it exactly half the size of the Nano-ITX format. The size will allow developers to fit this board in any rack either horizontally, for under 1U, or stacked vertically, in under 1.5U.

<img src="/xerxes/xerxeses.jpg" alt="Xerxes ML" />

The included SFP+ cage allows for the use of an additional standard ethernet module, a high speed fibre optic module, or a Direct Attach Copper (DAC) module. Bandwidth for these ports will be to be announced, between 5-10 gigabit. 

Mini M.2 NVMe connection will be tucked under the Jetson module and compatible with a wide range of high speed storage options. 

Power over Ethernet (POE+) will provide the ability to power the device and all connected peripherals using only an ethernet cable.

Expansion ports for I2S and I2C will be available using convenient standard Qwiic connectors. The exact configuration and placement of the connectors is to be determined. Early reward supports will be consulted for final format and placement. 

## Software

Our engineering teams are aligned on a clear goal: lowering the barrier to entry for running performant local LLMs at home. Drawing on our Linux engineering expertise, we plan to publish clear, concise, and reproducible instructions for building a lightweight Ubuntu-based system tailored specifically for headless home lab use with NVIDIA Jetson Orin Nano modules. 

These guides will focus on minimal base installs, predictable package selection, and step-by-step installation of the exact NVIDIA drivers and CUDA components required for popular local LLM frameworks, avoiding unnecessary bloat and version mismatches. By keeping the documentation practical, opinionated, and tested on our Xerxes hardware, we aim to help technically minded users get from bare metal to a working local LLM environment quickly, confidently, and without the trial-and-error that typically slows adoption.

## Our Philosophy

Our Xerxes Pi has demonstrated our commitment to inexpensive and accessible hardware. We plan to continue this strategy with the Xerxes ML by providing flexible mix-and-match blade options for home lab and small office technicians. 

Our core mission for the Xerxes ML is to make them accessible, extensible, and inexpensive. Accessible, meaning they can be fit into anything from short single cases for POE cameras to clustered in home lab racks. Extensible, meaning they can be fit with POE, I2C, M.2, and active cooling. Inexpensive means under $59 USD each and even less expensive in volume.

