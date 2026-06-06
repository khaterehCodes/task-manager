type FakeLoginType = {
  userName: string;
};
export const fakeLogin = async ({ userName }: FakeLoginType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "khatereh") {
        resolve({ jwt: "fake-jwt", role: "admin" });
      } else if (userName === "arezo") {
        resolve({ jwt: "fake-jwt", role: "user" });
      } else {
        reject({ message: "error in authorazitain" });
      }
    }, 2000);
  });
};
