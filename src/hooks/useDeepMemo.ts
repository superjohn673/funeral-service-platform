import { useRef, useMemo } from "react";
import isEqual from "lodash/isEqual";

export function useDeepMemo<T>(value: T, deps: any[]): T {
  const ref = useRef<T>(value); // 添加初始值

  return useMemo(() => {
    if (isEqual(ref.current, value)) {
      return ref.current;
    }
    ref.current = value;
    return value;
  }, deps);
}
