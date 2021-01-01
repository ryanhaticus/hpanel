// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Stats%3A%3Aget_site_errors
export interface getSiteErrorsParameters {
  domain: string;
  log?: string;
  maxlines?: number;
}

import { execute } from './index';

export default (param: getSiteErrorsParameters) => {
  return execute({
    function: 'get_site_errors',
    parameters: param,
  });
};
