// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SpamAssassin%3A%3Aupdate_user_preference
export interface updateUserPreferenceParameters {
  preference: string;
  value?: string;
}

import { execute } from './index';

export default (param: updateUserPreferenceParameters) => {
  return execute({
    function: 'update_user_preference',
    parameters: param,
  });
};
