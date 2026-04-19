import { useEffect, useState } from "react";
import { readWp, subscribeWp, WP_RESOURCES } from "@/lib/wp";

/**
 * Returns the live WordPress payload for a given resource key, with the
 * bundled JSON used as instant initial data. Re-renders when fresh data
 * arrives from the background refresh.
 *
 * Usage:
 *   const hero = useWpData("hero");
 *   const { items } = useWpData("services");
 */
export function useWpData(key) {
  if (!WP_RESOURCES[key]) {
    throw new Error(
      `useWpData: unknown key "${key}". Valid: ${Object.keys(WP_RESOURCES).join(", ")}`
    );
  }
  const [data, setData] = useState(() => readWp(key));

  useEffect(() => {
    // re-read on mount (in case another component already refreshed)
    setData(readWp(key));
    const unsub = subscribeWp(key, (fresh) => setData(fresh));
    return unsub;
  }, [key]);

  return data;
}
