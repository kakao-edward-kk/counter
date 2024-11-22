export type Options = {
  hideButton: boolean;
};

export const DEFAULT_OPTIONS = {
  hideButton: false,
} satisfies Options;

export class OptionStore {
  options: Options = $state(DEFAULT_OPTIONS);

  constructor(options: Partial<Options>) {
    this.setOptions(options);
  }

  setOptions(options: Partial<Options>) {
    this.options = {
      ...this.options,
      ...options,
    };
  }
}
