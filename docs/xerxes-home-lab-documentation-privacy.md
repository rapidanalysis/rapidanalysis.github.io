---
outline: deep
---

<script setup>
import RapidButton from './.vitepress/theme/RapidButton.vue'
</script>

# Privacy Policy for Xerxes Home Lab

**Last updated:** 28 March 2026

Xerxes Home Lab ("the App") is a macOS menu bar application designed to help users discover and manage devices on their local network. Your privacy is important, and this Privacy Policy explains how information is handled when you use the App.

## 1. Overview

Xerxes Home Lab is designed with a strong emphasis on privacy and local-first operation. The App does not collect, transmit, or store personal data outside of your device except as explicitly described below.

## 2. Information We Collect

### 2.1 Information Processed Locally

The App scans a user-specified or automatically detected subnet to identify devices with port 22 (SSH) open. During this process, the App may locally process:

- IP addresses of devices on your network  
- Hostnames (via Bonjour or similar services)  
- SSH service availability (port 22 status)  
- Device metadata retrieved via SSH (if authentication is provided)

This information is processed **entirely on your device** and is not transmitted to any external servers.

## 3. Authentication and Credentials

### 3.1 Apple Keychain

The App allows you to authenticate with devices over SSH. Any credentials used:

- Are stored securely in the macOS **Apple Keychain**
- Are never accessed directly by the App beyond standard Keychain APIs
- Are never transmitted outside your device except to the target device you explicitly connect to

The App does **not** collect, log, or transmit passwords.

## 4. Network Activity

The App performs the following network operations:

- Scans local or user-defined subnets for open SSH ports (port 22)
- Connects to devices via SSH when instructed by the user
- Queries devices for system information over secure SSH connections

All network activity is:

- Initiated by the user
- Restricted to local networks or user-specified subnets
- Performed directly between your device and the target devices

No data is routed through or stored on external servers controlled by the developer.

## 5. Data Storage

All data generated or used by the App:

- Remains on your local device
- Is stored only as necessary for App functionality (e.g., cached device lists)
- Can be deleted by uninstalling the App or clearing App data

No user data is stored remotely.

## 6. Data Sharing

We do **not**:

- Sell your data  
- Share your data with third parties  
- Transmit your data to external servers  

All information remains under your control on your device.

## 7. User Control

You have full control over:

- Which subnet(s) are scanned  
- Which devices are accessed  
- Whether credentials are stored in Keychain  
- When scans or connections are performed  

You may stop using the App at any time to cease all data processing.

## 8. Security

We take reasonable measures to ensure security:

- Credentials are stored using Apple Keychain  
- SSH connections are encrypted  
- No external data transmission occurs  

However, you are responsible for ensuring the security of your network and devices.

## 9. Children's Privacy

The App is not directed toward children under the age of 13 and does not knowingly collect personal information from children.

## 10. Changes to This Policy

This Privacy Policy may be updated from time to time. Changes will be reflected by updating the "Last updated" date above.

## 11. Contact

If you have any questions about this Privacy Policy, please contact:

info@rapidanalysis.com

## 12. Compliance with Apple App Store Requirements

This App complies with Apple App Store guidelines by:

- Minimising data collection  
- Processing data locally wherever possible  
- Using secure system services (e.g., Apple Keychain)  
- Providing transparency regarding all data usage  

By using Xerxes Home Lab, you acknowledge and agree to this Privacy Policy.