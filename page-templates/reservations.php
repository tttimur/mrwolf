<?php /* Template Name: Reservations */ 
get_header();

$style_root = get_bloginfo('template_url');
?>

<main id='page-reservations'>
  <div class='c12' id='content-wrap'>
    <?php get_template_part('components/intro'); ?>

    <div id='reservations' class='c12 mxa mw35 mt4 pt3 content-come-in'>
      <?php
        if (have_rows('reservations')) : while (have_rows('reservations')) : the_row();
      ?>

        <div class='reservation closed c12'>
          <div class='reservation-header psr'>
            <h2 class='c12 curp pr2'><?php the_sub_field('reservation_title'); ?></h2>

            <img class='psa cy r0 curp expand-reso' src='<?php echo $style_root; ?>/assets/expand-icon.svg' alt='Expand reservation icon'>
            <img class='psa cy r0 curp collapse-reso' src='<?php echo $style_root; ?>/assets/close-icon.svg' alt='Expand reservation icon'>
            
          </div>

          <div class='reservation-content'>
            <section class='mb2 mt1 '><?php the_sub_field('reservation_description'); ?></section>

            <section class='form-element form mb1'>
              <?php 
                $form_field = get_sub_field('reservation_form');
                $cf = '[contact-form-7 id="' . $form_field[0]->ID. '" title="' . $form_field[0]->post_title .'"]';
                echo do_shortcode($cf);
              ?>
            </section>
            
            <p class='mb2 fsi pr3'>
              <?php the_sub_field('reservation_subtitle'); ?>
            </p>
          </div>
        </div>

      <?php
        endwhile; endif;
      ?>
    </div>
  </div>
</main>

<?php 
get_footer();
?>