const mockHandler = {
  post: {
    async test({ uri, data, query, request }) {
      return storage.set("test", data);
    },
  },
  get: {
    test() {
      return storage.get("test");
    },
  },
};
