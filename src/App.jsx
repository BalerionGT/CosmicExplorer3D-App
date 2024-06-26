import React from 'react';
import styles from './style';
import { Hero,Navbar,Footer} from './components';
import Services from './components/Services';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const App = () => {
   return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Services/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App