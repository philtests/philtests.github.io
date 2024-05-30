import React from 'react';

const Main = () => {

    return (
        <div class="main">
<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Coming Soon</h1>
      <p class="lead">This site is still under construction.</p>
    </div>

    <div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Step 1</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted">Accreditation</small></h1>
            <p>Purchase of our tests is restricted to accredited members only.</p><br/>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Apply now</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Step 2</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted">Test Purchase</small></h1>
            <p>You may contact us directly or purchase tests <a href="#">here</a>.</p><br/>
            <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Step 3</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted">Premium Tier</small></h1>
            <p>Upgrade your membership to enjoy priority support and gain access to premium Hub features.</p>
            <button type="button" class="btn btn-lg btn-block btn-primary">Upgrade now</button>
          </div>
        </div>
      </div>      
    </div>
    </div>
    )

};

export default Main;