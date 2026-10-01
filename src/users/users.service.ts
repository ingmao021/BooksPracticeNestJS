import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { User } from './user.model';
import { CreateUserDto } from './user.dto';

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

    findById(id: string): User | undefined {
        const user = this.users.find((user) => user.id === id);
        console.log(user);

        if (user) {
            throw new ForbiddenException(
                `No tienes permisos para ver el usuario con id ${id}`,
            );
        }
        throw new NotFoundException(`El usuario con id ${id} no existe`);
    }

    searchByName(name: string): any | undefined {
        const data = this.users.find((user) => user.name == name);
        console.log(data);
        if (data) {
            return {
                msg: `El correo del usuario ${name} es ${data.email}`,
                data: data,
            };
        } else {
            throw new NotFoundException(
                `El usuario con nombre ${name} no existe`,
            );
        }
    }


    createUser(userPayload: CreateUserDto){
        const newUSer = {
            ...userPayload,
            id: `${new Date().getTime()}`,
            nickname: userPayload.name.substring(0, 3) + '123',
            isActive: true,
        };

        this.users.push(newUSer);

        return {
            msg: 'Usuario creado correctamente',
            user: userPayload,
        };

        // // validar que el correo no este vacio
        // if (!userPayload.email) {
        //     throw new BadRequestException(`El correo electronico no puede estar vacio`);
        // }

        // //validar que el correo tenga un formato valido
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(userPayload.email)) {
        //     throw new BadRequestException(`El correo electronico no es valido`);
        // }

        /**
         * se puede validar de esta manera que el correo no este vacio
         * if(user.email.trim() === ''){
         *      throw new BadRequestException(`El correo electronico no puede estar vacio`);
         * }
         *
         * tambien se puede validar de esta manera que el correo tenga un formato valido
         * if(use.email.includes('@')  === false){
         *      throw new BadRequestException(`El correo electronico no es valido`);
         * } ){
         */
        //agregar el usuario al arreglo de usuarios
    }
}
