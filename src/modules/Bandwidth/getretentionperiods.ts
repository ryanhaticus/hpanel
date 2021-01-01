// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Bandwidth%3A%3Aget_retention_periods

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_retention_periods',
  });
};
