// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Restore%3A%3Adirectory_listing
export interface directoryListingParameters {
  path: string;
}

import { execute } from './index';

export default (param: directoryListingParameters) => {
  return execute({
    function: 'directory_listing',
    parameters: param,
  });
};
