// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ExternalAuthentication%3A%3Aremove_authn_link
export interface removeAuthnLinkParameters {
  provider?: number;
  subject_unique_identifier?: number;
}

import { execute } from './index';

export default (param?: removeAuthnLinkParameters) => {
  return execute({
    function: 'remove_authn_link',
    parameters: param
  });
};
