const config = {
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token token=${process.env.TOKEN}`,
  },
};

export const applyInterceptors = (request) => ({ ...request, ...config });
