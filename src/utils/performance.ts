export const performanceMonitor = {
  markStart(name: string) {
    performance.mark(`${name}-start`);
  },

  markEnd(name: string) {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  },

  getMetrics(name: string) {
    const entries = performance.getEntriesByName(name);
    return entries.length > 0 ? entries[entries.length - 1].duration : 0;
  },

  clearMetrics() {
    performance.clearMarks();
    performance.clearMeasures();
  },
};
