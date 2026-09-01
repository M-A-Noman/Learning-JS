import fs from "fs/promises";

async function loadUserData(userId) {
  try {
    const data = await fs.readFile(`users/${userId}.json`, "utf8");
    const user = JSON.parse(data);
    if (!user.email) {
      throw new Error("Invalid user data:missing email");
    }
    return user;
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(`User ${userId} not found`);
    } else if (err instanceof SyntaxError) {
      throw new Error("Invalid user data format");
    }
    throw err;
  } finally {
    console.log(`finished process user ${userId}`);
  }
}

(async () => {
  try {
    const user = await loadUserData(123);
    console.log("user loaded:", user);
  } catch (error) {
    console.error("Failed to load user:", error.message);
  }
})();
