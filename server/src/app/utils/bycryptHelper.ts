import bcrypt from 'bcrypt';
import config from '../config';

const isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  const matched = await bcrypt.compare(plainTextPassword, hashedPassword);
  return matched;
};

const hashPassword = async function (plainTextPassword: string) {
  const hashedPassword = await bcrypt.hash(
    plainTextPassword,
    Number(config.bcyrpt_salt_rounds),
  );
  return hashedPassword;
};

export const bcryptHelper = {
  isPasswordMatched,
  hashPassword,
};
