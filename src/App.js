import React, { useState } from 'react';
import Furniture from './EApp/Furniture.jsx';
import Mobile from './EApp/Mobile.jsx';
import Electronics from './EApp/Electronics.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div>
      <div className="title">Online-Shopping</div>

      <hr />
      <div className="menu">
        <button onClick={() => setActiveSection('furniture')}>Furniture</button>
        <button onClick={() => setActiveSection('mobile')}>Mobiles</button>
        <button onClick={() => setActiveSection('electronics')}>Electronics</button>
      </div>
      <div className="content">
        {activeSection === 'furniture' && <Furniture />}
        {activeSection === 'mobile' && <Mobile />}
        {activeSection === 'electronics' && <Electronics />}
        {!activeSection && <p>Select a category to view items.</p>}
      </div>
    </div>
  );
}
