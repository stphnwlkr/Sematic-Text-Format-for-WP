/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/list',
	'core/image',
	'core/heading',
];

function DefinitionDescription({ termIndex, descIndex, onRemove, canRemove }) {
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'definition-description',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: [
				[
					'core/paragraph',
					{
						placeholder: __(
							'Enter definition…',
							'semantic-text-formats'
						),
					},
				],
			],
			templateLock: false,
			renderAppender: false,
		}
	);

	return (
		<div className="definition-description-wrapper">
			<dd { ...innerBlocksProps } />
			{ canRemove && (
				<Button
					icon={ trash }
					label={ __(
						'Remove definition',
						'semantic-text-formats'
					) }
					onClick={ onRemove }
					className="remove-description"
					isSmall
				/>
			) }
		</div>
	);
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { terms } = attributes;
	const blockProps = useBlockProps();

	const addTerm = () => {
		const newTerms = [ ...terms, { term: '', descriptions: [ '' ] } ];
		setAttributes( { terms: newTerms } );
	};

	const removeTerm = ( termIndex ) => {
		if ( terms.length === 1 ) return;
		const newTerms = terms.filter( ( _, i ) => i !== termIndex );
		setAttributes( { terms: newTerms } );
	};

	const updateTerm = ( termIndex, term ) => {
		const newTerms = [ ...terms ];
		newTerms[ termIndex ].term = term;
		setAttributes( { terms: newTerms } );
	};

	const addDescription = ( termIndex ) => {
		const newTerms = [ ...terms ];
		newTerms[ termIndex ].descriptions.push( '' );
		setAttributes( { terms: newTerms } );
	};

	const removeDescription = ( termIndex, descIndex ) => {
		if ( terms[ termIndex ].descriptions.length === 1 ) return;
		const newTerms = [ ...terms ];
		newTerms[ termIndex ].descriptions = newTerms[
			termIndex
		].descriptions.filter( ( _, i ) => i !== descIndex );
		setAttributes( { terms: newTerms } );
	};

	const handleTermKeyDown = ( event, termIndex ) => {
		if ( event.key === 'Enter' ) {
			event.preventDefault();
			// Create a new term when Enter is pressed
			const newTerms = [ ...terms ];
			newTerms.splice( termIndex + 1, 0, {
				term: '',
				descriptions: [ '' ],
			} );
			setAttributes( { terms: newTerms } );
		}
	};

	return (
		<div { ...blockProps }>
			<dl className="wp-block-fw-definition-list">
				{ terms.map( ( termData, termIndex ) => (
					<div key={ `term-group-${ termIndex }` } className="definition-term-group">
						<div className="definition-term-wrapper">
							<RichText
								tagName="dt"
								value={ termData.term }
								onChange={ ( term ) =>
									updateTerm( termIndex, term )
								}
								placeholder={ __(
									'Enter term (press Enter to add new term)…',
									'semantic-text-formats'
								) }
								className="definition-term"
								onKeyDown={ ( e ) =>
									handleTermKeyDown( e, termIndex )
								}
								multiline={ false }
							/>
							{ terms.length > 1 && (
								<Button
									icon={ trash }
									label={ __(
										'Remove term',
										'semantic-text-formats'
									) }
									onClick={ () => removeTerm( termIndex ) }
									className="remove-term"
									isSmall
								/>
							) }
						</div>
						{ termData.descriptions.map( ( _, descIndex ) => (
							<DefinitionDescription
								key={ `desc-${ termIndex }-${ descIndex }` }
								termIndex={ termIndex }
								descIndex={ descIndex }
								onRemove={ () =>
									removeDescription(
										termIndex,
										descIndex
									)
								}
								canRemove={ termData.descriptions.length > 1 }
							/>
						) ) }
						<Button
							icon={ plus }
							onClick={ () => addDescription( termIndex ) }
							className="add-description"
							isSmall
							variant="secondary"
						>
							{ __(
								'Add definition',
								'semantic-text-formats'
							) }
						</Button>
					</div>
				) ) }
			</dl>
			<Button
				icon={ plus }
				onClick={ addTerm }
				className="add-term"
				variant="primary"
			>
				{ __( 'Add term', 'semantic-text-formats' ) }
			</Button>
		</div>
	);
}