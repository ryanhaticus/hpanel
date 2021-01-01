// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressRestore%3A%3Astart
export interface startParameters {
  site: string;
  backup_path: string;
}

import { execute } from './index';

export default (param: startParameters) => {
  return execute({
    function: 'start',
    parameters: param,
  });
};
