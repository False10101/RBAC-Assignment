import {User} from '@/types';

const USERS: User[] = [
  { id: '1', name: 'Alice Admin', role: 'ADMIN', email: 'alice@company.com' },
  { id: '2', name: 'Bob User', role: 'USER', email: 'bob@company.com' },
];

export async function getUserbyId(id : string) : Promise<User | undefined> {
    await new Promise((resolve)=> setTimeout(resolve, 50));
    return USERS.find((user) => user.id === id);
}