import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            isActive: true,
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            isActive: false,
        },
        {
            id: '3',
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            isActive: true,
        },
        {
            id: '4',
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            isActive: false,
        },
        {
            id: '5',
            name: 'Charlie Wilson',
            email: 'charlie.wilson@example.com',
            isActive: true,
        },
    ];

    findAll(): User[]{
        return this.users.filter((user) => user.isActive);
    }
}
