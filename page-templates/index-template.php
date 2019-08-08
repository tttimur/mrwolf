<?php 
/* Template Name: Homepage */ 
$style_root = get_bloginfo('template_url');
get_header();
?>
<main id='page-homepage'>
  <figure id='landing-image' class='psf cy tac r0'>
    <div class='psr'>
      <img class='blurry-logo psa c' src='<?php echo $style_root; ?>/assets/main-logo.svg' alt='Mister Wolf Logo' /> 
      <img src='<?php echo $style_root; ?>/assets/main-logo.svg' alt='Mister Wolf Logo' /> 
    </div>

  </figure>
</main>

<?php
get_footer();
?>
