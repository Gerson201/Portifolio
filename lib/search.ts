import Fuse from "fuse.js";

export function createFuse<T>(items: T[], keys: Array<keyof T>) {
  return new Fuse(items, {
    includeScore: false,
    threshold: 0.3,
    keys: keys as string[],
  });
}


