// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Features%3A%3Aget_feature_metadata

import { execute } from './index';

export default () => {
  return execute({
    function: 'get_feature_metadata',
  });
};
