// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Ais_mail_sni_supported

import { execute } from './index';

export default () => {
  return execute({
    function: 'is_mail_sni_supported',
  });
};
