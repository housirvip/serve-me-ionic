import {Address} from './address';
import {VendorCategory} from './vendor-category';
import {User} from './user';

export class Vendor {
    id: number;
    uid: number;
    name: string;
    email: string;
    phone: string;
    photoUrl: string;
    address: Address;
    categories: VendorCategory[];
    createTime: Date;
    updateTime: Date;
    user: User;
}
