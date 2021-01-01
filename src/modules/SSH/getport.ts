// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSH%3A%3Aget_port

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_port',
  });
};
