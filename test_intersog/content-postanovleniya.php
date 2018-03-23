<?php
/**
 * Template part for displaying page content in page Postanovleniya.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package koh
 */

?>

	<link rel = "stylesheet" href = "css/bootstrap.min.css"><!-- Bootstrap Style -->
	<link rel = "stylesheet" href = "css/font-awesome.min.css"><!-- Custom Style -->
	<link rel = "stylesheet" href = "style_c.css"><!-- Custom Style -->
<!--</head>-->
<!--<body>-->


	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<?php if( !is_front_page()) :?>
			<header class="entry-header">
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
			</header><!-- .entry-header -->
		<?php endif; ?>

		<div class="accordBlock">
			<div class="accordBlock-link">
				<a href = "#">
					<span class="accordBlock-link__arrow"></span>
					Свернуть форму поиска
					<span class="accordBlock-link__arrow"></span>
				</a>
			</div>
			<div class="accordBlock-content">
				<div class="accordBlock-content__num">
					<span>Номер</span>
					<input type = "text" class="accordBlock-content__input">
					<span>Дата от:</span>
					<select class="accordBlock-content__select">
						<option>1</option>
						<option>1</option>
						<option>1</option>
					</select>
					<span>до:</span>
					<select class="accordBlock-content__select">
						<option>1</option>
						<option>1</option>
						<option>1</option>
					</select>
				</div>
				<div class="accordBlock-content__name">
					<span>Название документа</span>
					<input type = "text" class="accordBlock-content__inputName">
				</div>
				<div class="btnSearch">
					<button type="button" class="btnSearch-style">Поиск</button>
				</div>
			</div>
		</div>

		<div class="entry-content">
			<?php
			the_content();




			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'koh' ),
				'after'  => '</div>',
			) );
			?>
			<div class="divCategory">
				<?php if ( is_single() ) : ?>
					<?php koh_entry_footer(); ?>
					Категории: <span class="divCategory__name"><?php the_category(', '); ?></span>
				<?php endif; ?>
			</div>



		</div><!-- .entry-content -->

		<?php if ( get_edit_post_link() ) : ?>
			<footer class="entry-footer">
				<?php
				edit_post_link(
					sprintf(
					/* translators: %s: Name of current post */
						esc_html__( 'Редактировать %s', 'koh' ),
						the_title( '<span class="screen-reader-text">"', '"</span>', false )
					),
					'<span class="edit-link">',
					'</span>'
				);
				?>
			</footer><!-- .entry-footer -->
		<?php endif; ?>
	</article><!-- #post-## -->



	<script src = "js/jquery.min.js"></script><!-- Jquery Library -->
	<script src = "js/bootstrap.min.js"></script><!-- Bootstrap Library -->
<script type="text/javascript">
	jQuery(document).ready(function(){
		jQuery('.accordBlock-link').click(function (  ) {
			jQuery(this).toggleClass('accordBlock-link__js');
			jQuery('.accordBlock-content').slideToggle('slow');
		});
	});
</script>
	<script src = "js/app.js"></script><!-- Custom Library -->

<?php
get_footer();
