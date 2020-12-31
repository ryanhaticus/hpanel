// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ExternalAuthentication%3A%3Aadd_authn_link
export interface addAuthnLinkParameters {
  username?: number;
  provider_id?: number;
  subject_unique_identifier?: number;
  preferred_username?: number;
}

import { execute } from './index';

export default (param?: addAuthnLinkParameters) => {
  return execute({
    function: 'add_authn_link',
    parameters: param
  });
};
