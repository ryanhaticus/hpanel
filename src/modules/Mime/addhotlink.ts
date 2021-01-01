// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Aadd_hotlink
export interface addHotlinkParameters {
  urls: string;
  extensions: string;
  allow_null?: boolean;
  redirect_url: string;
}

import { execute } from './index';

export default (param: addHotlinkParameters) => {
  return execute({
    function: 'add_hotlink',
    parameters: param,
  });
};
