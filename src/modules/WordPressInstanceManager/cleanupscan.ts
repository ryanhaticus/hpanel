// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Acleanup_scan
export interface cleanupScanParameters {
  guid?: number;
}

import { execute } from './index';

export default (param?: cleanupScanParameters) => {
  return execute({
    function: 'cleanup_scan',
    parameters: param
  });
};
