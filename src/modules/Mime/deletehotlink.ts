// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Adelete_hotlink

import { execute } from './index';

export default () => {
  return execute({
    function: 'delete_hotlink'
  });
};
