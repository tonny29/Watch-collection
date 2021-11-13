import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faPhone,faMailBulk,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style row">
            <Col lg={4} xs={12}>
                <h4><FontAwesomeIcon icon={faHome}/>{' '}WELLCOME TO WATCHES WORLD</h4>
                <p><FontAwesomeIcon icon={faMapMarkerAlt}/>{' '}House 01, Road 07 Jashim <br /> Uddin Over Bridge Open 24 hours</p>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}02334455667 <br /> 028874646329 </p>
                <p><FontAwesomeIcon icon={faMailBulk}/>{' '}watchesworld@gmail.com</p>
            </Col>
            <Col lg={4} xs={12}>
                <h5>FOR ANY INFORMATION</h5>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}023748567120</p>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}026773540089</p>
                <p><FontAwesomeIcon icon={faPhone}/>{' '}023247894577</p>
                <p><FontAwesomeIcon icon={faMailBulk}/>{' '}watchwatch@gmail.com</p>
            </Col>
            <Col lg={4} xs={12}>
               <div className="footer-img">
               <img src="https://timeandtidewatches.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-08-at-6.59.35-PM.jpeg" alt="" />
               </div>
            </Col>
        </div>
    );
};

export default Footer;

