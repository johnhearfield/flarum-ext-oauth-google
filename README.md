# Flarum Google Authenticator
Allows users to login using their Google Account.

## Installation
To install, use composer:
```
composer require johnhearfield/flarum-ext-oauth-google
```
## Usage
* Install extension via Composer / Packagist
* Enable extension in the admin/extensions of Flarum
* Fill in the settings field for the extension

----------
## Setup instructions ##
----------
Before you can integrate Google Sign-In into your website, you must have a Google API Console project. In the project, you create a client ID, which you need to call the sign-in API.

Follow the steps described here: https://developers.google.com/identity/sign-in/web/devconsole-project

****
Once you have completed the above steps, you will need to enable the Google+ API to pull the user data required to create a user on Flarum

1. Go to the Google API Dashboard : https://console.developers.google.com/apis/dashboard
2. Select your existing project to go to the project's dashboard
3. Click on **Enable API+** on the top and search for **Google+ API** and click on 'Enable'

You should now be able to login using Google. 

****
**Optional** *Hosted domain*

The *hd* paramater limits sign-in to a particular Google Apps hosted domain.

https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters

Leave the Hosted Parameter blank if you want any Google-enabled email to login, unless you want to whitelist only your @googleapp.domain email addresses (for things like a company Flarum board)
