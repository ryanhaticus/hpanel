// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+StatsBar%3A%3Aget_stats
export interface getStatsParameters {
  display?: number;
  warnings: boolean;
  warninglevel: number;
  warnout: boolean;
  infinityimg: number;
  infinitylang: number;
  rowcounter: number;
}

import { execute } from './index';

export default (param: getStatsParameters) => {
  return execute({
    function: 'get_stats',
    parameters: param
  });
};
