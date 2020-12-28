[![Linter](https://github.com/KAUTH/Swagger-Skroutz-API/workflows/Linter/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![GitHub license](https://img.shields.io/github/license/KAUTH/Swagger-Skroutz-API)](https://github.com/KAUTH/Swagger-Skroutz-API/blob/main/LICENSE)

# Skroutz API Documentation on Swagger UI (unofficial)

<p>
    <img src="https://avatars0.githubusercontent.com/u/285550?s=200&v=4" align="center" height="20%" width="20%"> The Skroutz API documented live with Swagger UI.
</p>


# Project Goal

This project demonstrates how to convert documentation given as a [Postman Collection](https://www.postman.com/collection/) (that is hosted online) to a Swagger formatted documentation ([OpenAPI Specification](https://swagger.io/docs/specification/about/)), that is real-time updated according to the Postman Collection given in the beginning. 

To visualize and interact with the documentation we use [Swagger UI](https://swagger.io/tools/swagger-ui/). 

The technology the project is based on is [Node.js](https://nodejs.org/en/about/).


# Specific application

[Skroutz.gr](https://www.skroutz.gr/) is a Comparison Shopping Engine (CSE) which evolved to an E-commerce Marketplace (it is considered the largest product price search engine in Greece).

Skoutz used to provide an [official API](https://developer.skroutz.gr/api/v3/) (deprecated now). Their API documentation can be found, along with a list of all the example requests, as a Postman collection [here](https://developer.skroutz.gr/assets/misc/skroutz_postman_collection.json). 

In this project we periodically query the given documentation (in Postman format) to create and update a documentation in another format, with Swagger UI.

The project is deployed with [Heroku](https://www.heroku.com/) and can be found online at http://bit.ly/swagger-skroutz.

You can find Skroutz on GitHub at https://github.com/skroutz.


# Contributing

* You can always submit a PR if you want to suggest improvements or fix issues.

* Check out the open issues at https://github.com/KAUTH/Swagger-Skroutz-API/issues.
