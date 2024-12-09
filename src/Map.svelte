<script>
    const maps = ["残月", "风暴点", "世界尽头"];

    function getCurrentMap() {
        const today = new Date();
        const index = today.getDate() % maps.length;
        return maps[index];
    }

    const currentMap = getCurrentMap();
</script>

<main>
    <div class="map-container">
        今天的地图是：<span>{currentMap}</span>
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
