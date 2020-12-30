// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+CacheBuster%3A%3Aupdate

import { execute } from './index';

export default () => {
  return execute({
    function: 'update'
  });
};
