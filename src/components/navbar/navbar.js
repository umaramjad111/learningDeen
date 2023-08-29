import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h3 class="navbar-brand fs-4 fw-bold">Dunya O Akharat</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/bayan">Bayan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/quran">Quran</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/hadees">Hadees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/duai">Duai</a>
        </li>   
      </ul>
    </div>
  </div>
</nav>
  )
}
