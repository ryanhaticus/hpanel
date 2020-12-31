// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+cPGreyList%3A%3Adisable_all_domains

import { execute } from './index';

export default () => {
  return execute({
    function: 'disable_all_domains'
  });
};
