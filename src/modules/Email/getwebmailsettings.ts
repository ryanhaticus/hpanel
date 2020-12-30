// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aget_webmail_settings
export interface GetWebmailSettingsParameters {
  account?: string;
}

import { execute } from './index';

export default (param: GetWebmailSettingsParameters) => {
  return execute({
    function: 'get_webmail_settings',
    parameters: param
  });
};
