import { mkdirSync, writeFileSync } from "node:fs";

const line = "I dropped the production database and asked the backup for forgiveness, not permission.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
