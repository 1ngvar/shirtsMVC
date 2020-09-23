<?php
	require_once("../inc/config.php");
	require_once(ROOT_PATH . "inc/products.php");

$total_products = get_products_count();
$products_per_page = 8;
$total_pages = ceil( $total_products / $products_per_page );


$current_page = $_GET["pg"] ?? 1;

if ($current_page > $total_pages) {
    header("Location: ./?pg=" . $total_pages);
} elseif ( $current_page < 1 ) {
	header("Location: ./");
}

/*
 	Getting products for current page
*/
if ($current_page === 1) {
    $start = 1;
} else {
    $start = ($current_page - 1) * $products_per_page + 1;
}

if ($total_products - $start >= 7) {
    $end = ($start - 1) + $products_per_page;
} else {
	$end = ($start - 1) + ( $total_products - $start );
}
$products = get_products_all($start, $end);

/*
 	End Getting products for current page
*/


$pageTitle = "Mike's Full Catalog of Shirts";
$section = "shirts";
include(ROOT_PATH . 'inc/header.php'); ?>

		<div class="section shirts page">

			<div class="wrapper">

				<h1>Mike&rsquo;s Full Catalog of Shirts</h1>

                <h2>
	                <?php get_products_subset( $start, $end ) ?>
                </h2>

				<ul class="products">
					<?php foreach($products as $product) { 
							echo get_list_view_html($product);
						}
					?>
				</ul>

			</div>

		</div>

<?php include(ROOT_PATH . 'inc/footer.php') ?>