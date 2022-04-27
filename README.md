
<p align="center">
  <a href="https://pt-br.reactjs.org/">
    <img alt="" src="https://img.shields.io/badge/React-16.13.1-blue.svg" target="_blank">
  </a>

  <a href="https://nodejs.org/en/">
    <img alt="Node Version" src="https://img.shields.io/badge/node-%3E%3D%2010.14.0-brightgreen" target="_blank">
  </a>
  
</p>

## Web

![](https://github.com/Thiago-Cardoso/ignite-lab-ead-course/blob/master/web/public/logo.gif)


## Stack the Project

- **NestJS**
- **GraphQL**
- **Apache Kafka**
- **ReactJS**
- **Next.js**
- **TypeScript**
- **Apollo Client (GraphQL)**
- **Auth0**
- **Prisma ORM**

## Features

Purchasing service (shopping)
[Admin] Product Registration

[Admin] Product listing

[Auth] Shopping List

[Audience] Buying a product

[Public] List of products available for purchase

Classroom service (classroom)
[Admin] List enrollments

[Admin] List students

[Admin] List courses

[Admin] Register courses

[Auth] List courses I have access to

[Auth] Access course content

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have installed on your machine:

- Node
- NPM

### Installing

First step is to install the docker service:

```bash
# Using windows
Step 1: Download Node.js Installer. In a web browser, navigate to https://nodejs.org/en/download/. ...
Step 2: Install Node.js and NPM from Browser. Once the installer finishes downloading, launch it. ...
Step 3: Verify Installation.

```

For test if the service was installed with succeed, you can run the command for to check de version of Node:

```bash
$ node -v
# Must be have the node version: v10.14.0
$ npm -v
# Must be have the npm version: 6.14.4

# Run Docker Compose
$ docker-compose up -d

# Go to folder classroom
$ cd classroom/

# Install Dependencies
$ yarn
# or
$ npm install

# Run Application
$ yarn start:dev
# or
$ npm run start:dev

# Access localhost
http://localhost:3334/graphql

# Go to folder purchases
$ cd purchases/

# Install Dependencies
$ yarn
# or
$ npm install

# Run Application
$ yarn start:dev
# or
$ npm run start:dev

# Access localhost
http://localhost:3333/graphql

# Go to folder gateway
$ cd gateway/

# Install Dependencies
$ yarn
# or
$ npm install

# Run Application
$ yarn start:dev
# or
$ npm run start:dev

# Access localhost
http://localhost:3332/graphql

# Go to folder web
$ cd web/

# Install Dependencies
$ yarn
# or
$ npm install

# Run Application
$ yarn dev
# or
$ npm run dev

# Access localhost
http://localhost:3000

```

## Author

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
[<img src="https://avatars1.githubusercontent.com/u/1753070?s=460&v=4" width="100px;"/><br /><sub><b>Thiago Cardoso</b></sub>](https://github.com/Thiago-Cardoso)<br />
