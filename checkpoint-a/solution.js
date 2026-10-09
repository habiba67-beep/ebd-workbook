
import * as db from "./orders-db.js";

export async function loadOrders() {
    return await db.findAllOrders();
}

export function myOrders(orders) {
    return orders.filter(
        order => order.city === "Cairo" && order.status === "cancelled"
    );
}

export function summarize(orders) {
    if (orders.length === 0) return 0;
    return Math.max(...orders.map(order => order.price));
}

export async function describeOrder(id) {
    try {
        const order = await db.findOrderById(id);
        return `${order.student}: ${order.item} x${order.quantity}`;
    } catch {
        return `No order with id ${id}`;
    }
}

export function toJsonLines(orders) {
    return JSON.stringify(
        orders.map(order => ({
            student: order.student,
            item: order.item
        }))
    );
}



