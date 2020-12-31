// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aprocess_ssl_pending_queue

import { execute } from './index';

export default () => {
  return execute({
    function: 'process_ssl_pending_queue'
  });
};
