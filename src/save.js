/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';

function DefinitionDescriptionSave() {
	const innerBlocksProps = useInnerBlocksProps.save({
		className: 'definition-description-content',
	});

	return <dd { ...innerBlocksProps } />;
}

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const { terms } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<dl { ...blockProps }>
			{ terms.map( ( termData, termIndex ) => (
				<>
					<RichText.Content 
						key={ `term-${ termIndex }` }
						tagName="dt" 
						value={ termData.term } 
					/>
					{ termData.descriptions.map( ( _, descIndex ) => (
						<DefinitionDescriptionSave
							key={ `desc-${ termIndex }-${ descIndex }` }
						/>
					) ) }
				</>
			) ) }
		</dl>
	);
}