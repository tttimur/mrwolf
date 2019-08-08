<?php /* Template Name: Events */

get_header();
?>

<main id='page-events'>
  <div class='c12' id='content-wrap'>
    <?php get_template_part('components/intro'); ?>

    <?php 
      if (have_rows('events')) : while (have_rows('events')) : the_row(); 
        $event_title = get_sub_field('event_title');
        $event_image = get_sub_field('event_image');
        $event_description = get_sub_field('event_description');
    ?>
      <section sm='xw' class='event my4 x xac'>
        <figure sm='c12' class='c6'>
          <picture class='psr c12 db' style='padding-bottom:<?php echo $event_image['height'] / $event_image['width'] * 100 ?>%'>
            <img class='psa t0 l0 c12 h100' src='<?php echo $event_image['url']; ?>' />
          </picture>
        </figure>

        <div sm='c12' class='event-info  py2 c6 content-come-in'>
          <h2><?php echo $event_title; ?></h2>
          <p><?php echo $event_description; ?></p>
          <div>
            <?php if (have_rows('event_links')) : while (have_rows('event_links')) : the_row(); 
              $link = get_sub_field('event_link');
            ?>

              <a class='btn' href=''><?php echo $link['title'] ?></a>

            <?php endwhile; endif; ?>
          </div>
        </div>
      </section>

    <?php
      endwhile; endif;
    ?>
  </div>
</main>


<?php 
get_footer();
?>