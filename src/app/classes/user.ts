import {UserInfo} from './user-info';

export class User {
    id: string;
    username: string;
    email: string;
    phone: string;
    createTime: Date;
    updateTime: Date;
    role: string[];
    points: number;
    firebaseUid: string;
    userInfo: UserInfo;
}
