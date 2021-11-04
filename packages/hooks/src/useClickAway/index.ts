import React from 'react'
import { componentOrElementContains } from '@reboot-ui/common/es/utils/react-like';

type IDocEle = Document | HTMLElement
const noop = (evt: MouseEvent) => void 0

export default function useClickAway<K extends HTMLElement = HTMLElement>(
  options: {
    /**
     * @default {document}
     */
    getTerminalElement?: (() => IDocEle) | IDocEle,
    clickElementRef?: React.RefObject<K | null>,
    clickAway?: (evt: MouseEvent & { target: HTMLElement }) => any
    clickIn?: (evt: MouseEvent & { target: K }) => any
    stopPropagation?: boolean
  } = {}
) {
  const {
    getTerminalElement = document,
    clickElementRef: clkEleRef,
    /**
     * @notice wrap it with `useCallback` recommended
     */
    clickAway = noop,
    /**
     * @notice wrap it with `useCallback` recommended
     */
    clickIn = noop,
    /**
     * @description stop propagation when click in
     */
    stopPropagation = false,
  } = options;

  const alwaysRef = React.useRef<K>(null);

  const realElRef = clkEleRef || alwaysRef;

  React.useLayoutEffect(() => {
    const bubleEl = typeof getTerminalElement === 'function' ? getTerminalElement() : getTerminalElement

    const handler: EventListenerOrEventListenerObject = (
      (evt) => {
        const el: any = evt.target

        let { current: clkEle } = realElRef;

        if (clkEle && componentOrElementContains(clkEle, el)) {
          if (stopPropagation) evt.stopPropagation();

          if (typeof clickIn === 'function')
            clickIn(evt as MouseEvent & { target: K });

          return;
        }

        if (typeof clickAway === 'function')
          clickAway(evt as MouseEvent & { target: HTMLElement });
      }
    )
    bubleEl.addEventListener('click', handler)

    return () => {
      bubleEl.removeEventListener('click', handler)
    }
  }, [realElRef && realElRef.current, clickAway, clickIn]);

  return alwaysRef;
}
