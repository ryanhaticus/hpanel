import api, { Email } from './src/index';

api({
  username: 'username',
  token: 'U7HMR63FHY282DQZ4H5BIH16JLYSO01M',
  cpanelUri: 'https://example.com:2083/'
});

Email.addpop({
  domain: '',
  email: '',
  password: ''
});
