import React from 'react'
import CookieConsent from "react-cookie-consent";

const Cookie = () => {
  return (
    <div>   
        <CookieConsent
            location="bottom"
            buttonText="Accepter"
            cookieName="Travel_Space_Cookies"
            style={{ background: "#000000" }}
            buttonStyle={{ color: "#FFFFFF", fontSize: "13px", backgroundColor: "#3710E6"}}
            expires={150}
            >
            Ce site web utilise des cookies et autres traceurs à des fins de mesure d’audience, 
            partage avec les réseaux sociaux, personnalisation des contenus, et publicité 
            personnalisée sur nos services et ceux de nos partenaires{" "}
        </CookieConsent>
    </div>

  )
}

export default Cookie
