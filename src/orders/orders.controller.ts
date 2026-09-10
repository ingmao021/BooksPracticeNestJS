import { Controller, Get } from '@nestjs/common';

//crear la interfaz para los pedidos
interface Orders {
    id_order: number;
    id_user: number;
    product: string;
    quantity: number;
    price: number;
}


@Controller('orders')
export class OrdersController {

    private orders: Orders[] = [
        {
            id_order: 1,
            id_user: 1,
            product: 'Product 1',
            quantity: 2,
            price: 10.99
        },
        {
            id_order: 2,
            id_user: 2,
            product: 'Product 2',
            quantity: 1,
            price: 5.99
        },
        {
            id_order: 3,
            id_user: 3,
            product: 'Product 3',
            quantity: 3,
            price: 15.99
        }
    ]

    @Get()
    getAllOrders() {
        return this.orders;
    }




    //RETO Crear ordenes
}
