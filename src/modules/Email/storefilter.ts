// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Astore_filter
export interface StoreFilterParameters {
  account?: string;
  filtername: string;
  oldfiltername?: string;
  action: string;
  dest?: string;
  match: string | number;
  opt?: string;
  part: string;
  val: string | number;
}

import { execute } from './index';

export default (param: StoreFilterParameters) => {
  return execute({
    function: 'store_filter',
    parameters: param
  });
};
