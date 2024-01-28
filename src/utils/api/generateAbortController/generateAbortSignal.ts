export default function generateAbortSignal() {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 8000);

  return { signal: controller.signal, timeout };
}