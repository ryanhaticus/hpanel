// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Arebuild_mail_sni_config
export interface rebuildMailSniConfigParameters {
  reload_dovecot?: boolean;
}

import { execute } from './index';

export default (param?: rebuildMailSniConfigParameters) => {
  return execute({
    function: 'rebuild_mail_sni_config',
    parameters: param,
  });
};
