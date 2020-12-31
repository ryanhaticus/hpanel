// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Alist_queued_messages
export interface listQueuedMessagesParameters {
  email?: number;
  date: number;
}

import { execute } from './index';

export default (param: listQueuedMessagesParameters) => {
  return execute({
    function: 'list_queued_messages',
    parameters: param
  });
};
