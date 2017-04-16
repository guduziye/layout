/**
 * 设置容器最小高度
 * @param $container 要设置的容器
 * @param $excludeContainers 需要排除的容器列表
 */
function setContainerMinHeight($container, $excludeContainers) {
    if ($container && $container.length > 0) {
        var minHeight = 0;
        var allExcludeHeight = 0;
        var windowHeight = window.innerHeight;
        if($excludeContainers){
            var excludeLength = $excludeContainers.length;
            for(var i=0; i<excludeLength; i++){
                var excludeHeight = $excludeContainers[i].outerHeight(true);
                allExcludeHeight += excludeHeight;
            }
            minHeight = windowHeight - allExcludeHeight;
        }

        $container.css("min-height", minHeight + "px");
    }
}