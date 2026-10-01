import { BadRequestException, Body, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    //primer metodo para retornar la lista de usuarios
    @Get()
    getAllUSers() {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    //crear un endpoint para buscar por el nombre y retornar el correo
    @Get('search/:name')
    getUserByName(@Param('name') name: string) {

        return this.userService.searchByName(name);
    }


    @Post()
    createUser(@Body() userPayload: CreateUserDto) {
        return this.userService.createUser(userPayload);

    }
         /**
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
