// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aget_providers_list

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_providers_list',
  });
};
