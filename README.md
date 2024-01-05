<h3 align="center">
A Discord verification bot using reCAPTCHA v2.

wardbot by nates moded by Sintzy
</h3>

## Requirements

- [Node.js v16.9.0 or higher](https://nodejs.org/en/)
- [Google reCaptcha Key](https://www.google.com/recaptcha/admin/create)

## Setup

- Rename your `config-example.js` file to `config.js`

- Register your site with [reCaptcha](https://www.google.com/recaptcha/admin/create) with the domain you are currently using. If running locally, only put localhost on the domain area. ChoosereCAPTCHA v2 "I'm not a robot" for the reCaptcha Type, and copy the secret and public key into the config.js file. If you are using HTTPS, enable it in the config add your certificate and private key file with the names: `certificate.pem` and `private.pem`.
