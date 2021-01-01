// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressBackup%3A%3Aany_running

import { execute } from './index';

export default () => {
  return execute({
    function: 'any_running',
  });
};
