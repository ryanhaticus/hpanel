// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControlDeployment%3A%3Aretrieve

import { execute } from './index';

export default () => {
  return execute({
    function: 'retrieve',
  });
};
