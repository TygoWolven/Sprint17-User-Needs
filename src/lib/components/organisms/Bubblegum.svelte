
<script>

</script>

<div class="canvas">
    <div class="cartoon">
        <div class="face"></div>
        <div class="neck"></div>
        <div class="nose"></div>
        <div class="hair"></div>
        <div class="hair2"></div>
    </div>
    <div class="bubble">
        <div class="shadow"></div>
        <div class="glimp"></div>
    </div>
</div>


<style>
    :root {
        /* Colors */
        --primary: #FFC2EC;
        --secondary: #F79EDB;
        --tertiary: #C581B0;
    } 
    .canvas {
        position: sticky;
        bottom: 1rem;
        left: 1rem;
        z-index: 100;
    }
    .cartoon {
        width: 20rem;
        aspect-ratio: 1;
        position: absolute;
    }
    .face {
        position: relative;
        width: 36%;
        height: 45%;
        background: pink;
        border-radius: 100% 100% / 70% 70% 120% 120%;
    }
    .neck {
        position: relative;
        width: 15%;
        height: 25%;
        background: pink;
        left: 2rem;
        bottom: 1rem;
        box-shadow: inset 0 3.5vmin 0 -1vmin rgba(60,0,0,0.1);
        z-index: -50;
    }
    .nose {
        position: relative;
        width: 5%;
        height: 15%;
        background: rgba(60,0,0,0.1);
        top: -10.5rem;
        left: 3.2rem;
        clip-path: polygon(50% 0%, 60% 88%, 0% 85%, 55% 100%, 100% 88%);
    }
    .hair {
        position: relative;
        width: 45%;
        height: 55%;
        border-radius: 90% 90% 30% 30% / 100%;
        background: purple;
        top: -18rem;
        right: 1rem;
        z-index: -75;
    }
    .hair2 {
        position: relative;
        width: 45%;
        height: 20%;
        border-radius: 90% 90% 30% 30% / 100%;
        background: purple;
        top: -28.5rem;
        right: 1rem;
        z-index: 75;
    }
    .bubble {
        position: relative;
        top: 1.5rem;
        left: 4rem;
        overflow: hidden;
        width: 10rem;
        aspect-ratio: 1;
        border-radius: 100%;
        background: var(--primary);   
        border: 0.5rem solid var(--tertiary);
        animation: grow-progress linear forwards;
        animation-timeline: scroll(y);
        transform-origin: left;
        z-index: 200;
    }
    .shadow {
        position: absolute;
        top: 0;
        width: 100%;
        aspect-ratio: 1;
        background: radial-gradient(
            at 25% 25%,
            var(--primary) 40%,
            var(--secondary) 60%
        );
    }
    .glimp {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 15%;
        height: 15%;
        background: white;
        border-radius: 75% 40% 75% 40%;
    }
    @keyframes grow-progress {
        0% {
            scale: 0;
        }
        100% {
            scale: 2;
            visibility: hidden;
        }
    }  
</style>