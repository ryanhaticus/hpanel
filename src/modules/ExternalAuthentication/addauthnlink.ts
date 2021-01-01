// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ExternalAuthentication%3A%3Aadd_authn_link
export interface addAuthnLinkParameters {
  username: string;
  provider_id: string;
  subject_unique_identifier: string;
  preferred_username: string;
}

import { execute } from './index';

export default (param: addAuthnLinkParameters) => {
  return execute({
    function: 'add_authn_link',
    parameters: param,
  });
};
