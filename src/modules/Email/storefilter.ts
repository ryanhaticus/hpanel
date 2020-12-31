// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Astore_filter
export interface storeFilterParameters {
  account: number;
  filtername?: number;
  oldfiltername: number;
  [propName: string]: any;
}

import { execute } from './index';

export default (param: storeFilterParameters) => {
  return execute({
    function: 'store_filter',
    parameters: param
  });
};
