<?php
include 'Core/TemplateEngine.php';
include('Ressources/snippet/page/legal/data.php');

Template::view('Ressources/views/page/legal/index.html', $data);
?>
