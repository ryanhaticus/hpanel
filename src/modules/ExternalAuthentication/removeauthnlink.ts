// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+ExternalAuthentication%3A%3Aremove_authn_link
export interface removeAuthnLinkParameters {
  provider: string;
  subject_unique_identifier: string;
}

import { execute } from './index';

export default (param: removeAuthnLinkParameters) => {
  return execute({
    function: 'remove_authn_link',
    parameters: param,
  });
};
