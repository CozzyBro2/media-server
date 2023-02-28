# About
Open source media server written in [express](https://expressjs.com/).

# Installation
## Docker
The intended method. A sample compose file is provided:
```compose
version: '3.4'

services:
  media-server:
    container_name: media-server
    image: hashcollision/media-server

    environment:
      # PORT: 5530 #(Optional: use to change port server runs on.)
    ports:
      - 5530:5530 # If you change ports change it here too.

```
## Manual
Instructions for Linux are provided:
* Clone the repository
* Install [nodejs](https://nodejs.org/en/) & [npm](https://nodejs.org/en/)
* Install all dependencies via npm