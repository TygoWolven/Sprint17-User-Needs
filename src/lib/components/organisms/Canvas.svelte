<div class="canvas">
    <!-- Main road -->
    <div class="road"></div>

    <!-- Arrow -->
    <div class="arrow">
        <div class="point"></div>
    </div>

    <!-- Appartment buildings -->
    <div class="building">
        <div class="windows"></div>
        <div class="windows"></div>
    </div>

    <div class="building">
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="windows"></div>
    </div>

    <!-- House -->
    <div class="house">
        <button id="btn-toggle" class="doorway">Toggle christmas-mode</button>
        <div class="door">
            <div class="doorknob"></div>
        </div>
        <div class="crossed-window"></div>
        <div class="crossed-window"></div>
    </div>
    <div class="chimney"></div>
    <div class="roof-trim"></div>

    <!-- Bridge elements -->
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

    /* House elements */
    .house {
        width: 12rem;
        aspect-ratio: 1;
        bottom: 1rem;
        clip-path: polygon(0 100%, 0 50%, 33% 15%, 66% 50%, 100% 66%, 100% 100%);        
        background: var(--accent2-primary);
    }

    .door {
        width: 2rem;
        height: 3rem;
        bottom: 0;
        right: 1rem;
        background: var(--accent1-primary);
        transform-origin: right;
        transition: 1s ease;
    }

    .door::before {
        content: "";
        position: absolute;
        width: 0.4rem;
        aspect-ratio: 1;
        border-radius: 50px;
        background: var(--page-bg-color);
        bottom: 1rem;
        left: 0.25rem;
    }

    .door:hover,
    .doorway:hover ~ .door {
        transform: rotateY(80deg);
    }

    .doorway {
        position: absolute;
        width: 2rem;
        height: 3rem;
        bottom: 0;
        right: 1rem;
        background: var(--page-bg-color);
        border: none;
        color: transparent;
    }

    .doorway:hover {
        cursor: pointer;
    }

    .crossed-window {
        width: 2rem;
        aspect-ratio: 1;
        bottom: 1rem;
        left: 1.4rem;
        background: linear-gradient(
            to right,
            transparent 48%,
            var(--accent2-primary) 48% 52%,
            transparent 52%
        ), linear-gradient(
            var(--page-bg-color) 48%,
            var(--accent2-primary) 48% 52%,
            var(--page-bg-color) 52%
        );
    }

    .crossed-window:last-of-type {
        left: 4.8rem;
    }

    .roof-trim {
        width: 12.5rem;
        aspect-ratio: 1;
        bottom: 1rem;
        clip-path: polygon(0 57%, 0 50%, 33% 15%, 70% 55%, 100% 66%, 100% 71%, 66% 60%, 33% 23%);
        background: var(--accent2-primary);
    }

    .chimney {
        height: 3rem;
        width: 1.5rem;
        background: var(--accent2-primary);
        left: 6.5rem;
        top: 5rem;
    }

    .chimney::before {
        content: "";
        position: absolute;
        width: 130%;
        height: 0.5rem;
        left: -15%;
        background: var(--accent2-primary);
    }

    /* Building elements */
    .building {
        width: 30rem;
        height: 15rem;
        left: 10rem;
        bottom: 0;
        opacity: 50%;
        background: var(--accent2-primary);
    }

    .building::before {
        content: "";
        position: absolute;
        width: 104%;
        height: 2rem;
        top: -1rem;
        left: -2%;
        aspect-ratio: 1;
        background: var(--accent2-primary);
    }

    .building ~ .building {
        width: 30rem;
        height: 20rem;
        bottom: 0;
        left: 100rem;
        opacity: 100%;
        background: var(--accent2-primary);
    }

    .windows {
        width: 90%;
        height: 3rem;
        top: 1rem;
        left: 5%;
        background: linear-gradient(
            to right,
            var(--page-bg-color) 50%,
            var(--accent2-primary) 50%
        );
        background-size: 13.3%;
    }

    .windows:nth-of-type(2) {
        top: 5rem;
    }

    .windows:nth-of-type(3) {
        top: 9rem;
    }

    .windows:nth-of-type(4) {
        top: 13rem;
    }

    /* .arrow {
        width: 3rem;
        height: 1rem;
        background: var(--accent2-primary);
        left: 16.7rem;
        bottom: 8.7rem;
        transform: rotateZ(-20deg);
        animation: wiggle-arrow 3s infinite;
    }

    .point {
        width: 2rem;
        aspect-ratio: 1;
        clip-path: polygon(50% 40%, 0% 100%, 100% 100%);
        background: var(--accent2-primary);
        transform: rotateZ(-90deg);
        right: 2.5rem;
        bottom: -0.5rem;
    } */

    @keyframes wiggle-arrow {
        0%, 100% {
            transform: rotateZ(-20deg);
        }
        50% {
            transform: rotateZ(-30deg);
        }
    }

    /* Bridge elements */
    .bridge {
        width: 1rem;
        height: 8rem;
        background: var(--accent2-primary);
        left: 50rem;
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
        animation: straighten-rope 10s infinite;
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

    @keyframes straighten-rope {
        0%, 75% {
            transform: rotateZ(0deg);
        }
        25%, 50% {
            transform: rotateZ(20deg);
        }
    }
</style>