import FakeDataGenerator from 'fake-data-generator-taiwan';
import _ from 'lodash';
import { faker } from '@faker-js/faker';
import { randomBytes } from 'crypto';
import fs from 'fs';
import bcrypt from 'bcrypt'; // 导入 bcrypt

const { random } = _;
const saltRounds = 10; // bcrypt 的 salt 轮数

let generator = new FakeDataGenerator();

function generateRandomPassword(length) {
  return new Promise((resolve, reject) => {
    randomBytes(length, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString('base64').slice(0, length));
      }
    });
  });
}

async function generateHash(plainPassword) {
  return await bcrypt.hash(plainPassword, saltRounds);
}

async function generateMembers() {
  const num = 100;
  let membersInfoData = [];
  let membersData = [];

  for (let i = 0; i < num; i++) {
    const registerDate = faker.date.between({
      from: new Date(2000, 0, 1),
      to: new Date(2024, 5, 14),
    });
    let name = generator.Name.generate();
    const formattedRegisterDate = `${registerDate.getFullYear()}${String(registerDate.getMonth() + 1).padStart(2, '0')}${String(registerDate.getDate()).padStart(2, '0')}`;
    let order = `${random(1, 100)}`.padStart(3, '0');
    let memberId = formattedRegisterDate + order;
    let randomPassword = await generateRandomPassword(10); // 等待密碼生成完成
    let hashedPassword = await generateHash(randomPassword); // 生成哈希密码
    let email = faker.internet.email();

    let points = random(0, 50000);
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let idNum = generator.IDNumber.generate();
    let mobile = generator.Mobile.generate(0, 10);
    let address = generator.Address.generate();

    let avatar = faker.image.avatar();
    const birthday = faker.date.between({
      from: new Date(1950, 0, 1),
      to: new Date(2000, 11, 31),
    });
    const formattedBirthday = `${birthday.getFullYear()}-${String(birthday.getMonth() + 1).padStart(2, '0')}-${String(birthday.getDate()).padStart(2, '0')}`;

    let j = random(0, 3);
    let category = ['', '中南美洲', '歐洲', '日本'];
    let tag = category[j];

    let members = {
      member_id: memberId,
      name: name,
      email: email,
      password: hashedPassword, // 使用哈希密码
    };

    let membersInfo = {
      sid: i + 1,
      first_name: firstName,
      last_name: lastName,
      id_num: idNum,
      mobile: mobile,
      birthday: formattedBirthday,
      points: points,
      tag: tag,
      address: address,
      member_id: memberId,
      avatar: avatar,
    };

    membersInfoData.push(membersInfo);
    membersData.push(members);
  }

  fs.writeFileSync('seeds/MembersInfo.json', JSON.stringify(membersInfoData, null, 2));
  fs.writeFileSync('seeds/Members.json', JSON.stringify(membersData, null, 2));

  console.log('假資料已產生並儲存 seeds/MembersInfo.json ');
  console.log('假資料已產生並儲存 seeds/Members.json ');
}

generateMembers();
