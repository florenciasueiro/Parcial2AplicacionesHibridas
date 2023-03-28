import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FooterCSS from '../css/Footer.module.css';



function Footer() {
  return (
    <footer className={FooterCSS.footerBox}>
      <div  className={`${FooterCSS.pt-4} ${FooterCSS.container}`}>
        <section className={`${FooterCSS.mb-4} ${FooterCSS.bgBlack}`}>
        <ul>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.facebook}`} href="#">
      <FacebookIcon/>
    </a>
  </li>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.twitter}`} href="#">
      <TwitterIcon/>
    </a>
  </li>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.instagram}`} href="#">
      <InstagramIcon/>
    </a>
  </li>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.youtube}`} href="#">
      <YouTubeIcon/>
    </a>
  </li>
</ul>
        </section>
      </div>

      <div className={`${FooterCSS.textCenter} ${FooterCSS.footerCopy} ${FooterCSS.textDark} ${FooterCSS.p-3}`}>
        © 2022 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Asset
        </a>
      </div>
    </footer>
  );
}
export default Footer
//holis