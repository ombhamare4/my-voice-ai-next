import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

/**
 * Validates environment variables using T3 Env and Zod.
 * This ensures that the application doesn't start if required environment variables are missing or invalid.
 */
export const env = createEnv({
  /**
   * Server-side environment variables schema.
   * These variables are only accessible in server-side code (e.g., API routes, Server Components).
   */
  server: {
    DATABASE_URL: z.string().min(1),
  },
  /**
   * Runtime environment variables for client-side code.
   * Next.js 13+ app router requires this to be empty if only using server-side variables,
   * or populated with process.env for client-side variables prefixed with NEXT_PUBLIC_.
   */
  experimental__runtimeEnv: {},
  /**
   * Skip validation in environments where variables might be missing (e.g., during builds on CI).
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
