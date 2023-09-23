import Express, { Request, Response } from "express";
import router from "./src/routes";

async function start(): Promise<void> {
  try {
    const app = Express();
    const PORT: number = 5000;

    app.use(Express.json())
    app.use('/api/v1', router)
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

void start();