<?php

/* sets predefined Post Thumbnail dimensions */
if ( function_exists( 'add_theme_support' ) ) {
   add_theme_support( 'post-thumbnails' );
   
   //blog page template
   add_image_size( 'ptentry-thumb', 184, 184, true );
   //gallery page template
   add_image_size( 'ptgallery-thumb', 207, 136, true );
   
   add_image_size( 'usual-thumb', 160, 160, true );
   add_image_size( 'featured-thumb1', 441, 269, true );
   add_image_size( 'featured-thumb2', 439, 324, true );
};
/* --------------------------------------------- */

?>