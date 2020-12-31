// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Chrome%3A%3Aget_dom
export interface getDomParameters {
  page_title?: number;
}

import { execute } from './index';

export default (param?: getDomParameters) => {
  return execute({
    function: 'get_dom',
    parameters: param
  });
};
