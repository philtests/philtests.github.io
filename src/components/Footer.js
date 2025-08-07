import React from 'react';

const Footer = () => {
  return (
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
            <small class="d-block mb-3 text-muted">&copy; 2025 PhilTests.<br/> Created by <a target="_new" href="https://clrscr.github.io">Clarissa Ortiaga</a>. All rights reserved.</small>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">Quick Start</a></li>
              <li><a class="text-muted" href="/">User Guide</a></li>
              <li><a class="text-muted" href="/">FAQs</a></li>
              <li><a class="text-muted" href="/">Report an Issue</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Services</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">School Admissions Tesing</a></li>
              <li><a class="text-muted" href="/">Human Resource Evaluatio</a></li>
              <li><a class="text-muted" href="/">Psychological Assessment</a></li>
              <li><a class="text-muted" href="/">Workshops</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">Team</a></li>
              <li><a class="text-muted" href="/">Locations</a></li>
              <li><a class="text-muted" href="/">Terms</a></li>
              <li><a class="text-muted" href="/">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
  )  
};

export default Footer;