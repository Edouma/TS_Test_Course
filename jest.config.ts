import type { Config } from '@jest/types'

//jest configuration
const config: Config.InitialOptions={
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true
}

export default config;