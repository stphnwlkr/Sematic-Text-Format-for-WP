/**
 * WordPress dependencies
 */
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { toggleFormat, getActiveFormat } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { Popover, TextControl, Button } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Register inline quote format
 */
registerFormatType( 'fw/inline-quote', {
	title: __( 'Inline Quote', 'semantic-text-formats' ),
	tagName: 'q',
	className: null,
	edit( { isActive, value, onChange } ) {
		return (
			<RichTextToolbarButton
				icon="format-quote"
				title={ __( 'Inline Quote', 'semantic-text-formats' ) }
				onClick={ () => {
					onChange(
						toggleFormat( value, {
							type: 'fw/inline-quote',
						} )
					);
				} }
				isActive={ isActive }
			/>
		);
	},
} );

/**
 * Register citation format
 */
registerFormatType( 'fw/citation', {
	title: __( 'Cite', 'semantic-text-formats' ),
	tagName: 'cite',
	className: null,
	edit( { isActive, value, onChange } ) {
		return (
			<RichTextToolbarButton
				icon="media-document"
				title={ __( 'Cite', 'semantic-text-formats' ) }
				onClick={ () => {
					onChange(
						toggleFormat( value, {
							type: 'fw/citation',
						} )
					);
				} }
				isActive={ isActive }
			/>
		);
	},
} );

/**
 * Register span format
 */
registerFormatType( 'fw/span', {
	title: __( 'Span', 'semantic-text-formats' ),
	tagName: 'span',
	className: null,
	edit( { isActive, value, onChange } ) {
		return (
			<RichTextToolbarButton
				icon="text"
				title={ __( 'Span', 'semantic-text-formats' ) }
				onClick={ () => {
					onChange(
						toggleFormat( value, {
							type: 'fw/span',
						} )
					);
				} }
				isActive={ isActive }
			/>
		);
	},
} );

/**
 * Register definition format
 */
registerFormatType( 'fw/definition', {
	title: __( 'Definition', 'semantic-text-formats' ),
	tagName: 'dfn',
	className: null,
	edit( { isActive, value, onChange } ) {
		return (
			<RichTextToolbarButton
				icon="book"
				title={ __( 'Definition', 'semantic-text-formats' ) }
				onClick={ () => {
					onChange(
						toggleFormat( value, {
							type: 'fw/definition',
						} )
					);
				} }
				isActive={ isActive }
			/>
		);
	},
} );

/**
 * Register abbreviation format
 */
registerFormatType( 'fw/abbreviation', {
	title: __( 'Abbreviation', 'semantic-text-formats' ),
	tagName: 'abbr',
	className: null,
	attributes: {
		title: 'title',
	},
	edit( { isActive, value, onChange, contentRef } ) {
		const [ isPopoverVisible, setIsPopoverVisible ] = useState( false );
		const [ titleText, setTitleText ] = useState( '' );

		// Get the current abbreviation's title if it exists
		useEffect( () => {
			if ( isActive ) {
				const activeFormat = getActiveFormat( value, 'fw/abbreviation' );
				if ( activeFormat && activeFormat.attributes && activeFormat.attributes.title ) {
					setTitleText( activeFormat.attributes.title );
				}
			}
		}, [ isActive, value ] );

		const onToggle = () => {
			if ( isActive ) {
				// If already active, show popover to edit
				const activeFormat = getActiveFormat( value, 'fw/abbreviation' );
				if ( activeFormat && activeFormat.attributes && activeFormat.attributes.title ) {
					setTitleText( activeFormat.attributes.title );
				}
				setIsPopoverVisible( true );
			} else {
				// If not active, show popover to add
				setTitleText( '' );
				setIsPopoverVisible( true );
			}
		};

		const applyAbbreviation = () => {
			if ( titleText && titleText.trim() ) {
				onChange(
					toggleFormat( value, {
						type: 'fw/abbreviation',
						attributes: {
							title: titleText.trim(),
						},
					} )
				);
			}
			setTitleText( '' );
			setIsPopoverVisible( false );
		};

		const removeAbbreviation = () => {
			onChange(
				toggleFormat( value, {
					type: 'fw/abbreviation',
				} )
			);
			setTitleText( '' );
			setIsPopoverVisible( false );
		};

		return (
			<>
				<RichTextToolbarButton
					icon="info"
					title={ __( 'Abbreviation', 'semantic-text-formats' ) }
					onClick={ onToggle }
					isActive={ isActive }
				/>
				{ isPopoverVisible && (
					<Popover
						anchor={ contentRef?.current }
						placement="bottom"
						onClose={ () => {
							setIsPopoverVisible( false );
							setTitleText( '' );
						} }
						className="abbr-popover"
					>
						<div style={ { padding: '16px', minWidth: '280px' } }>
							<TextControl
								label={ __(
									'Full form of abbreviation:',
									'semantic-text-formats'
								) }
								value={ titleText }
								onChange={ setTitleText }
								placeholder={ __(
									'e.g., HyperText Markup Language',
									'semantic-text-formats'
								) }
								onKeyDown={ ( e ) => {
									if ( e.key === 'Enter' ) {
										e.preventDefault();
										applyAbbreviation();
									}
								} }
							/>
							<div
								style={ {
									display: 'flex',
									gap: '8px',
									marginTop: '12px',
									justifyContent: 'space-between',
								} }
							>
								<div>
									{ isActive && (
										<Button
											variant="tertiary"
											isDestructive
											onClick={ removeAbbreviation }
										>
											{ __( 'Remove', 'semantic-text-formats' ) }
										</Button>
									) }
								</div>
								<div style={ { display: 'flex', gap: '8px' } }>
									<Button
										variant="tertiary"
										onClick={ () => {
											setIsPopoverVisible( false );
											setTitleText( '' );
										} }
									>
										{ __( 'Cancel', 'semantic-text-formats' ) }
									</Button>
									<Button
										variant="primary"
										onClick={ applyAbbreviation }
										disabled={ ! titleText || ! titleText.trim() }
									>
										{ __( 'Apply', 'semantic-text-formats' ) }
									</Button>
								</div>
							</div>
						</div>
					</Popover>
				) }
			</>
		);
	},
} );