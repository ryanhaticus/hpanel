// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Bandwidth%3A%3Aquery
export interface queryParameters {
  grouping?: number;
  interval: number;
  domains: number;
  protocols: number;
  start: number;
  end: number;
  timezone: number;
}

import { execute } from './index';

export default (param: queryParameters) => {
  return execute({
    function: 'query',
    parameters: param
  });
};
