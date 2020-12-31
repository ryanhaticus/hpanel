// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+cPGreyList%3A%3Ahas_greylisting_enabled

import { execute } from './index';

export default () => {
  return execute({
    function: 'has_greylisting_enabled'
  });
};
