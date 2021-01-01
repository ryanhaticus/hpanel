// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Market%3A%3Aset_status_of_pending_queue_items
export interface setStatusOfPendingQueueItemsParameters {
  provider: string;
  order_item_id: string;
  status: string;
}

import { execute } from './index';

export default (param: setStatusOfPendingQueueItemsParameters) => {
  return execute({
    function: 'set_status_of_pending_queue_items',
    parameters: param,
  });
};
