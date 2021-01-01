// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aprocess_messages
export interface processMessagesParameters {
  email: string;
  queuefile: string;
  action: string;
}

import { execute } from './index';

export default (param: processMessagesParameters) => {
  return execute({
    function: 'process_messages',
    parameters: param,
  });
};
