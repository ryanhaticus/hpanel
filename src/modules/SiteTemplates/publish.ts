// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SiteTemplates%3A%3Apublish
export interface publishParameters {
  targetordocroot?: number;
  source: number;
  path: number;
  template: number;
  parameter_name: number;
}

import { execute } from './index';

export default (param: publishParameters) => {
  return execute({
    function: 'publish',
    parameters: param
  });
};
