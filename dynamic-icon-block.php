<?php
/**
 * Plugin Name:       Dynamic Icon Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dynamic-icon-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


function dynamic_icon_block_render_callback( $attributes ) {

	$circle_icon = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
		<circle cx="25" cy="25" r="20" fill="blue" />
	</svg>';

	$square_icon = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
		<rect x="5" y="5" width="40" height="40" fill="green" />
	</svg>';

	$triangle_icon = '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
		<polygon points="25,5 5,45 45,45" fill="red" />
	</svg>';

	$inner_html = '';

	if ( 'circle' === $attributes['icon'] ) {
		$inner_html = $circle_icon;
	} elseif ( 'square' === $attributes['icon'] ) {
		$inner_html = $square_icon;
	} elseif ( 'triangle' === $attributes['icon'] ) {
		$inner_html = $triangle_icon;
	}

	return '<p>' . $inner_html . '</p>';
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_dynamic_icon_block_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'dynamic_icon_block_render_callback',
		)
	);
}
add_action( 'init', 'create_block_dynamic_icon_block_block_init' );
