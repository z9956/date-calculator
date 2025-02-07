<script>
    const maps = ["世界尽头", "电力区", "奥林匹斯",];

    function getMap() {
        const today = new Date();
        const index = today.getDate() % maps.length;
        return { currentMap: maps[index],
            tomorrowMap: maps[(index + 1) % maps.length],
            dayAfterTomorrowMap: maps[(index + 2) % maps.length], };
    }

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    function getProgress() {
        // 获取当前日期
        const currentDate = new Date();

        // 获取当前年份和对应的天数
        const year = currentDate.getFullYear();
        const daysInYear = isLeapYear(year) ? 366 : 365;

        // 获取当前日期是今年的第几天
        const startOfYear = new Date(year, 0, 0);
        const diff = currentDate - startOfYear;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        return (dayOfYear / daysInYear) * 100;
    }

    const {currentMap, tomorrowMap, dayAfterTomorrowMap} = getMap();
    const progressPercentage = getProgress()
</script>

<main>
    <div class="map-container">
        <div class="progress-bar">
            <div class="progress" title="{Math.round(progressPercentage)}%" style="width: {progressPercentage}%"></div>
        </div>
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
        position: relative;
        overflow: hidden;
    }

    .progress-bar {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;

    }

    .progress {
        height: 100%;
        background-color: rgba(121, 134, 203, 0.3);
    }
</style>
