import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const result = [];

  for (const promise of promises) {
    try {
      const value = await promise;
      result.push({ status: 'fulfilled', value });
    } catch (error) {
      result.push({ status: 'rejected', value: error });
    }
  }

  return result;
}
