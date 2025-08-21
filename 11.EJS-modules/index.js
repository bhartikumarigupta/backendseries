const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));
const product = [{
    name: 'Laptop',
    price: 1200,
    description: 'A high-performance laptop for all your computing needs.'

}
    , {
    name: 'Smartphone',
    price: 800,
    description: 'A latest model smartphone with advanced features.'
}, {
    name: 'Headphones',
    price: 150,
    description: 'Noise-cancelling headphones for an immersive audio experience.'
}];
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        users: product
    });
}
);
app.get('/about', (req, res) => {
    res.render('about');
}
);
const port =3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);

