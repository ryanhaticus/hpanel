// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WebmailApps%3A%3Alistwebmailapps
export interface listwebmailappsParameters {
  theme: number;
}

import { execute } from './index';

export default (param: listwebmailappsParameters) => {
  return execute({
    function: 'listwebmailapps',
    parameters: param
  });
};
