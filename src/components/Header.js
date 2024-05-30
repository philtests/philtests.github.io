import React from 'react';

const Header = () => {
    return (
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">VMC Hub</h5>
      <nav class="my-2 my-md-0 mr-md-3">        
        <a class="p-2 text-dark" href="#">Tests</a>
        <a class="p-2 text-dark" href="#">Categories</a>
        <a class="p-2 text-dark" href="#">Authors</a>
        <a class="p-2 text-dark" href="#">Newsroom</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign in</a>
    </div>
    );
};

export default Header;