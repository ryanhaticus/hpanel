// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aspritelist

import { execute } from './index';

export default () => {
  return execute({
    function: 'spritelist',
  });
};
