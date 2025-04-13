<?php
if (!defined('ABSPATH')) {
	exit;
}

function cpc_enqueue_assets(): void {
	wp_enqueue_style('cpc-style', plugins_url('../assets/css/main.css', __FILE__));
	wp_enqueue_script('cpc-script', plugins_url('../assets/dist/main.js', __FILE__), [], null, true);
}
add_action('wp_enqueue_scripts', 'cpc_enqueue_assets');
