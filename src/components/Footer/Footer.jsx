import React from "react";
import { apps, googlePlay,mainImg } from "../../asset";

const Footer = () => {
  return (
    <div id="Download" className="wrap-footer">
      <div className="wrap-img-footer">
        <img src={mainImg} alt="Ruang Engineer" />
      </div>
      <div className="wrap-cta-footer">
        <h1 className="cta-konsultasi">
        Dapatkan Konsultasi Gratis
        </h1>
        <h1 className="cta-download">Dwonload App</h1>
        <p className="cta-helpdesk">
            Kami siap siaga menjadi solusi Bisnis Anda.
        </p>
        <div className="wrap-cta-img">
          <img src={apps} alt="" className="img-apps" />
          <img src={googlePlay} alt="" className="img-gPlay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;