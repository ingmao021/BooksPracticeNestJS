import { Controller, Get, Param } from '@nestjs/common';

//crear la interfaz para los pedidos
interface Orders {
    id_order: number;
    //id_user: number;  --> por ahora no es necerio
    product: string;
    quantity: number;
    price: number;
    method_payment: string;
}


@Controller('orders')
export class OrdersController {
    private orders: Orders[] = [
        {
            id_order: 1,
            product: 'Product 1',
            quantity: 2,
            price: 10.99,
            method_payment: 'credit',
        },
        {
            id_order: 2,
            product: 'Product 2',
            quantity: 1,
            price: 5.99,
            method_payment: 'cash',
        },
        {
            id_order: 3,
            product: 'Product 3',
            quantity: 3,
            price: 15.99,
            method_payment: 'card',
        },
    ];

    //RETO 1

    @Get()
    getAllOrders() {
        return this.orders;
    }

    //listar pedidos con pago a credito
    @Get('credit')
    getOrdersByCredit() {
        const credit_orders = this.orders.filter((order) => order.method_payment === 'credit');
        return {
            msg: 'Pedidos con pago a crédito',
            data: credit_orders
        };
    }

    //listar pedidos con pago en efectivo
    @Get('cash')
    getOrdersByCash() {
        const cash_orders = this.orders.filter((order) => order.method_payment === 'cash');
        return {
            msg: 'Pedidos con pago en efectivo',
            data: cash_orders
        };
    }

    //listar pedidos con pago en Tarjeta de Crédito
    @Get('card')
    getOrdersByCard() {
        const cardOrders = this.orders.filter((order) => order.method_payment === 'card');
        return {
            msg: 'Pedidos con pago en Tarjeta de Crédito',
            data: cardOrders
        };
    }

    //algo que me di cuenta que primero deben ir las rutas estaticas deben ir antes de las rutas dinamicas
    // si no, no funciona la ruta dinamica porque al escribir card u las otras piensa que es id_order

    //listar por id de pedido
    @Get(':id_order')
    getOderById(@Param('id_order') id: number) {
        const order = this.orders.find((order) => order.id_order == id);
        if (order) {
            return {
                msg: `El pedido con id ${id} encontrado`,
                data: order,
            };
        } else {
            return {
                msg: `El pedido con id ${id} no encontrado`,
            };
        }
    }

}
