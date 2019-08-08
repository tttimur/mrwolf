<!DOCTYPE html>
<html>
  <head>
    <?php 
      wp_head();
      
      $style_root = get_bloginfo('template_url');
      $root = get_bloginfo('url');
    ?>

    <title>Mister Wolf Toronto</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel='stylesheet' href='<?php echo $style_root; ?>/css/reset.css' />
    <link rel='stylesheet' href='<?php echo $style_root; ?>/css/util.css' />
    <link rel='stylesheet' href='<?php echo $style_root; ?>/assets/fonts/font.css' />
    <link rel='stylesheet' href='<?php echo $style_root; ?>/css/main.css' />
  </head>
<body <?php body_class(); ?>>


<aside id='background' class='psf t0 r0'>

</aside>


<aside class='psf h100 c12 t0 l0 close-header-main-bg'></aside>

<header class='psf'>

  <div class='psr h100'>
    <div class='open-header-side-paper psa t0 h100 z4'></div>
  
    <div sm='db' class='x xw xjc xac px2 header-items h100 psr'>
        <div class='psa close-menu-parent'>
          <div id='close-menu-desktop' class='toggle-header curp'>
            <svg viewBox='0 0 30 30' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M.0002 26.6974l14.9259-14.9258 3.3026 3.3026L3.3029 30 .0002 26.6974z" fill="#D3C9B9"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5563 29.9787l-13.473-13.473 3.3027-3.3026L29.8589 26.676l-3.3026 3.3027z" fill="#D3C9B9"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8587 3.3026L14.9329 18.2285l-3.3026-3.3026L26.5561 0l3.3026 3.3026z" fill="#D3C9B9"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3027.0214l13.4729 13.4729-3.3026 3.3027L0 3.324 3.3028.0214z" fill="#D3C9B9"/>
            </svg>
          </div>
        </div>

      <div class='psr header-items-content'>
        <nav class='title fwb mxa pr4 mb1'>
          <ul>
          <li class='staggered-load'><a data-navigation href='<?php echo $root; ?>'>Home</a></li>
          <li class='staggered-load'><a data-navigation href='<?php echo $root; ?>/venue'>Venue</a></li>
          <li class='staggered-load'><a data-navigation href='<?php echo $root; ?>/events'>Events</a></li>
          <li class='staggered-load'><a target='_blank' rel='noopener noreferrer' href='https://facebook.com'>Photos</a></li>
          <li class='staggered-load'><a data-navigation href='<?php echo $root; ?>/reservations'>Reservations</a></li>
          <li class='staggered-load'><a data-navigation href='<?php echo $root; ?>/contact'>Contact</a></li>
          <li class='staggered-load'><a class='curd' id='bluemoon'>Blue Moon</a></li>
          </ul>
        </nav>

        <div sm='psa t0 r0 ' class='mb2 staggered-load'>
          <a target='_blank' rel='noopener noreferrer' class='sm-icon vam dib fb-icon' href=''><img src='<?php echo $style_root; ?>/assets/fb-icon.svg' alt='Facebook logo'></a>
          <a target='_blank' rel='noopener noreferrer' class='sm-icon vam dib ig-icon' href=''><img src='<?php echo $style_root; ?>/assets/ig-icon.svg' alt='Instagram logo'></a>
        </div>

        <div class='ttu mb2 header-desc'>
          <p class='staggered-load'>Nightlife hours <br /> Saturdate 10PM–Late</p>
          <p class='staggered-load'><a href='mailto:info@mrwolftoronto.com'>info@mrwolftoronto.com</a> <br /> <a target='_blank' rel='noopener noreferrer' href='https://www.openstreetmap.org/node/6419859636#map=19/43.64774/-79.40075'>567 Queen St W. Toronto</a>
        </div>

        <div id='open-menu-mobile'>
          <svg viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class='h-t' width="34.2857" height="3.11688" fill="#D3C9B9"/>
            <rect class='h-t' y="13.6364" width="34.2857" height="3.11688" fill="#D3C9B9"/>
            <rect class='h-t' y="26.8831" width="34.2857" height="3.11688" fill="#D3C9B9"/>
          </svg>
        </div>

      </div>

    </div>
  </div>
</header>

<aside id='open-menu-desktop' class='psf toggle-header curp z4'>
  <svg viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect class='h-t' width="34.2857" height="3.11688" fill="#D3C9B9"/>
    <rect class='h-t' y="13.6364" width="34.2857" height="3.11688" fill="#D3C9B9"/>
    <rect class='h-t' y="26.8831" width="34.2857" height="3.11688" fill="#D3C9B9"/>
  </svg>
</aside>

<aside id='loader' class='psf db c'>
  <div class='loader-el psr db c12'>
  <!-- <img class='c12' src='<?php echo $style_root; ?>/assets/seed-of-life.svg' alt='Loading screen' /> -->
    <img class='c12 psa ' src='<?php echo $style_root; ?>/assets/eclipse0.jpg' alt='Loading screen' />
    <img class='c12 psa' src='<?php echo $style_root; ?>/assets/eclipse1.jpg' alt='Loading screen' />
  </div>
</aside>