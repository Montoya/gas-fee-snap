# @Montoya/gas-fee-snap

A simple Snap example based on [@MetaMask/template-snap](https://github.com/MetaMask/template-snap). Read below for a tutorial!

## Prerequisites

Before you begin, make sure you have the following installed: 

* [Google Chrome](https://www.google.com/chrome/) 
* [MetaMask Flask](https://metamask.io/flask/)\* 
* [Node.js](https://nodejs.org/) 
* [Yarn](https://yarnpkg.com/)
* A text editor or IDE like [Visual Studio Code](https://code.visualstudio.com/)
* Optionally, a [GitHub account](https://github.com/) and a git client like [GitHub Desktop](https://desktop.github.com/)

\* *Please note: MetaMask Flask is experimental preview software. Please do not use your existing secret recovery phrase or keys with Flask. It is recommended that you create a new SRP for testing with Flask.*

## The 5-Minute Snap Tutorial

In this tutorial, you will learn how to use the Snap template and CLI tools, how to add permissions to be requested at runtime, how to use the `fetch` API to request information from the Internet, and how to display custom information in a Snap Confirmation. The Snap you will implement is not meant to be an ideal way to show gas fee estimates but rather to demonstrate some features to get you started building with Snaps.

First, navigate to the [@MetaMask/template-snap](https://github.com/MetaMask/template-snap) repository and click "Use this template".

![Use this template](tutorial-assets/tutorial-use-template.png)

Give your new Snap a name, like `gas-fee-snap`. Next, open a command line tool and run `./scripts/cleanup.sh` to remove some MetaMask-specific files that will not work outside of the MetaMask GitHub organization. Now you are ready to start modifying the files in your Snap.

First, open `snap.manifest.json`. This file has the main configuration details for your Snap. To enable your Snap to use the `fetch` API, you need to request the "network access" permission. You can do this by modifying `initialPermissions` to include this permission, like so: 

```JSON
"initialPermissions": {
  "snap_confirm": {}, 
  "endowment:network-access": {}
},
```

## Helpful Resources 

* [MetaMask Snaps Documentation](https://docs.metamask.io/guide/snaps.html)
* [Filecoin FilSnap by Chainsafe](https://github.com/ChainSafe/filsnap)
* [A curated list of awesome MetaMask Snaps related resources](https://github.com/piotr-roslaniec/awesome-metamask-snaps)