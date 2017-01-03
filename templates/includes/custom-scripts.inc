</div>
<script src="/site/templates/js/libs/jquery-2.1.1.min.js"></script>

<? if($page->scripts_list != NULL) : ?>
    <? foreach ($page->scripts_list as $script) : ?>         
        <script src="<? echo $config->urls->root . $script->URL ?>"></script>
    <? endforeach; ?>
<? endif; ?>