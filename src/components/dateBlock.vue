<script setup>

    let date = new Date();

    function getDate() {
        let day = ''
        let dayOfMonth = date.getDate()
        let month = ''
        switch (date.getDay()) {
            case 0:
                day = 'SUN'
                break
            case 1:
                day = 'MON'
                break
            case 2:
                day = 'TUES'
                break
            case 3:
                day = 'WED'
                break
            case 4:
                day = 'THURS'
                break
            case 5:
                day = 'FRI'
                break
            case 6:
                day = 'SAT'
                break
        }
        
        switch (date.getMonth()) {
            case 0:
                month = 'JAN'
                break
            case 1:
                month = 'FEB'
                break
            case 2:
                month = 'MAR'
                break
            case 3:
                month = 'APR'
                break
            case 4:
                month = 'MAY'
                break
            case 5:
                month = 'JUNE'
                break
            case 6:
                month = 'JULY'
                break
            case 7:
                month = 'AUG'
                break
            case 8:
                month = 'SEPT'
                break
            case 9:
                month = 'OCT'
                break
            case 10:
                month = 'NOV'
                break
            case 11:
                month = 'DEC'
                break
        }
        return {
            day,
            month,
            dayOfMonth
        }
    }
</script>

<template>
    <div class="date-block">
        <div class="date-block-day-of-week">{{getDate().day}}</div>
        <div class="date-block-day-of-month">{{getDate().dayOfMonth}}</div>
        <div class="date-block-month">{{getDate().month}}</div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/variables.scss";
    .date-block {
        font-family: $main-font;
        color: $default-color;
        height: fit-content;
        margin: auto 0;
        
        .date-block-day-of-week, .date-block-month {
            text-align: center;
            font-size: .7rem;
        }
        .date-block-day-of-month {
            text-align: center;
            font-size: 2rem;
        }
    }
</style>