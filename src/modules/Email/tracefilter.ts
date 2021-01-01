// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Atrace_filter
export interface traceFilterParameters {
  account?: string;
  msg: string;
}

import { execute } from './index';

export default (param: traceFilterParameters) => {
  return execute({
    function: 'trace_filter',
    parameters: param,
  });
};
