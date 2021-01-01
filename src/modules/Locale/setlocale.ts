// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Locale%3A%3Aset_locale
export interface setLocaleParameters {
  locale: string;
}

import { execute } from './index';

export default (param: setLocaleParameters) => {
  return execute({
    function: 'set_locale',
    parameters: param,
  });
};
