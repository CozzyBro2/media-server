# About
Open source media server written in [express](https://expressjs.com/).

# Installation
## Docker
A sample compose file is provided:
```compose
version: '3.4'

services:
  media-server:
    container_name: media-server
    image: hashcollision/media-server

    environment:
      # PORT: 5530 #Optional: use to change the server port.
    ports:
      - 5530:5530 #Make sure this matches the port you're using.

```
## Manual
Instructions for Linux are provided:
* Clone the repository
* Install [nodejs](https://nodejs.org/en/) & [npm](https://nodejs.org/en/)
* Install all dependencies via npm