// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Afetch_charmaps
export interface FetchCharmapsParameters {}

import { execute } from './index';

export default (param: FetchCharmapsParameters) => {
  return execute({
    function: 'fetch_charmaps',
    parameters: param
  });
};
