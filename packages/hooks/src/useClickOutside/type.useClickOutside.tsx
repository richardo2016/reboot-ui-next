import React from 'react';

import useOnClickOutside from './index';

type IArgs = Parameters<typeof useOnClickOutside>;

export type IApiParamters = {
  handler: IArgs[0],
  ref?: IArgs[1]
};

const ProxyExporter: React.FC<IApiParamters> = () => <>Hello World!</>;

export default ProxyExporter;
