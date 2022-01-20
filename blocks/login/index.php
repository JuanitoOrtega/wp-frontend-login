<?php

function plz_login_blocks() {
    $assets_file = include_once PLZ_PATH . '/blocks/login/build/index.asset.php';

    wp_register_script(
        'plz-login-block',
        plugins_url( './build/index.js', __FILE__ ),
        $assets_file['dependencies'],
        $assets_file['version']
    );

    wp_register_style(
        'plz-login-block',
        plugins_url( './build/index.css', __FILE__ ),
        array(),
        $assets_file['version']
    );

    register_block_type(
        'plz/login',
        array(
            'editor_script' => 'plz-login-block',
            'script' => 'plz-login',
            'style' => 'plz-login-block'
        )
    );
}

add_action( 'init', 'plz_login_blocks' );