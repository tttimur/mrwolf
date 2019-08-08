<?php 
/* Template Name: Venue */ 
get_header();
$style_root = get_bloginfo('template_url');
?>

<main id='page-venue'>
  <div class='c12' id='content-wrap'>
  <?php get_template_part('components/intro'); ?>


  <?php
    if (have_rows('venues')) : while (have_rows('venues')) : the_row(); 
  ?>
      <section class='venue px2 mb3 x xjc xw'>
        <div class='venue-slideshow slideshow initial-spot c12 psr mb4 fade-in content-come-in'>
          <div class='arrow arrow-right curp psa cy r0 z4'>
            <img src='<?php echo $style_root; ?>/assets/arrow-right.svg' alt='Arrow Right' />
          </div>
          <div class='arrow arrow-left curp psa cy r0 z4'>
            <img src='<?php echo $style_root; ?>/assets/arrow-left.svg' alt='Arrow Left' />
          </div>

          <div class='db siema psr'>
            
          
          
            <?php if (have_rows('venue_images')) : while (have_rows('venue_images')) : the_row(); 
              
              $venue_image = get_sub_field('venue_image');  
            ?>
              <picture class='psr c12 db' style='padding-bottom:<?php echo $venue_image['height'] / $venue_image['width'] * 100 ?>%'>
                <img class='psa t0 l0 c12 h100' src='<?php echo $venue_image['url']; ?>' /> 
              </picture>
            <?php endwhile; endif; ?>
          </div>
        </div>

        <div sm='c12 pr0 mb2' class='c7 content-come-in'><?php the_sub_field('text_left'); ?></div>
        <!-- <div sm='c12 pl0' class='c6 pl1'><?php the_sub_field('text_right'); ?></div> -->
      </section>
  <?php
    endwhile; endif;
  ?>
  </div>

</main>

<?php 
get_footer();
?>