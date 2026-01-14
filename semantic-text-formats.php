<?php
/**
 * Plugin Name:       Semantic Text Formats
 * Plugin URI:        https://flyingw.press
 * Description:       Adds inline quote, citation, and abbreviation formatting to paragraph blocks
* Version:           1.1.6
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
	$js_path    = plugin_dir_path( __FILE__ ) . 'build/index.js';
	$css_path   = plugin_dir_path( __FILE__ ) . 'build/index.css';
	$ver        = file_exists( $js_path ) ? (string) filemtime( $js_path ) : ( isset( $asset_file['version'] ) ? (string) $asset_file['version'] : null );

	wp_enqueue_script(
		'semantic-text-formats-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$ver,
		true
	);

	wp_enqueue_style(
		'semantic-text-formats-editor',
		plugins_url( 'build/index.css', __FILE__ ),
		array(),
		file_exists( $css_path ) ? (string) filemtime( $css_path ) : $ver
	);
}
add_action( 'enqueue_block_editor_assets', 'semantic_text_formats_enqueue_format_scripts' );