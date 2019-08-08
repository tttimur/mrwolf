<?php
// for intro component,
// title, description and button
$intro = get_field('intro');
$intro_title = $intro['title'];
$intro_description = $intro['description'];
$intro_button = $intro['button'];
?>

<section sm='pt2' class='intro c12 tac mb3'>
  <h1 class='content-come-in'><?php echo $intro_title; ?></h1>
  <div class='intro-description ttu content-come-in'>
    <?php echo $intro_description; ?>
  </div>
  <div class='intro-button content-come-in'>
    <?php 
      if ($intro_button) :

    ?>
        <a class='btn' href='<?php echo $intro_button['url'] ?>'><?php echo $intro_button['title'] ?></a>
    <?php 
      endif;
    ?>
  </div>
</section>