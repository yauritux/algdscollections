import type { Config } from "@jest/types";
//Sync Object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};

export default config;
