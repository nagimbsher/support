import React from 'react';
import './App.css'; 


const LinksComponent = () => {
  return (
    <div>
      <h1 className="heading">اهلا وسهلا</h1>
      <h2 className="heading">للمساعدة اتصل على 0545946241</h2>
      <button className="learn-more-link" onClick={() => window.open("https://govisit.gov.il/ar/app/auth/login", "_blank")} rel="noopener noreferrer">حجز دور للهويه او جواز سفر</button>
      <br />
      <button className="learn-more-link" onClick={() => window.open("https://www.btl.gov.il/%D7%98%D7%A4%D7%A1%D7%99%D7%9D%20%D7%95%D7%90%D7%99%D7%A9%D7%95%D7%A8%D7%99%D7%9D/forms/insurance_forms/Pages/625%20-%20%D7%A9%D7%90%D7%9C%D7%95%D7%9F%20%D7%9C%D7%A7%D7%91%D7%99%D7%A2%D7%AA%20%D7%AA%D7%95%D7%A9%D7%91%D7%95%D7%AA%20-%20%D7%91%D7%A2%D7%9C%D7%99%20%D7%90%D7%A9%D7%A8%D7%94%20%D7%9C%D7%AA%D7%95%D7%A9%D7%91%20%D7%90%D7%A8%D7%A2%D7%99.aspx", "_blank")} rel="noopener noreferrer">‏املأ التامين الوطني لي هوية جديدة</button>
      <br />
      <button className="learn-more-link" onClick={() => window.open("https://www.gov.il/ar/service/apply_for_new_driver_drivers_license", "_blank")} rel="noopener noreferrer">الحصول على رخصة قيادة/ توفس يروك</button>
      <br />
      <button className="learn-more-link" onClick={() => window.open("https://www.theorytest.org.il/", "_blank")} rel="noopener noreferrer">/‏حجز دور للامتحان / حجز دور للتؤوريا</button>
      <br />
      <button className="learn-more-link" onClick={() => window.open("https://ecom.gov.il/voucherspa/input/209?language=ar", "_blank")} rel="noopener noreferrer">تجديد رخصة القيادة او استخراج الرخصة بعد نجاح</button>
    </div>
  );
}

export default LinksComponent;
