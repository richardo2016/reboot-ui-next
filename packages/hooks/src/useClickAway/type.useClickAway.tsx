import React from 'react';

import mod from './index';

type IArgs = Parameters<typeof mod>;

// type ReMap<PREFIX extends string, T extends object> = {
//   [K in keyof T as `${PREFIX extends '' ? `` : `${PREFIX}.`}${K & string}`]: T[K]
// }

export declare const useClickAway: React.FC<{
  _dumi_type: 'function',
  _dumi_signature: (options: IArgs[0]) => ReturnType<typeof mod>
}>;

export declare const Options: React.FC<
  {
    _dumi_type: 'properties'
  } & NonNullable<IArgs[0]>
>;

export declare const Return: React.FC<
  {
    _dumi_type: 'retValue'
    _dumi_signature: ReturnType<typeof mod>
  }
>;
