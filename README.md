## EtherGigs

A Decentralized freelancing platform connecting businesses and professionals

## Table of Contents

1. [All Links](#links)
2. [Deployed Contracts](#deployed-contract-on-etherlink-testnet)
3. [Instructions to setup and run locally ](#instructions-to-setup)
4. [App Demo](#app-demo-screenshots)
5. [Tech Stack](#tech-stack)
6. [Our Solution (Architecture)](#our-solution-architecture)
7. [Team](#team)

## Links

- [Deployed URL](https://ethergigs.vercel.app/)
- [Presentation](https://docs.google.com/presentation/d/1rBzU0DzhDI3uueTFAOu9C4XiJ_WGqXNnWzV9XOmkw78)

## Deployed Contract on Etherlink Testnet

- EtherGigs Smart Contract - [0xDd28F71e2011B59675fA4822125fCA7e581F1d4D](https://testnet-explorer.etherlink.com/address/0xDd28F71e2011B59675fA4822125fCA7e581F1d4D)

## Instructions to Setup

Follow these instructions to set up and run the project:

**Using Github**

- Clone the Git repository: `https://github.com/0xAlphaDevs/EtherGigs.git`
- Install project dependencies: `pnpm install`
- Start the development server: `pnpm run dev`
- Access the web app in your browser at [http://localhost:3000](http://localhost:3000)

## App Demo Screenshots

![image](/public/appDemo/1.png)
![image](/public/appDemo/2.jpg)
![image](/public/appDemo/3.jpg)
![image](/public/appDemo/4.jpg)
![image](/public/appDemo/5.jpg)
![image](/public/appDemo/6.jpg)
![image](/public/appDemo/7.jpg)
![image](/public/appDemo/8.jpg)

## Tech Stack

- EtherLink Testnet
- Next JS
- Typescript
- Tailwind CSS
- Radix UI
- Tanstack
- Connectkit
- Lucide React
- wagmi
- @wagmi/core

## Our Solution (Architecture)

### Client

- Client can create jobs which will be displayed on the client's dashboard.
- Client can view the recieved proposals and accept them.
- Ongoing jobs will be displayed in a table where client can search the jobs by job ID and approve the work after satisfaction.
- If a client is approving a job , the bid amount will be deducted from wallet.

### Freenlancer

- Freelancer can view all active jobs and apply to them via a form.
- All sent proposals will be be displayed in a table under the "Proposals" tab.
- If the proposal is accepted, it will be shown under the ongoing job table from where freelancer have a submit button to submit their work.

## Team

Team [AlphaDevs](https://www.alphadevs.dev) 👇

### Github

[Harsh Tyagi](https://github.com/mr-harshtyagi)
[Yashasvi Chaudhary](https://github.com/0xyshv)

### Twitter / X

[Harsh Tyagi](https://twitter.com/0xmht)
[Yashasvi Chaudhary](https://twitter.com/0xyshv)

## Thanks

- Feel free to reach out to the [AlphaDevs team](https://www.alphadevs.dev) with any questions or issues.

- We appreciate your interest in our project and welcome contributions and feature suggestions.
