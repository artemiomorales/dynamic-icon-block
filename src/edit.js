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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RadioControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const CircleIcon = () => (
	<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
		<circle cx="25" cy="25" r="20" fill="blue" />
	</svg>
);

const SquareIcon = () => (
	<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
		<rect x="5" y="5" width="40" height="40" fill="green" />
	</svg>
);

const TriangleIcon = () => (
	<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
		<polygon points="25,5 5,45 45,45" fill="red" />
	</svg>
);

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	return (
		<>
			<div { ...useBlockProps() }>
				{(() => {
					switch (attributes.icon) {
						case 'circle':
							return <CircleIcon />;
						case 'square':
							return <SquareIcon />;
						case 'triangle':
							return <TriangleIcon />;
						default:
							return <CircleIcon />;
					}
				})()}
			</div>
			{/* Create inspector controls to select between circle, square, and triangle icons */}
			<InspectorControls>
				<PanelBody title="Icon">
					<RadioControl
						label="Icon"
						selected={attributes.icon}
						onChange={(value) => {
							console.log( value );
							setAttributes({ icon: value });
						}}
						options={[
							{ label: 'Circle', value: 'circle' },
							{ label: 'Square', value: 'square' },
							{ label: 'Triangle', value: 'triangle' },
						]}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
