// import React from 'react';
// import './App.css';
// import AddAdForm from './components/AddAdForm';
// import AdList from './components/AdList';
// import { AdProvider } from './contexts/AdContext';
//
// function App() {
//     return (
//         <AdProvider>
//             <div className="App">
//                 <h1>Доска объявлений</h1>
//                 <AddAdForm />
//                 <AdList />
//             </div>
//         </AdProvider>
//     );
// }
//
// export default App;

import React from 'react';
import './App.css';
import { AdProvider } from './contexts/AdContext'; // Перемещаем импорт в начало файла
import AddAdForm from './components/AddAdForm';
import AdList from './components/AdList';

function App() {
    return (
        <AdProvider>
            <div className="App">
                <h1>Bulletin Board</h1>
                <AddAdForm />
                <AdList />
            </div>
        </AdProvider>
    );
}

export default App;

