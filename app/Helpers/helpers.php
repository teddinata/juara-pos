<?php

if(! function_exists('formatPrice')) {
    // format price
    function formatPrice($str) {
        return number_format($str, 0, '', '.');
    }
}
