import React, { useState } from 'react';
import Sidebar from '../components/Admin/Sidebar';
import WelcomeScreen from '../components/Admin/WelcomeScreen';
import Inquiries from '../components/Admin/Inquiries';
import Newsletters from '../components/Admin/Newsletters';
import Events from '../components/Admin/Events&News';
import Blogs from '../components/Admin/Blogs';

import '../components/Admin/Dashboard.css'

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('welcome');

  const renderContent = () => {
    switch (activeSection) {
      case 'inquiries':
        return <Inquiries />;
      case 'newsletters':
        return <Newsletters />;
      case 'events':
        return <Events />;
      case 'blogs':
        return <Blogs />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="col-md-12 d-flex">
      <div className="col-md-2">
        <Sidebar onMenuItemClick={setActiveSection} />
      </div>
      <div className="col-md-10" style={{paddingTop:'50px'}}>
        {renderContent()}
      </div>
    </div>
  );
}

export default AdminDashboard;
