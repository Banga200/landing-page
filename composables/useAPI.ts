// composables/useApi.ts
const requestLock = new Map<string, number>();

export const useApi = async (request: string, opts: any = {}) => {
   const nuxtApp = useNuxtApp();

  // i18n locale (safe typing)
  const locale = (nuxtApp.$i18n as any)?.locale || ref("ar");



    try {
      // Token & URL
      const tokenRaw = localStorage.getItem("token");
      const localRaw = localStorage.getItem("local");
      const baseURL = localStorage.getItem("url") || "";

      const token = tokenRaw ? JSON.parse(tokenRaw) : null;
      const local = localRaw ? JSON.parse(localRaw) : null;

      // Method normalization
      const method = (opts.method || "GET").toUpperCase();

      // Prevent duplicate requests
      const key = `${method}:${request}`;
      const now = Date.now();
      const last = requestLock.get(key) || 0;

      if (now - last < 800) {
        console.warn("⛔ Duplicate request blocked:", key);
        return { data: null, code: 429 };
      }

      requestLock.set(key, now);

      // MAIN REQUEST
      const response = await $fetch.raw(request, {
        baseURL,
        headers: {
          language: locale.value || local?.value || "ar",
          Authorization: `Bearer ${token?.value || "null"}`,
        },
        ...opts,
      });

      // Handle success alerts
    //   handleSuccess(method, url, response.status, notify);

      return {
        data: response._data,
        code: response.status,
      };
    } catch (error: any) {
    //   handleApiError(error, notify);
      throw error;
    } finally {
    }

}
