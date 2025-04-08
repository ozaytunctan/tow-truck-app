import {Injector, Signal} from "@angular/core";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {debounceTime} from "rxjs";

/**
 * Debounce a signal by a given debounce time.
 *
 * @param signal
 * @param debounceTimeMs
 * @param options
 */
export const useDebounceTime = <TValue>(
  signal: Signal<TValue>,
  debounceTimeMs: number,
  options?: { injector?: Injector }
): Signal<TValue> => {

  const debouncedObservable$ = toObservable<TValue>(
    signal,
    {
      injector: options?.injector
    }
  ).pipe(debounceTime(debounceTimeMs));
  return toSignal(debouncedObservable$, {initialValue: signal()});
}
