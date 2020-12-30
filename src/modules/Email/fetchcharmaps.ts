// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Afetch_charmaps

import { execute } from './index';

export default () => {
  return execute({
    function: 'fetch_charmaps'
  });
};
