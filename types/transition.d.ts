declare global {
  interface Document {
    startViewTransition: (callback: () => void) => {
      ready: Promise<void>;
      finished: Promise<void>;
    };
  }
}

export { };
