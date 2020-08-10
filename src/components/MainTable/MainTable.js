import React from "react";
import { Table } from 'react-bootstrap';
import classes from './MainTable.module.css'

// Сделал с использовонием таблиц бутстрапа, на компоненты сильно не дробил, тк в данном случае это не особо нужно
// но при необходимости можно подробить

const renderTable = ({ main, gender, price, discount, delivery_date, link, ...props }) => {
    return (
        <tr key={price.last_price + price.first_price}>
            <td><img className={classes.img} src={main.main_pic} alt={'img'} /></td>
            <td>{gender.gender}</td>
            <td>{price.last_price} руб.</td>
            <td>{discount.discount_current} %</td>
            <td>{delivery_date.delivery_date}</td>
            <td><a href={link.link} target='_blank' without rel="noopener noreferrer">Ссылка на товар</a></td>
        </tr>
    )
}

export const MainTable = ({ data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Фото</th>
                    <th>Пол</th>
                    <th>Цена</th>
                    <th>Скидка</th>
                    <th>Дата поставки</th>
                    <th>Ссылка</th>
                </tr>
            </thead>
            <tbody>
                {data.data.map(renderTable)}
            </tbody>
        </Table>
    )
}
