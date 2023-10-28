import React from "react";
import Image from "next/image";
import { stuffItem } from "@/data-const";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCcAmazonPay } from "@fortawesome/free-brands-svg-icons";
import { faCcApplePay } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";

export default function FooterComponent() {
  return (
    <>
      <div className="bg-gray-900 grid grid-cols-4 gap-0 place-items-center mt-8 mx-0">
        <div>
          <div className="flex justify-between mx-auto px-100">
            <div className="mr-4 flex items-center" style={{ marginTop: "40px",marginBottom:"30px"  }}>
              <div className="icon-circle">
                <FontAwesomeIcon icon={faTruck} size="xl" className="black-icon" />
              </div>
              <p className="font-bold text-white" style={{ marginLeft: "10px", fontSize: "16px"  }}>Delivery</p>
            </div> 
          </div>
        </div>
        <div>
        <div className="flex justify-between mx-auto px-100">
          <div className="mr-4 flex items-center"style={{ marginTop: "40px",marginBottom:"30px"    }}>
            <div className="icon-circle">
              <FontAwesomeIcon icon={faArrowsSpin} size="xl" className="black-icon" />
            </div>
            <p className="font-bold text-white" style={{ marginLeft: "10px" , fontSize: "16px"}}>Return & Exchange</p>
          </div>
        </div>
          </div>
        <div className="flex justify-between mx-auto px-100">
          <div className="mr-4 flex items-center"style={{ marginTop: "40px",marginBottom:"30px"    }}>
            <div className="icon-circle">
              <FontAwesomeIcon icon={faPhone} size="xl" className="black-icon" />
            </div>
            <p className="font-bold text-white" style={{ marginLeft: "10px", fontSize: "16px" }}>+62 1888989888</p>
          </div>
        </div>
        <div className="flex justify-between mx-auto px-100">
          <div className="mr-4 flex items-center"style={{ marginTop: "40px",marginBottom:"30px"    }}>
            <div className="icon-circle">
              <FontAwesomeIcon icon={faEnvelope} size="xl" className="black-icon" />
            </div>
            <p className="font-bold text-white" style={{ marginLeft: "10px", fontSize: "16px" }}>Shop@lipra.com</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 grid grid-cols-4 gap-0 place-items-center mt-0 mx-0">
            <div>
              <p className="font-bold text-white"style={{marginTop: "5 px", marginBottom:"10px", fontSize:"18px" }}>Buyers</p>
              <p className="text-white "style={{ marginBottom:"7px"}} >Payment</p>
              <p className="text-white "style={{ marginBottom:"7px"}}>Personal Data Policy</p>
              <p className="text-white "style={{ marginBottom:"7px"}}>Stock</p>
              <p className="text-white "style={{ marginBottom:"20px"}}>Gift Certificates</p>
            </div>
            <div>
            <p className="text-white"style={{ marginBottom:"7px" }} >Affiliate Program</p>
            <p className="text-white"style={{ marginBottom:"70px"}}>Rules for Using Promo Codes</p>
            </div>
            <div>
              <p className="font-bold text-white"style={{marginTop: "5 px", marginBottom:"10px", marginRight:"45px", fontSize:"18px" }}>About Company</p>
              <p className="text-white "style={{ marginBottom:"7px"}}>About Us</p>
              <p className="text-white "style={{ marginBottom:"7px"}}>Contacts</p>
              <p className="text-white "style={{ marginBottom:"7px"}}>News</p>
              <p className="text-white "style={{ marginBottom:"20px"}}>Vacancies</p>
            </div>
            <div>
              <p className="font-bold text-white"style={{marginTop: "5 px", marginBottom:"10px", marginLeft:"15px", fontSize:"18px" }}>Follow Us On Social Media</p>
                  <div style={{marginBottom:"100px", marginLeft:"15px"}}>
                  <FontAwesomeIcon icon={faFacebook} size="lg" style={{color: "#ffffff", marginRight:"20px"}} />
                  <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffffff", marginRight:"20px" }} />
                  <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#ffffff", marginRight:"20px"}} />
                  <FontAwesomeIcon icon={faTiktok} size="lg" style={{color: "#ffffff", marginRight:"20px"}} />
                  <FontAwesomeIcon icon={faTelegram} size="lg" style={{color: "#ffffff",marginRight:"20px"}} />
                </div>
            </div>
      </div>
      <div className="bg-gray-900 grid grid-cols-4 gap-0 place-items-center mt-0 mx-0">
        <div style={{marginRight:"17px",marginBottom:"70px"}}>
          <p className="text-white" >© 2023 Lipra.</p>
          <p className="text-white" >All rights reserved</p>  
        </div>
        <div style={{marginLeft:"10px",marginBottom:"70px",marginTop:"40px"}}>
          <p className="text-white" >Limited Liability Company Lipra,</p>
          <p className="text-white" >legal address: 220020,</p> 
          <p className="text-white" >Minsk, Pobediteley Ave,</p>
          <p className="text-white" >100, of. 203</p>
        </div>
        <div style={{marginLeft:"55px",marginBottom:"70px"}}>
        <p className="text-white">In the trade register since June 23,</p>
        <p className="text-white">2010, registration number 256476,</p>  
        <p className="text-white">UNP 14886482 </p>
        </div>
        <div>
          <div style={{marginBottom:"100px", marginLeft:"15px"}}>
          <FontAwesomeIcon icon={faCcVisa} size="2xl" style={{marginRight:"10px",color: "#ffffff",}} />
          <FontAwesomeIcon icon={faCcMastercard} size="2xl" style={{marginRight:"10px",color: "#ffffff",}} />
          <FontAwesomeIcon icon={faCcAmazonPay} size="2xl" style={{marginRight:"10px",color: "#ffffff",}} />
          <FontAwesomeIcon icon={faCcApplePay} size="2xl" style={{marginRight:"10px",color: "#ffffff",}} />
          <FontAwesomeIcon icon={faCcPaypal} size="2xl" style={{marginRight:"10px",color: "#ffffff",}} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon-circle {
          background-color: white;
          border-radius: 50%;
          padding: 10px;
          display: inline-block;
        }
      `}</style>
    </>
  );
}