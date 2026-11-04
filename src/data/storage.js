const namespace = 'gearflow:';

export function readWorkspaceValue(key, fallback) {
  try {
    const value = window.localStorage.getItem(`${namespace}${key}`);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

export function writeWorkspaceValue(key, value) {
  try {
    window.localStorage.setItem(`${namespace}${key}`, JSON.stringify(value));
  } catch (error) {
    // The in-memory experience remains usable when browser storage is unavailable.
  }
}
