import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

//interfaz con nombre user
interface User {
    id: number;
    name: string;
    email: string;
}

@Controller('users')
export class UsersController {

    private users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com'
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bob.brown@example.com'
        },
        {
            id: 5,
            name: 'Charlie Wilson',
            email: 'charlie.wilson@example.com'
        }
    ]

    //primer metodo para retornar la lista de usuarios
    @Get()
    getUSers() {
        return{
            msg: 'Lista de usuarios',
            users: this.users
        }
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {

        const data = this.users.find((user) => user.id == id);
        console.log(data);

        if (data) {
            return {
                msg: `El usuario con id ${id} encontrado`,
                data: data
            }
        }
        return {
            msg: `El usuario con id ${id} no existe o no encontrado`,
            data: null
        }
    }

    //crear un endpoint para buscar por el nombre y retornar el correo
    @Get('search/:name')
    getUserByName(@Param('name') name: string) {
        const data = this.users.find((user) => user.name == name);
        console.log(data);
        if (data) {
            return {
                msg: `El correo del usuario ${name} es ${data.email}`,
                data: data
            }
        } else {
            return {
                msg: `El usuario ${name} no existe`,
                data: null
            }
        }
    }


    @Post()
    createUser(@Body() user: User){
        console.log(user);
        this.users.push(user);
        return {
            msg: 'Usuario creado correctamente',
            data: user

        }
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
       const position = this.users.findIndex((user) => user.id === id );
       this.users.splice(position, 1);
        return {
            msg: "Usuario eliminado correctamente",

        }

    }


}
