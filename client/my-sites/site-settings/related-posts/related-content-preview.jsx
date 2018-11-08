/** @format */

/**
 * External dependencies
 */

import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import FormLabel from 'components/forms/form-label';
import imgCatBlog from 'gutenberg/extensions/related-posts/cat-blog.png';
import imgDevices from 'gutenberg/extensions/related-posts/devices.jpg';
import imgWedding from 'gutenberg/extensions/related-posts/mobile-wedding.jpg';

const RelatedContentPreview = ( { showHeadline, showThumbnails, translate } ) => {
	const posts = [
		{
			image: imgCatBlog,
			title: translate( 'Big iPhone/iPad Update Now Available', {
				textOnly: true,
				context: 'Demo content for related posts',
			} ),
			topic: translate( 'In "Mobile"', {
				context: 'topic post is located in',
			} ),
		},
		{
			image: imgDevices,
			title: translate( 'The WordPress for Android App Gets a Big Facelift', {
				textOnly: true,
				context: 'Demo content for related posts',
			} ),
			topic: translate( 'In "Mobile"', {
				context: 'topic post is located in',
			} ),
		},
		{
			image: imgWedding,
			title: translate( 'Upgrade Focus: VideoPress For Weddings', {
				textOnly: true,
				context: 'Demo content for related posts',
			} ),
			topic: translate( 'In "Upgrade"', {
				context: 'topic post is located in',
			} ),
		},
	];

	return (
		<div className="related-posts__preview">
			<FormLabel className="related-posts__preview-title">{ translate( 'Example' ) }</FormLabel>

			<div className="related-posts__preview-box">
				{ showHeadline && (
					<h3 className="related-posts__preview-headline">{ translate( 'Related' ) }</h3>
				) }

				<div className="related-posts__preview-items">
					{ /* eslint-disable jsx-a11y/anchor-is-valid */ }
					{ posts.map( ( post, index ) => {
						return (
							<div className="related-posts__preview-post" key={ index }>
								{ showThumbnails && (
									<a className="related-posts__preview-post-a">
										<img src={ post.image } alt={ post.title } />
									</a>
								) }
								<h4 className="related-posts__preview-post-title">
									<a className="related-posts__preview-post-a">{ post.title }</a>
								</h4>
								<p className="related-posts__preview-post-context">{ post.topic }</p>
							</div>
						);
					} ) }
					{ /* eslint-enable jsx-a11y/anchor-is-valid */ }
				</div>
			</div>
		</div>
	);
};

export default localize( RelatedContentPreview );
