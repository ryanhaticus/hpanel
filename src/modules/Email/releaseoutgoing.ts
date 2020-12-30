// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Arelease_outgoing
export interface ReleaseOutgoingParameters {
  email: string;
}

import { execute } from './index';

export default (param: ReleaseOutgoingParameters) => {
  return execute({
    function: 'release_outgoing',
    parameters: param
  });
};
