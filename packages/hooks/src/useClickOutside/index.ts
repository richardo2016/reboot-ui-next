import React from 'react'

const isSupportTouch = 'ontouchstart' in document
type IEV = keyof Pick<DocumentEventMap, 'touchstart' | 'mousedown'>;

const EVNAME: IEV = !isSupportTouch ? 'mousedown' : 'touchstart';

export default function useOnClickOutside<E extends HTMLElement>(
  handler: (ev: DocumentEventMap[IEV] & { target: E }) => any,
  ref?: React.RefObject<E>,
) {
  const alwaysRef = React.useRef<E>(null);

  const realRef = ref || alwaysRef;

  React.useLayoutEffect(
    () => {
      const listener = (event: DocumentEventMap[IEV] & { target: E }) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!realRef.current || (realRef.current.contains(event.target as E | null))) {
          return;
        }

        handler(event);
      };

      document.addEventListener(EVNAME, listener);

      return () => {
        document.removeEventListener(EVNAME, listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [realRef, handler]
  );

  return alwaysRef;
}
