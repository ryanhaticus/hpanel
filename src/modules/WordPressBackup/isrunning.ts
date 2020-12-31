// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressBackup%3A%3Ais_running
export interface isRunningParameters {
  site?: number;
}

import { execute } from './index';

export default (param?: isRunningParameters) => {
  return execute({
    function: 'is_running',
    parameters: param
  });
};
