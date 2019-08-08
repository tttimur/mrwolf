<?php /* Template Name: Contact */ 
get_header();
?>

<main id='page-contact'>
  <div class='c12' id='content-wrap'>
    <?php get_template_part('components/intro'); ?>

    <div class='form mw35 mxa'>
      <?php 
        $form = get_field('form');
        $form_desc = $form['form_description'];
        $form_field = $form['form'];
      ?>

      <div class='form-desc mb3 content-come-in'><?php echo $form_desc; ?></div>

      <div class='form-element content-come-in'>
        <?php 
        $cf = '[contact-form-7 id="' . $form_field[0]->ID. '" title="' . $form_field[0]->post_title .'"]';
        echo do_shortcode($cf);
        ?>
      </div>

    </div>

  </div>
</main>

<?php 
get_footer();
?>