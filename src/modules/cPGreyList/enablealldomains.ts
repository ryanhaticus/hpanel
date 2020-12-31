// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+cPGreyList%3A%3Aenable_all_domains

import { execute } from './index';

export default () => {
  return execute({
    function: 'enable_all_domains'
  });
};
