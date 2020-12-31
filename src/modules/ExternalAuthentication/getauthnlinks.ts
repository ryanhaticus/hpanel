// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ExternalAuthentication%3A%3Aget_authn_links

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_authn_links'
  });
};
