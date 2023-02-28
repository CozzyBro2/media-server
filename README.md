# About
Barebones open-source implementation of a media server written in [express](https://expressjs.com/).

# Concept
This media server's only functionality is to serve files quickly & natively. Allowing easy embedding on services like discord.

# Usage

# Installation
You need to make a folder called `media` in the root project directory.
## Docker
A sample compose file is provided:
```compose
version: '3.4'

services:
  media-server:
    container_name: media-server
    image: hashcollision/media-server

    # environment:
      # PORT: 5530 #Optional: use to change the server port.
    ports:
      - 5530:5530 #Make sure this matches the port you're using.
    volumes:
      - ./media:/usr/src/app/media #Change ./media to match the folder you'll use to store media.

```
## Manual
Instructions for Linux are provided:
* Clone the repository
* Install [nodejs](https://nodejs.org/en/) & [npm](https://nodejs.org/en/)
* Install all dependencies via npm