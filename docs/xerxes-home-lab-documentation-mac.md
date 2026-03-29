---
outline: deep
---

<script setup>
import RapidButton from './.vitepress/theme/RapidButton.vue'
</script>

# Xerxes Home Lab

Documentation for the Xerxes Home Lab app.

__Download the macOS version today for free!__

[![Apple app store](/app.png)](https://www.apple.com)

### macOS Menubar app

Discover and manage your network servers effortlessly with a lightweight, high-performance macOS menu bar app designed for speed and simplicity. 

![Menubar app](/homelabapp/xerxeshomelab_menu.png)

The app automatically detects your local subnet or lets you specify a custom subnet to scan, quickly identifying devices with SSH (port 22) open. It also scans Bonjour/mDNS to match hostnames with IP addresses, giving you clear identification for every server on your network. All detected servers appear in a live dropdown from the menu bar, so you can access them instantly with a single click.

#### Detail View

Clicking on a server opens a detailed view with multiple tabs. The Information tab shows critical system stats including fan speed, RAM usage, and hard drive space. The Docker tab displays all Docker Engine containers, their status, and even allows you to install Docker Engine directly from the app. 

![Menubar app](/homelabapp/xerxeshomelab_detail2.png)

#### Login and Keychain

The app does not save or trasmit passwords over the network other than to communicate with devices. 

![Menubar app](/homelabapp/xerxeshomelab_login4.png)

A Security tab (<- Logout) lets you manage your keychain safely, delete SSH key files, and log out when needed. Login is seamless and secure using Apple Keychain, while all SSH communication is handled via Apple NIO for fast, asynchronous, and reliable connections.

![Menubar app](/homelabapp/xerxeshomelab_keychain.png)

The app uses local and secure system level Apple Keychain access for all passwords and keys. View, delete, and manage keys in the app or through Apple Keychain securely and privately. 


![Menubar app](/homelabapp/xerxeshomelab_login1.png)
![Menubar app](/homelabapp/xerxeshomelab_login2.png)

When you first login, each device shown in the dropdown menu will have a yellow dot next to it, signifying a "logged out" state. You can login by clicking on the dot. 
After clicking on the dot, login with either a Plain Password or SSH Key by clicking on the button and choosing your key. 

![Menubar app](/homelabapp/xerxeshomelab_login3.png)

Additional menus allow the user to scan a different subnet to the one they are on (Settings). This will be saved in the user's preferences for conventient future scans of the network. 

#### Containers

The Containers tab allows the user to browse Docker containers on the device. If Docker is not installed, a button will allow users to perform a basic installation of Docker Engine on the target device. 

![Menubar app](/homelabapp/xerxeshomelab_docker.png)

Future enhancements will allow greater control and configuration of Docker containers.

#### System Requirements

Requirements include macOS 14.6 or later, access to the local network or VPN for scanning, and Apple Keychain for secure authentication. Take control of your network, monitor servers, manage Docker containers, and connect via SSH effortlessly, all from your Mac menu bar.

__Download the macOS version today for free!__

<RapidButton text="App Store" url="" color="rgb(70, 70, 70)" />
