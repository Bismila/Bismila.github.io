
<?php
/**
 * The template for displaying page postanovleniya
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package koh
 */

get_header();

 ?>

	<div id="primary" class="content-area">
		<div class="container">
			<?php get_sidebar(); ?>
			<?php if( is_active_sidebar( 'sidebar-1' ) and  is_active_sidebar( 'sidebar-2' )): ?>
				<div class="col-lg-6 col-md-6">
					<div class="row">
			<?php else : ?>
			
				<?php if( is_active_sidebar( 'sidebar-1' ) or  is_active_sidebar( 'sidebar-2' )): ?>
					<div class="col-lg-9 col-md-9">
						<div class="row">
				<?php endif; ?>
			<?php endif; ?>
			
			<?php if( ! is_active_sidebar( 'sidebar-1' ) and  ! is_active_sidebar( 'sidebar-2' )): ?>
				<div class="col-lg-12 col-md-12">
					<div class="row">
			<?php endif; ?>
					
					<div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
						<?php if(function_exists('bcn_display')  && !is_front_page())
						{
							bcn_display();
						}?>
					</div>
					<main id="main" class="site-main" role="main">

						<?php
						while ( have_posts() ) : the_post();

							get_template_part( 'template-parts/content', 'postanovleniya' );

							// If comments are open or we have at least one comment, load up the comment template.
							if ( comments_open() || get_comments_number() ) :
								comments_template();
							endif;

						endwhile; // End of the loop.
						?>

					</main><!-- #main -->
					<div class="ul-border">
						<?php
							wp_nav_menu( array(
							'childs_only' => 5, 
							) );
						?>
					</div>
				</div> <!-- row -->
			</div> <!-- col-lg-9 -->
			<?php get_sidebar('right'); ?>
		</div> <!-- container -->
	</div><!-- #primary -->
<?php

get_footer();
