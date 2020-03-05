import {UserRole} from './user-role';

export class User {
    id: number;
    username: string;
    email: string;
    phone: string;
    createTime: Date;
    updateTime: Date;
    role: UserRole[];
    points: number;
    firebaseUid: string;
    gender: string;
    fcmToken: string;
    photoUrl: string;
}
