# russian-peasant-algorithm

The July Shokunin challenge:

> It is said that Russian peasants multiply using a most curious method:
> they start by writing the two numbers to be multiplied at the head of
> two columns. Then they repeatedly divide the number in the left column
> by two (dropping any remainder) and double the number in the right
> column, writing the two new numbers immediately below their
> predecessors, until the number in the left column is one. Then they
> cross out all rows where the number in the left column is even, and
> add the remaining numbers in the right column, which is the desired
> product.
> 
> Your challenge: write a function that multiplies two numbers using the
> Russian peasant algorithm.  Feel free to make it ridiculously optimised or mega visual.

More information about the Russian peasant algorithm can be found on [Wikipedia](https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication#Russian_peasant_multiplication).

# tl;dr

Access a deployed version of the app at [https://russian-peasant-algorithm.herokuapp.com/](https://russian-peasant-algorithm.herokuapp.com/)

# Notes

* No testing for the UI because I like to live on the edge. There are unit tests for the calculation itself though.
* Supports [the Redux devtools extension for Chrome and Firefox](https://github.com/zalmoxisus/redux-devtools-extension).
* 100% 2016 JavaScript buzzword list compliant: uses ES6, Webpack, Babel, ESLint, React, Redux and Jasmine.
* Has only been tested in Chrome 51, may break horribly / behave strangely / delete all your stuff in other browsers.
* HTTPS access, because the security of your multiplications is important to us.
 
# Prerequisites

* Node (I'm using version 6.3.1, other versions may work but haven't been tested)

# Setup 

Run `./go.sh setup` to download all dependencies (apart from Node, which needs to have been installed already - see above for details).

# Testing

Run `./go.sh test` to run the tests.

# Building

Run `./go.sh build` to compile the assets ready for production use.

# Running

## Development mode

Run `./go.sh dev` to start a development-mode server. This will auto-reload the app as you make changes.

## Production mode

Run `./go.sh prod` to compile everything and start a production-mode server.

# Deployment

Run `./go.sh deploy` to push all committed changes to Heroku.

This requires the Heroku Git remote to have been configured already, use the Heroku toolbelt to configure this.
