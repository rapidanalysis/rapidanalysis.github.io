---
outline: deep
---

# Hardware Documentation: Xerxes Pi

A high-density server motherboard in a 120 mm × 40 mm form factor designed for a 1U mini or full sized rack space and compatible with the Raspberry Pi Compute Module tailored for microserver or cluster use. 

<img src="/xerxes/xerxes_diagram.png" alt="Darius RAM" width="600" />


### 🧠 **Core Compatibility**


| Feature | Details   |
| ---------- | -------------------- |
| Compute Modules | [Raspberry Pi® CM4 and CM5](https://www.raspberrypi.com/products/compute-module-5/), [Radxa® CM5](https://radxa.com/products/cm/cm5/), [OrangePi CM5](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-CM5.html), and other [Compute Module compatible boards](https://www.jeffgeerling.com/blog/2024/raspberry-pi-cm5-2-3x-faster-drop-upgrade-mostly). `(See A)` |
| M.2  | The M.2 connector follows the PCIe specifications documented by Raspberry Pi in their [CM5 datasheet](https://datasheets.raspberrypi.com/cm5/cm5-datasheet.pdf). `(See H opposite)` |
| Ethernet | On-board Gigabit Ethernet PHY using the Broadcom BCM54210PE which is IEEE 1588-2008 compliant with MDI crossover, pair skew and pair polarity correction. `(See G)` |
| Fan Connector | Standard header pin fan connector. `(See B)` |
| USB | Power connector is USB-C with data connections handled by micro USB 2.0. <br>`(See E & F)` |
| GPIO | VCC and Ground Pins, I2C pins for SDA and SCL, Fan Control header pins. <br>`(See C)` |
| POE | Power over Ethernet header pins connect to an optional daughterboard. `(See D)` |
| Model Viewer <br><div style="width: 100px">&nbsp;</div> | <a href="https://autode.sk/3ES2eip" target="new"><img src="/xerxes/autodesk.png" alt="Preview" width="400" /></a> |

### 📐 **Form Factor & Physical**

| Feature | Details |
| ---- | ---- |
| Dimensions | 120mm × 40mm |
| Standard | Fractional Nano ITX |
| Mounting | Aligned for 1U chassis density; side-to-side airflow |
| Stackable Array-ready | Designed to slot into a blade or sled within a dense server chassis. Please see further down for a video describing the process for stacking a mini rack | 
| Size compared to a Mobile Phone <br><div style="width: 100px">&nbsp;</div> | <img src="/xerxes/xerxes-size.jpg" alt="Size" width="300" /> |



### 🔌 **Connectivity**


| Feature | Details |
| ---- | ---- | 
| Networking | 1× Gigabit Ethernet RJ45 | 
| USB | 1 micro USB 2.0 port for data |
| Power | 1 USB-C port for power |
| PCIe | 1× PCIe Gen 2 x1 via onboard M.2 M-key slot |
| Display <br><div style="width: 100px">&nbsp;</div> | via optional M.2 Oculink® board to optional PCIe Graphics board, including latest generation AMD GPU graphics cards  |



### 💾 **Storage Options**


| Feature | Details |
| ---- | ---- | 
| Onboard eMMC | (from compute module) |
| M.2 slot | Key M for NVMe or SATA SSD |
| microSD card slot | Only for CM4 or CM5 Lite versions. microSD care is reserved for compute module cards which do not contrain storage memory |
| NVME and microSD <br><div style="width: 100px">&nbsp;</div> | <img src="/xerxes/xerxes-back.jpg" alt="Size" width="250" /> |



### 🔋 **Power**


| Feature | Details |
| ---- | ---- | 
| Input Voltage | 5V DC via USB-C connector |
| Power Efficiency <br><div style="width: 100px">&nbsp;</div> | Optimized low-power draw (\~5–8W per module under load) power draw may vary depending on the M.2 care used |



### 🔧 **Cluster Integration Features**

| Feature | Details |
| ---- | ---- | 
| I2C/GPIO headers | for board management, fan control, or daughter card modules |
| POE connector | compatibility for integrated POE daughterboard |
| LED indicators | Power, Activity, Network status |
| Rack Enclosures | Available in 19" and mini-rack sizes, open source and pre-printed with links to sliced models up soon for download here |
| Model Description Video <br><div style="width: 100px">&nbsp;</div> | [![Watch the video](/xerxes/xerxes-rack.png)](https://youtu.be/4I_BMbAXmSg) |


---

### 🗃️ **Use Case**

Ideal for:

* Raspberry Pi clusters
* Edge computing nodes
* Kubernetes micro-clouds
* Home lab compute bricks in custom 1U enclosures
