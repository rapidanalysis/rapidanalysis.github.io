---
outline: deep
---

# Hardware Documentation: Xerxes Pi

A high-density server motherboard in a 120 mm × 40 mm form factor designed for a 1U mini or full sized rack space and compatible with the Raspberry Pi Compute Module tailored for microserver or cluster use. 

<img src="/xerxes/xerxes_diagram.png" alt="Darius RAM" width="600" />


### 🧠 **Core Compatibility**

* **Supported SoC Modules**: [Raspberry Pi® CM4 and CM5](https://www.raspberrypi.com/products/compute-module-5/), [Radxa® CM5](https://radxa.com/products/cm/cm5/), [OrangePi CM5](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-CM5.html), and other [Compute Module compatible boards](https://www.jeffgeerling.com/blog/2024/raspberry-pi-cm5-2-3x-faster-drop-upgrade-mostly). (See A)
* **M.2 Compatibility**: The M.2 connector follows the PCIe specifications documented by Raspberry Pi in their [CM5 datasheet](https://datasheets.raspberrypi.com/cm5/cm5-datasheet.pdf). (See H opposite)
* **Ethernet**: on-board Gigabit Ethernet PHY using the Broadcom BCM54210PE which is IEEE 1588-2008 compliant with MDI crossover, pair skew and pair polarity correction. (See G)
* **Fan Connector**: standard header pin fan connector. (See B)
* **USB**: Power connector is USB-C with data connections handled by micro USB 2.0. (See E & F)
* **GPIO**: VCC and Ground Pins, I2C pins for SDA and SCL, Fan Control header pins. (See C)
* **POE**: Power over Ethernet header pins connect to an optional daughterboard. (See D)

### 📐 **Form Factor & Physical**

* **Dimensions**: 120mm × 40mm
* **Standard**: Fractional Nano-ITX
* **Mounting**: Aligned for 1U chassis density; side-to-side airflow
* **Stackable/Array-ready**: Designed to slot into a blade or sled within a dense server chassis

### 🔌 **Connectivity**

* **Networking**: 1× Gigabit Ethernet RJ45
* **USB**: 1 micro USB 2.0 port for data
* **Power**: 1 USB-C port for power
* **PCIe**: 1× PCIe Gen 2 x1 via onboard M.2 M-key slot
* **Display**: via optional M.2 Oculink® board to optional PCIe Graphics board. 

### 💾 **Storage Options**

* **Onboard eMMC** (from compute module)
* **M.2 slot** (key M for NVMe or SATA SSD)
* **microSD card slot** (for CM4 or CM5 Lite versions)

### 🔋 **Power**

* **Input Voltage**: 5V DC via USB-C connector
* **Power Efficiency**: Optimized low-power draw (\~5–8W per module under load)

### 🔧 **Cluster Integration Features**

* **I2C/GPIO headers** for board management, fan control, or daughter card modules
* **POE connector** compatibility for integrated POE daughterboard
* **LED indicators**: Power, Activity, Network status

---

### 🗃️ **Use Case**

Ideal for:

* Raspberry Pi clusters
* Edge computing nodes
* Kubernetes micro-clouds
* Home lab compute bricks in custom 1U enclosures
