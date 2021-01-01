// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Atrace_delivery
export interface traceDeliveryParameters {
  recipient: string;
}

import { execute } from './index';

export default (param: traceDeliveryParameters) => {
  return execute({
    function: 'trace_delivery',
    parameters: param,
  });
};
