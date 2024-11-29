import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

/**
 * Global Setup Function
 * 
 * This function is executed before all Playwright tests start. It is responsible for configuring
 * environment variables based on the test environment specified. If a test environment is provided
 * via the `test_env` environment variable, it loads the corresponding `.env` file and overrides the 
 * existing environment variables.
 * 
 * @param config - The full configuration object provided by Playwright.
 */
async function globalSetup( config: FullConfig ) {
    
     // Determine the environment to load
    const testEnv = process.env.test_env || "qa"; // Default to 'qa' if not specified
    const envFilePath = path.resolve(process.cwd(), `.env.${testEnv}`);
    
    try {
    // Load environment variables from the appropriate .env file
    const result = dotenv.config({
        path: envFilePath,
        override: true
    });

    if (result.error) {
        throw result.error;
    }

    console.log(`Environment variables loaded from: ${envFilePath}`);
    } catch (error) {
    console.error(`Failed to load environment variables from ${envFilePath}:`, error);
    throw new Error(`Environment setup failed. Ensure the file ".env.${testEnv}" exists.`);
    }

}

export default globalSetup;