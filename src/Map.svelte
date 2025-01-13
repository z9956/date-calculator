<script>
    const maps = [  "奥林匹斯", "世界尽头","电力区",];

    function getMap() {
        const today = new Date();
        const index = today.getDate() % maps.length;
        return { currentMap: maps[index],
            tomorrowMap: maps[(index + 1) % maps.length],
            dayAfterTomorrowMap: maps[(index + 2) % maps.length], };
    }

    const {currentMap, tomorrowMap, dayAfterTomorrowMap} = getMap();
</script>

<main>
    <div class="map-container">
        今天：<span>{currentMap}</span> |
        明天：<span>{tomorrowMap}</span> |
        后天：<span>{dayAfterTomorrowMap}</span>
    </div>
</main>

<style>
    .map-container {
        font-size: 24px;
        font-weight: bold;
        margin: 20px;
        padding: 10px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 8px;
        text-align: center;
    }
</style>
