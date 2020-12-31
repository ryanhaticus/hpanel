// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Parser%3A%3Afirstfile_relative_uri

import { execute } from './index';

export default () => {
  return execute({
    function: 'firstfile_relative_uri'
  });
};
