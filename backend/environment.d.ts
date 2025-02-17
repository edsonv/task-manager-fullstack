declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_CONNECTION_STRING: string;
      JWT_SECRET: string;
    }
  }
}

export {};
