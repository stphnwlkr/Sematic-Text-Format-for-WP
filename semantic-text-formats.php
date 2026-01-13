<?php
/**
 * Plugin Name:       Semantic Text Formats
 * Plugin URI:        https://flyingw.press
 * Description:       Adds inline quote, citation, and abbreviation formatting to paragraph blocks
 * Version:           1.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            Stephen Walker
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       semantic-text-formats
 *
 * @package SemanticTextFormats
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueue the format extensions for paragraph blocks.
 */
function semantic_text_formats_enqueue_format_scripts() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_enqueue_script(
		'semantic-text-formats-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_enqueue_style(
		'semantic-text-formats-editor',
		plugins_url( 'build/index.css', __FILE__ ),
		array(),
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', 'semantic_text_formats_enqueue_format_scripts' );