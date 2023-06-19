// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';


import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import DonorLogin from './pages/login/DonorLogin';
import ReceiverLogin from './pages/login/ReceiverLogin';
import AdminLogin from './pages/login/AdminLogin';

import SignUpDonor from './pages/signUp/SignUpDonor';
import SignUpReceiver from './pages/signUp/SignUpReceiver';
import Navbar from './component/common/navbar/Navbar';
// import Navbar1 from './component/common/navbar/Navbar1';

//Donor
import DonorPageContent from './component/donor/DonorPageContent';
import DonorProfile from './component/donor/DonorProfile';
import DonorUpdate from './component/donor/DonorUpdate';
import DonorHistory from './component/donor/DonorHistory';
import DonorCampaign from './component/donor/DonorCampaign';
import ReceiverList from './component/donor/ReceiverList';

//Receiver
import ReceiverPageContent from './component/receiver/ReceiverPageContent';
import ReceiverProfile from './component/receiver/ReceiverProfile';
import ReceiverUpdate from './component/receiver/ReceiverUpdate';
import ReceiverHistory from './component/receiver/ReceiverHistory';
import RequestDonation from './component/receiver/Request';

//StaffAdmin
import StaffAdminPageContent from './component/staffAdmin/StaffAdminPageContent';
import StaffAdminProfile from './component/staffAdmin/StaffAdminProfile';
import StaffAdminUpdate from './component/staffAdmin/StaffAdminUpdate';

//StaffDelivery
import DeliveryProfile from './component/staffDeliveryPartner/DeliveryProfile';

//StaffCE
import CEProfile from './component/staffCustomerExecutive/CEProfile';

import Footer from './component/common/footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (

    <div>
     
      <Router>
        
      <ToastContainer/>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          
          {/* <Navbar1/> */}
        </div>
      </div>

      <div>
          <Routes>
              <Route path="/donorlogin" element={<DonorLogin/>}/>
              <Route path="/receiverlogin" element={<ReceiverLogin/>}/>
              <Route path="/adminlogin" element={<AdminLogin/>}/>
              <Route path="/signupdonor" element={<SignUpDonor/>}/>
              <Route path="/signupreceiver" element={<SignUpReceiver/>}/>

              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>


              {/* Donor */}
              <Route path="/donorprofile" element={<DonorProfile/>}/>
              <Route path="/donorupdate" element={<DonorUpdate/>}/>
              <Route path="/donorpagecontent" element={<DonorPageContent/>}/>
              <Route path="/donorhistory" element={<DonorHistory/>}/>
              <Route path="/donorcampaign" element={<DonorCampaign/>}/>
              <Route path="/receiverlist" element={<ReceiverList/>}/>

              
              {/* Receiver */}
              <Route path="/receiverpagecontent" element={<ReceiverPageContent/>}/>
              <Route path="/receiverprofile" element={<ReceiverProfile/>}/>
              <Route path="/receiverupdate" element={<ReceiverUpdate/>}/>
              <Route path="/receiverhistory" element={<ReceiverHistory/>}/>
              <Route path="/requestdonation" element={<RequestDonation/>}/>

              {/* StaffAdmin */}
              <Route path="/staffadminpagecontent" element={<StaffAdminPageContent/>}/>
              <Route path="/staffadminprofile" element={<StaffAdminProfile/>}/>
              <Route path="/staffadminupdate" element={<StaffAdminUpdate/>}/>

              {/* StaffDelivery */}
              <Route path="/deliveryprofile" element={<DeliveryProfile/>}/>

              {/* StaffCustomeExecutive */}
              <Route path="/ceprofile" element={<CEProfile/>}/>

          </Routes>
        
    </div>
    
    </Router>
  
    <Footer/>
    </div>
    
  );
}

export default App;
