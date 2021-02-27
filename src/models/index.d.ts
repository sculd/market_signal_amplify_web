import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class MarketSignal {
  readonly id: string;
  readonly symbol?: string;
  readonly date?: string;
  readonly datetime?: string;
  readonly window_size_minutes?: number;
  readonly min_dro?: number;
  readonly max_jump?: number;
  readonly price?: number;
  constructor(init: ModelInit<MarketSignal>);
  static copyOf(source: MarketSignal, mutator: (draft: MutableModel<MarketSignal>) => MutableModel<MarketSignal> | void): MarketSignal;
}