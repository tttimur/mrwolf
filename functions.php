<?php
add_action('acf/init', 'my_acf_init');
function my_acf_init() {
	// check function exists
	if( function_exists('acf_register_block') ) {
		// register a testimonial block
		// acf_register_block(array(
		// 	'name'				=> 'Intro',
		// 	'title'				=> __('Intro'),
		// 	'description'		=> __('Intro Section block'),
		// 	'render_callback'	=> 'my_acf_block_render_callback',
		// 	'category'			=> 'formatting',
		// 	'icon'				=> 'admin-comments',
		// 	'keywords'			=> array( 'layout', 'intro' ),
		// ));
	}
}

function my_acf_block_render_callback( $block ) {
	// convert name ("acf/testimonial") into path friendly slug ("testimonial")
	$slug = str_replace('acf/', '', $block['name']);
	
	// include a template part from within the "template-parts/block" folder
	if( file_exists( get_theme_file_path("blocks/content-{$slug}.php") ) ) {
		include( get_theme_file_path("blocks/content-{$slug}.php") );
	}
}

function wp_custom_new_menu() {
  register_nav_menu('main-menu',__( 'Main Menu' ));
}
add_action( 'init', 'wp_custom_new_menu' );