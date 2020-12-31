// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControl%3A%3Aretrieve
export interface retrieveParameters {
  fields: number;
}

import { execute } from './index';

export default (param: retrieveParameters) => {
  return execute({
    function: 'retrieve',
    parameters: param
  });
};
