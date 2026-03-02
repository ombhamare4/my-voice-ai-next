import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";
// Initialize the PostgreSQL adapter with the database URL from environment variables
const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

/**
 * Singleton pattern for PrismaClient to prevent multiple instances in development.
 * This avoids exhausting the database connection pool during hot reloads.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};

// Use existing prisma instance if available (singleton), otherwise create a new one
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

// In development, store the prisma instance in globalThis to reuse it across reloads
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };
