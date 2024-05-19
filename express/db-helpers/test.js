import bcrypt from 'bcrypt';

const saltRounds = 10;

const generateHash = (plainPassword) => {
  return bcrypt.hash(plainPassword, saltRounds);
}

generateHash('123456').then((hash) => {
  console.log(hash);
});
