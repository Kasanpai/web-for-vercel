import React from 'react';
import {
    YMaps,
    Map,
    Placemark
} from '@pbe/react-yandex-maps';

export default function Shops() {
    const [shops, setShops] = React.useState([]);
    const [name, setName] = React.useState('');
    const [lat, setLat] = React.useState('');
    const [lon, setLon] = React.useState('');
    const [comment, setComment] = React.useState('');

    React.useEffect(() => {
        fetch('/api/shops')
            .then((response) => response.json())
            .then((data) => setShops(data));
    }, []);

    const addShop = async () => {
        const newShop = {
            name,
            lat: Number(lat),
            lon: Number(lon),
            comment
        };

        const response = await fetch('/api/shops', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newShop)
        });

        if (response.ok) {
            setShops([...shops, newShop]);

            setName('');
            setLat('');
            setLon('');
            setComment('');
        }
    };

    return (
        <div>
            <h1>Зоомагазины</h1>

            <YMaps>
                <Map
                    defaultState={{
                        center: [53.1959, 45.0183],
                        zoom: 12
                    }}
                    width="800px"
                    height="500px"
                >
                    {shops.map((shop, index) => (
                        <Placemark
                            key={index}
                            geometry={[shop.lat, shop.lon]}
                            properties={{
                                balloonContentHeader: shop.name,
                                balloonContentBody: shop.comment
                            }}
                        />
                    ))}
                </Map>
            </YMaps>
            <h2>Список зоомагазинов</h2>

            {shops.map((shop, index) => (
                <div key={index}>
                    <h3>{shop.name}</h3>

                    <p>
                        Координаты: {shop.lat}, {shop.lon}
                    </p>

                    <p>
                        Комментарий: {shop.comment}
                    </p>
                </div>
            ))}

            <h2>Добавить зоомагазин</h2>

            <input
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Широта"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
            />

            <input
                placeholder="Долгота"
                value={lon}
                onChange={(e) => setLon(e.target.value)}
            />
            <input
                placeholder="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={addShop}>
                Добавить
            </button>
        </div>
    );
}