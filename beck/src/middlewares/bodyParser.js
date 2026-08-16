export const bodyParser = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        let parsed = JSON.parse(body);

        resolve(parsed);
      });
    } catch (error) {
      reject(error.message);
    }
  });
};
