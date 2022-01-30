import { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
    const getMenu = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        setMenuList(res.data);
    }
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            {menuList.map((menu) =>
                <div key={menu.id} className="col-4">
                    <div className="card">
                        <div className="col-8 mx-auto">
                            <img src={menu.image} className="img-fluid" alt={menu.title} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{menu.title}</h5>
                            <p className="card-text">{menu.description}</p>
                            <button className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Menu;