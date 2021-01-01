// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+LogManager%3A%3Aset_settings
export interface setSettingsParameters {
  archive_logs?: boolean;
  prune_archive?: boolean;
}

import { execute } from './index';

export default (param?: setSettingsParameters) => {
  return execute({
    function: 'set_settings',
    parameters: param,
  });
};
