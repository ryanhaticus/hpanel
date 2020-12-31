// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Arelease_outgoing
export interface releaseOutgoingParameters {
  email?: number;
}

import { execute } from './index';

export default (param?: releaseOutgoingParameters) => {
  return execute({
    function: 'release_outgoing',
    parameters: param
  });
};
