import React from 'react';
import '../css/Practice.css';
const Practice = (props) => {
    console.log(props.textSize);
    let books = [
        {
            title: 'Milkman: A Novel',
            author: 'Anna Burns',
            amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/41eOX0cBT8L._SX331_BO1,204,203,200_.jpg',
            amazonUrl: 'https://www.amazon.com/dp/1644450003',
            price: 7.99
        },
        {
            title: 'Feel Free: Essays',
            author: 'Zadie Smith',
            amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51NLFKhZnIL._SX327_BO1,204,203,200_.jpg',
            amazonUrl: 'https://www.amazon.com/dp/1594206252',
            price: 16.16
        },
        {
            title: 'There There: A novel',
            author: 'Tommy Orange',
            amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51RuAbKH%2BtL._SX326_BO1,204,203,200_.jpg',
            amazonUrl: 'https://www.amazon.com/dp/0525520376',
            price: 11.46
        }
    ]
    const bigCss = {fontSize: "3em"};
    const smallCss = {fontSize: "1.3em"};

    return (
        <div className="practice">
            <div style={(props.textSize && props.textSize.toLowerCase() === "big") ? bigCss : smallCss }>I'm the practice component</div>

            <ul>
                {
                books.map(book => <li key={book.title}>{book.title}</li>
                )
            }

            </ul>
        </div>

    );
}
export default Practice;
