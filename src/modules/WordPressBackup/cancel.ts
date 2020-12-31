// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressBackup%3A%3Acancel
export interface cancelParameters {
  site?: number;
}

import { execute } from './index';

export default (param?: cancelParameters) => {
  return execute({
    function: 'cancel',
    parameters: param
  });
};
