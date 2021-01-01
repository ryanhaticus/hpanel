// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SiteTemplates%3A%3Apublish
export interface publishParameters {
  targetordocroot: string;
  source?: string;
  path?: string;
  template?: string;
  parameter_name?: string;
}

import { execute } from './index';

export default (param: publishParameters) => {
  return execute({
    function: 'publish',
    parameters: param,
  });
};
