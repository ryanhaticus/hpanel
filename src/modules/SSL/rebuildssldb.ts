// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Arebuildssldb

import { execute } from './index';

export default () => {
  return execute({
    function: 'rebuildssldb'
  });
};
