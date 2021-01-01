// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressRestore%3A%3Acleanup
export interface cleanupParameters {
  site: string;
}

import { execute } from './index';

export default (param: cleanupParameters) => {
  return execute({
    function: 'cleanup',
    parameters: param,
  });
};
