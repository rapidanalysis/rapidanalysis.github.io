---
outline: deep
---

# Peripheral Daughterboard — PoE + NFC Module


* **Form Factor**: 120 mm × 15–20 mm       
* **Mounting**: mezzanine stack using board-to-board header connectors       
* **Compatible Host**: Xerxes Pi carrier board       

---

### 🔋 **Power over Ethernet (PoE) Subsystem**

* **PoE Standard**: IEEE 802.3af (15.4W) or 802.3at (30W)
* **PoE Module**: Integrated PoE PD controller
* **DC Output**: 5V regulated to power both the host motherboard and daughterboard
* **Isolation**: Galvanically isolated Ethernet transformer + TVS protection
* **RJ45 Port**: Routed from the Xerxes Pi
* **Cooling**: Small thermal pad + integrated passive heatsink

---

### 🛠️ **Board-to-Board Interface**

* **Connector**: Dual-row 0.5 mm or 0.8 mm pitch high-density mezzanine connector
* **Signals**:

  * 5V, 3.3V power
  * SPI, I2C, UART
  * Ethernet pass-through or GPIO-triggered power control
* **Optional Features**:

  * EEPROM for daughterboard ID/config
  * Onboard status LED indicators (PoE OK, NFC active)

---

### 🛠️ **NFC Interface**

The **ST25DV64K** is a **dual-interface NFC tag IC** from STMicroelectronics with both **I²C and ISO/IEC 15693 (NFC-V)** interfaces. It's designed for secure communication, configuration, and data transfer between a host system (e.g. MCU) and an NFC reader. It offers **64 Kbits (8 KB)** of EEPROM memory and advanced features.

Here’s a breakdown of the **different modes** the **ST25DV64K** can function under:

---

### 🛠️ **1. RF Mode (ISO 15693 NFC-V / ISO 18000-3 Mode 1)**

* The tag is powered by the electromagnetic field from an NFC reader.
* Functions as a **passive NFC-V tag**.
* Used for:

  * Wireless configuration
  * Inventory management
  * Data read/write via smartphones or industrial readers


* **Fast transfer mode (FTM)** to speed up I2C ↔ RF communication
* **Multiple read/write blocks**
* **Password protection** per memory zone
* **Field detect pin (GPO)** to signal RF activity to the host MCU

---

### 👨🏻‍💻 **2. I²C Mode (Wired Interface)**

* Communicates with a host microcontroller over a standard I²C bus.
* Can be accessed by the host system for reading/writing EEPROM or monitoring RF status.
* Standard I²C slave interface (up to 1 MHz)
* Dual-port access control:

  * Host MCU can block or allow RF access
  * RF can signal host via GPO pin
* Supports **energy harvesting** (if RF field is present, it can power external circuits with up to \~4.5 mA at 3.3V)

---

### 🔁 **3. Dual Interface Mode**

* Both the I²C host and the RF reader can access the memory.
* The EEPROM can be written or read from either interface.
* Arbitration logic prevents simultaneous conflicting accesses.

#### Modes inside dual interface:

* **Mailbox / Fast Transfer Mode (FTM)**:

  * Dedicated buffer for quick bidirectional data exchange between RF and I²C
  * Acts like a "mailbox" where RF writes a message and host reads it (and vice versa)

* **GPO (General Purpose Output)**:

  * Can signal various events like:

    * RF field detected
    * Data ready
    * Memory area accessed
  * Useful for waking up a microcontroller when an NFC read/write happens

---

### 🔐 **4. Security Modes**

* Up to 4 **configurable memory areas (zones)** with different access controls:

  * Read/write by I²C only, RF only, or both
  * Public, password-protected, or permanently locked
* **Multiple 64-bit passwords** for read/write access
* Supports **encrypted communication** via NIST-recommended algorithms (AES support depends on variant)

---

### 🔋 **5. Energy Harvesting Mode**

* When in an RF field, the ST25DV64K can **harvest energy** to power external low-power electronics.
* Provides up to **4.5 mA @ 3.3V** through its **VCC pin**, configurable via EEPROM
* Useful in battery-less or power-optimized applications

---

### Summary Table

| Mode                   | Access Method    | Power Source    | Use Case                                 |
| ---------------------- | ---------------- | --------------- | ---------------------------------------- |
| **RF Mode**            | NFC/V            | RF field        | Smartphone interaction, reader inventory |
| **I²C Mode**           | Wired MCU        | External supply | Embedded system access to EEPROM         |
| **Dual Interface**     | NFC + I²C        | External + RF   | NFC-host communication, mailboxing       |
| **Fast Transfer Mode** | NFC + I²C        | External + RF   | High-speed RF↔MCU data transfer          |
| **Energy Harvesting**  | Any (RF present) | RF field        | Powering MCU/sensors without battery     |

---


### 🛠️ **Mechanical Integration**

* Designed to slot beside the mainboard inside a 1U chassis
* Edge cutout for NFC antenna to reach chassis front
* Designed as swappable module for field upgrades

---

### 💡 Example Applications in a Home Lab

* **Zero-cable networking**: Only a PoE switch needed for power + network
* **Scriptable NFC provisioning**: Use NFC cards or phones to push configurations or trigger remote scripts
* **Rack management**: NFC for identifying server nodes or unlocking admin access

---

