import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";

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
    
    // Check if a specific test environment is specified
    if( process.env.test_env ) {

        // Load environment variables from the appropriate .env file based on the test environment
        dotenv.config({
            path: `.env.${process.env.test_env}`,
            override: true
        });

    }

}

export default globalSetup;