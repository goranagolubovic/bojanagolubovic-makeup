// import next from "next";

// // note the "https" not "http" required module. You will get an error if trying to connect with https
// import { createServer } from "https";
// import { parse } from "url";

// import { readFileSync } from "fs";

// const hostname = "localhost";
// const port = 3001;
// const dev = process.env.NODE_ENV !== "production";

// const app = next({ dev, hostname, port });

// const sslOptions = {
//   key: readFileSync("./ssl/server.key"),
//   cert: readFileSync("./ssl/server.crt"),
// };

// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = createServer(sslOptions, (req, res) => {
//     // custom api middleware
//     if (req.url.startsWith("/api")) {
//       return handle(req, res);
//     } else {
//       // Handle Next.js routes
//       return handle(req, res);
//     }
//   });
//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log("> Ready on https://localhost:" + port);
//   });
// });
