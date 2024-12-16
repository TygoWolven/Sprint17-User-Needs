<div class="canvas">
    <div class="road"></div>
    <div class="house">
        <div class="door"></div>
    </div>
    <div class="roof-trim"></div>
    <div class="bridge">
        <div class="outer-road"></div>
        <div class="lever">
            <div class="rope"></div>
        </div>
        <div class="road">
            <div class="fence"></div>
        </div>
    </div>
    <div class="bridge">
        <div class="outer-road"></div>
        <div class="lever">
            <div class="rope"></div>
        </div>
        <div class="road">
            <div class="fence"></div>
        </div>
    </div>
</div>

<style>
    .canvas {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 15rem;
    }

    .canvas div {
        position: absolute;
    }

    .road {
        width: 100%;
        height: 1rem;
        background: var(--accent2-primary);
        bottom: 0;
    }

    .house {
        width: 12rem;
        aspect-ratio: 1;
        bottom: 1rem;
        clip-path: polygon(0 100%, 0 50%, 33% 15%, 66% 50%, 100% 66%, 100% 100%);        
        background: var(--accent2-primary);
    }

    .roof-trim {
        width: 12.5rem;
        aspect-ratio: 1;
        bottom: 1rem;
        clip-path: polygon(0 57%, 0 50%, 33% 15%, 70% 55%, 100% 66%, 100% 71%, 66% 60%, 33% 23%);
        background: var(--accent2-primary);
        background: red;
    }

    .door {
        width: 2rem;
        height: 3rem;
        bottom: 0;
        right: 1rem;
        background: var(--page-bg-color);
        border-radius: 50px 50px 0 0;
    }

    .bridge {
        width: 1rem;
        height: 8rem;
        background: var(--accent2-primary);
        left: 50%;
        bottom: 0;
    }

    .lever {
        width: 8rem;
        height: 1rem;
        background: var(--accent2-primary);
        left: 50%;
        top: 0;
        left: -1rem;
        transform-origin: left;
        animation: open-bridge 10s infinite;
    }

    .rope {
        width: 0.25rem;
        height: 8rem;
        background: var(--accent2-primary);
        right: 1.5rem;
        animation: none;
        animation: rope-straight 10s infinite;
    }

    .bridge > .road {
        width: 8rem;
        height: 1rem;
        background: var(--accent2-primary);
        bottom: 0;
        transform-origin: left;
        animation: open-bridge 10s infinite;
    }

    .outer-road {
        width: 7rem;
        height: 1rem;
        background: var(--page-bg-color);
        bottom: 0;
        left: 1rem;
    }

    .fence {
        width: 8rem;
        height: 2.5rem;
        background: linear-gradient(
            var(--accent2-primary) 50%,
            transparent 50%
        );
        background-size: 5px 5px;
        background-repeat: repeat;
        bottom: 0;
    }

    .bridge:last-of-type {
        transform: translateX(15rem) rotateY(180deg);
    }

    @keyframes open-bridge {
        0%, 75% {
            transform: rotateZ(0deg);
        }
        25%, 50% {
            transform: rotateZ(-20deg);
        }
    }

    @keyframes rope-straight {
        0%, 75% {
            transform: rotateZ(0deg);
        }
        25%, 50% {
            transform: rotateZ(20deg);
        }
    }
</style>