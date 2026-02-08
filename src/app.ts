// Require the framework and instantiate it

// ESM
import Fastify from "fastify";
import "dotenv/config";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

const PORT = parseInt(process.env.PORT ?? "3000");

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: true,
  credentials: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  return {
    message: "E-commerce Syntax Wear API",
    version: "1.0.0",
    status: "running",
  };
});

fastify.get("/health", async (request, reply) => {
  return {
    status: "Ok",
    timestamp: new Date().toISOString()
  }
})

// Run the server!
fastify.listen({ port: PORT }, function (err, address) {
  console.log("Server running at port:" + PORT);

  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});


export default fastify