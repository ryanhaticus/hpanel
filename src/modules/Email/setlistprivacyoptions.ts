// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aset_list_privacy_options
export interface setListPrivacyOptionsParameters {
  list: string;
  advertised: boolean;
  archive_private: boolean;
  subscribe_policy: number;
}

import { execute } from './index';

export default (param: setListPrivacyOptionsParameters) => {
  return execute({
    function: 'set_list_privacy_options',
    parameters: param,
  });
};
