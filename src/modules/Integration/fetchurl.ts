// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Integration%3A%3Afetch_url
export interface fetchUrlParameters {
  app?: number;
}

import { execute } from './index';

export default (param?: fetchUrlParameters) => {
  return execute({
    function: 'fetch_url',
    parameters: param
  });
};
