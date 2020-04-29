import {UserRole} from './user-role';
import {Vendor} from './vendor';

export class User {
    id: number;
    username: string;
    email: string;
    phone: string;
    password: string;
    createTime: Date;
    updateTime: Date;
    role: UserRole;
    points: number;
    firebaseUid: string;
    gender: string;
    deviceToken: string;
    photoUrl: string;
    vendor: Vendor;
    wallet: number;
}
