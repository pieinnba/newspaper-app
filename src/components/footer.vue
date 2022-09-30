<template>
    <div class="footer">
        <div class="footer-string">created by <a target="_blank" href="https://github.com/pieinnba">Serhii Polishchuk</a></div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/variables.scss";
    
    .footer {
        flex: 0 0 auto;
        height: 4rem;
        background-color: $signature-color;
        padding: 0 1rem;
        margin-top: 1rem;
        border-top: .1rem $default-color solid;
        display: flex;
        align-items: center;
        justify-content: end;

        .footer-string {
            font-family: $main-font;
            text-align: end;
            color: $default-color;
            a:active, a:hover, a {
                text-decoration: none;  
            }
        }
    }
</style>