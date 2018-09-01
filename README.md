Quick Start
[Create React App] (https://github.com/facebook/create-react-app)
```
npx create-react-app my-app
cd my-app
npm start
```
https://www.valentinog.com/blog/react-webpack-babel/
https://habr.com/post/248799/

Facebook
Компонета
Объединение 

Главная единица (строительный блок) в мире реакта считается компонента

**Компоненты** участки кода которые инкапсулируют в себе часть логики и представления

Примеры компонентов


- Элементы
- Компоненты
- JSX
- Virtual DOM
- Рендеринг
- Состояние
- Композиция

```
npm init
npm install --save react react-dom
babel-preset-react
babel-preset-env
```

Step 1 -> src/index.js
```
function Hello (){
    return <div>Hello world</div>;
}

```
Step 2 - *JSX* и является синтаксическим расширением JavaScript.  
    Никакой магии [babeljs](https://babeljs.io/repl)  
    Пример других [шаблонизаторов](https://learn.javascript.ru/template-lodash)

Step 3 - один компонент на верхнем уровне   
**Error** - Adjacent JSX elements must be wrapped in an enclosing tag

Step 4 - Создаем products

```
const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
```

Step 5 - Product Передача параметров в компаненту
https://learn.javascript.ru/destructuring

Step 6 - Расширенный компонент
```
class Button extends Component 
this.props
```
State - состояние компоненты
```
this.state 
```
Step 7
```
onClick
add to cart / Checkout 
addToCart = () => {
        this.setState({
            added: true,
            date: new Date().toLocaleTimeString()
        });
    }
```
http://qaru.site/img/e0f9621db44bb65232ff9d640aac9ee7.png
    
