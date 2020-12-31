// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ResourceUsage%3A%3Aget_usages

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_usages'
  });
};
