import React from 'react';
import Header from './Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

class App extends React.Component
{
    render(){
          return(
            <div>
            <Header />
            <body />
            <Footer />
            </div>
          );
        }
}
export default App ;
