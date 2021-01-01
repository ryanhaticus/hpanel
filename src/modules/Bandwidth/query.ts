// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Bandwidth%3A%3Aquery
export interface queryParameters {
  grouping: string;
  interval?: string;
  domains?: string;
  protocols?: string;
  start?: number;
  end?: number;
  timezone?: string;
}

import { execute } from './index';

export default (param: queryParameters) => {
  return execute({
    function: 'query',
    parameters: param,
  });
};
