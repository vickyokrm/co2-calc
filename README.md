# Carbon Emission Calculator

This simple tool can be used to calculate the carbon emisson when travelling between two cities for the given transportation method.
## Prerequisites

    1. Nodejs
## Installation

To run the software, just clone the repository, load dependencies, set some environment variables and start the application:

    git clone https://github.com/vickyokrm/co2-calc.git
    npm install
    ... set environment variables (see below) ...
    
## Environment variables

The following environment variables need to be set:

- **ORS_TOKEN** - API Token from openrouteservice.org

.env file must be located on the project root.
## Starting application

The app shall be started from command line interface

    Go to the project folder

    Use the below command on terminal to start the application.
    
    npm run start-dev -- --start=<Start Location>  --end=<Destination> --transportationmethod=<Transportation Method> 