// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mime%3A%3Aadd_hotlink
export interface addHotlinkParameters {
  urls?: number;
  extensions?: number;
  allow_null: boolean;
  redirect_url?: number;
}

import { execute } from './index';

export default (param: addHotlinkParameters) => {
  return execute({
    function: 'add_hotlink',
    parameters: param
  });
};
