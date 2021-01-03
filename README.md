# HPanel

An unofficial CPanel client for the Node runtime.

At the moment, this project only supports the [**UAPI**](https://documentation.cpanel.net/display/DD/Guide+to+UAPI) API.

## Installation

`npm install hpanel`

## Usage

TypeScript:

```ts
// In this example, we are going to be using the Email module. All of UAPI's modules are available, however.
import hpanel, { Email } from 'hpanel';

// Authorize via. API Token
hpanel({
  // For security, it is best if these credentials are implemented via a .env file.
  username: 'my-cpanel-username',
  token: 'ABCDEFGH...',
  cpanelUri: 'https://mypanel.example.com:2083/'
});

// Begin to use UAPI's modules and functions!
(async () => {
  const data = await Email.listpops();
  // ... do something.
  await Email.deletefilter({
    account: 'haticus@example.com',
    filtername: 'coffee'
  });
  // etc.
})();

// That's it!
```

JavaScript:

```js
// In this example, we are going to be using the Email module. All of UAPI's modules are available, however.
const hpanel = require('hpanel');

// Authorize via. API Token
hpanel.defualt({
  // For security, it is best if these credentials are implemented via a .env file.
  username: 'my-cpanel-username',
  token: 'ABCDEFGH...',
  cpanelUri: 'https://mypanel.example.com:2083/'
});

// Begin to use UAPI's modules and functions!
(async () => {
  const data = await hpanel.Email.listpops();
  // ... do something.
  await hpanel.Email.deletefilter({
    account: 'haticus@example.com',
    filtername: 'coffee'
  });
  // etc.
})();

// That's it!
```

### Contributing to HPanel

If you have a feature you'd like to add to HPanel, feel free to fork this repository and submit a pull request with details about the work you completed. At the moment, we are not officially supporting this repository and will default all issues to the community. As appropriate, we will update this repository now and then. Pull requests, however, will be looked at as soon as they arrive.
