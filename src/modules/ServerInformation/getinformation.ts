// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ServerInformation%3A%3Aget_information

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_information'
  });
};
