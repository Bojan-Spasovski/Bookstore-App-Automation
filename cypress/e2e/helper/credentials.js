import Helper from "./randomGen";

export const testCredentials = {
  userName: "Bojan1",
  userPass: "Test123!",
};

export const invalidCredentials = {
  invalidUserName: "Bojan123456",
  invalidUserPass: "Test123!123456Invalid",
};

export const validUser = {
  newValidFirstName: "TestFirstName ".concat(Helper.getRandomNum(0, 100)),
  newValidLastName: "TestLastName ".concat(Helper.getRandomNum(0, 100)),
  newValidUsername: "TestUsername ".concat(Helper.getRandomNum(0, 100)),
  newValidPassword: "TestPassword123! ".concat(Helper.getRandomNum(0, 100)),
};

export const RegistrationInvalidCredentials = {
  invalidUserPass: "123",
};

export const searchExistingBook = {
  existingBook: "Programming",
};

export const searchNonExistingBook = {
  nonExistingBook: "Leman Russ",
};

export const searchProfileExistingBook = {
  ProfileExistingBook: "Git",
};

export const TemporaryUser = {
  TempValidFirstName: "Tempo",
  TempValidLastName: "Temporario",
  TempValidUsername: "Temp",
  TempValidPassword: "Temp123!",
};
