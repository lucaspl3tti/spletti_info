<?php
include 'Core/TemplateEngine.php';
include('Ressources/snippet/page/home/data.php');

Template::view('Ressources/views/page/home/index.html', $data);
?>
