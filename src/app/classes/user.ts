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
    gender: string;
    categories: string[];
    address: string;
    fcmToken: string;
    photoUrl: string;
}
