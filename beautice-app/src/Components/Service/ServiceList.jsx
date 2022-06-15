import './Service.css';
import React from "react";

function ServiceList() {
    const product = [
        {id: 1, name: 'Skin care', price: 59},
        {id: 2, name: 'Hair care', price: 49},
        {id: 3, name: 'Body care', price: 79},
        {id: 4, name: 'Hair removal', price: 65},
        {id: 5, name: 'Peeling', price: 89},
        {id: 6, name: 'Cryopolysis', price: 119},
    ];

    let res = product.map(function(item) {
        return <tr key={item.id} className={'Service-module'}>
            <td className={'Service-item'}>{item.name}</td>
            <td className={'Service-price'}>{item.price}</td>
        </tr>;
    });

    return <div>
        <table className={'Service-list'}>
            <tr className={'Service-title'}>
                <th className={'Service-item'}>Name</th>
                <th className={'Service-price'}>Price</th>
            </tr>
            {res}
        </table>
    </div>;
}

export default ServiceList;