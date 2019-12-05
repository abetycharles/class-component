import React from 'react';
import '../css/Catalog.css';
class Catalog extends React.Component {
    constructor(props){
        super(props);
        this.state = {books: [
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
            ]}
    }
    render() {
        const {books} = this.state;
         return (
            <div className="practice">
                <div>I'm
                    the catalog component
                </div>


                    {
                        books.map(book => <div className="book" key={book.title}>
                            <img src={book.amazonImage} width="50%" alt="book" />
                            <p><strong>{book.title}</strong><br />
                            {book.author}<br/>
                            ${book.price}</p>
                            </div>
                        )
                    }


            </div>

        );
    }
}

export default Catalog;
