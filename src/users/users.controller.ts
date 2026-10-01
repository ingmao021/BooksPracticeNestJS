import { BadRequestException, Body, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private  userService: UsersService) {

    }


    //primer metodo para retornar la lista de usuarios
    @Get()
    getAllUSers() {
        return this.userService.findAll();
    }

    /**
    @Get(':id')
    getUserById(@Param('id') id: string) {

        const data = this.users.find((user) => user.id === id);
        console.log(data);

        if (data) {
            throw new ForbiddenException(`No tienes permisos para ver el usuario con id ${id}`);
        }
        throw new NotFoundException(`El usuario con id ${id} no existe`);
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
            throw new NotFoundException(`El usuario con nombre ${name} no existe`);
        }
    }


    @Post()
    createUser(@Body() userPayload: CreateUserDto) {

        const newUSer = {
            ...userPayload,
            id: `${new Date().getTime()}`,
        }

        this.users.push(newUSer);

        return {
            msg: "Usuario creado correctamente",
            user: userPayload
        }

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

        //agregar el usuario al arreglo de usuarios


    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        const position = this.users.findIndex((user) => user.id === id);
        this.users.splice(position, 1);
        return {
            msg: "Usuario eliminado correctamente",

        }

    }


    @Put(':id')
    updateUser(@Param('id') id: string, @Body() changes: UpdateUserDto) {
        console.log('.:: ID usuario: ', id);
        console.log('.:: Cambios: ', changes);

        const position = this.users.findIndex((user) => user.id === id);
        if (position === -1) {
            throw new NotFoundException(`Usuario con ID ${id} no existe`);
        }
        const currentData = this.users[position];
        const updateUser = {
            ...currentData,
            ...changes,
        };

        this.users[position] = updateUser;

        return {
            msg: 'Usuario actualizado',
            data: updateUser,
        };
    }
*/

}
