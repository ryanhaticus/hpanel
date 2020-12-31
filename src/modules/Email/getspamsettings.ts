// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_spam_settings
export interface getSpamSettingsParameters {
  account: number;
}

import { execute } from './index';

export default (param: getSpamSettingsParameters) => {
  return execute({
    function: 'get_spam_settings',
    parameters: param
  });
};
