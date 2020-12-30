// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Atrace_filter
export interface TraceFilterParameters {
  account?: string;
  msg: string;
}

import { execute } from './index';

export default (param: TraceFilterParameters) => {
  return execute({
    function: 'trace_filter',
    parameters: param
  });
};
