// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressBackup%3A%3Astart
export interface startParameters {
  site: string;
}

import { execute } from './index';

export default (param: startParameters) => {
  return execute({
    function: 'start',
    parameters: param,
  });
};
