<div class="canvas">
    <!-- Main road -->
    <div class="road"></div>

    <!-- Appartment building -->
    <div class="building">
        <div class="windows"></div>
        <div class="windows"></div>
    </div>

    <!-- Santa's sleigh -->
    <div class="sleigh-santa">
        <div class="santa santa--sleigh">
          <div class="santa__hat">
            <div class="santa__hat-part"></div>
            <div class="santa__hat-part"></div>
          </div>
          <div class="santa__face">
            <div class="santa__eyebrows santa__eyebrows--right"></div>
            <div class="santa__eyebrows santa__eyebrows--left"></div>
            <div class="santa__eye santa__eye--right"></div>
            <div class="santa__eye santa__eye--left"></div>
            <div class="santa__nose"></div>
            <div class="santa__beard">
              <div class="santa__beard-part"></div>
              <div class="santa__beard-part"></div>
              <div class="santa__beard-part"></div>
            </div>
            <div class="santa__mouth"></div>
          </div>
          <div class="santa__body">
            <div class="santa__body-top"></div>
            <div class="santa__hand santa__hand--left">
              <div class="santa__hand-inner"></div>
            </div>
            <div class="santa__hand santa__hand--right"></div>
          </div>
        </div>
        <div class="sleigh-feet"></div>
        <div class="lead">
          <div class="lead-inner"></div>
        </div>
        <div class="lead lead--back">
          <div class="lead-inner"></div>
        </div>  
        <div class="reindeer">
          <div class="reindeer__face">
            <div class="reindeer__ear"></div>
            <div class="reindeer__horn reindeer__horn--right"></div>
            <div class="reindeer__horn reindeer__horn--left"></div>
          </div>
          <div class="reindeer__body">
            <div class="reindeer__foot reindeer__foot--front">
              <div class="reindeer__foot-inner"></div>
            </div>
            <div class="reindeer__foot reindeer__foot--front reindeer__foot--inside">
              <div class="reindeer__foot-inner"></div>
            </div>
            <div class="reindeer__foot reindeer__foot--back">
              <div class="reindeer__foot-inner"></div>
            </div>
            <div class="reindeer__foot reindeer__foot--back reindeer__foot--inside">
              <div class="reindeer__foot-inner"></div>
            </div>
            <div class="reindeer__tail"></div>
          </div>
        </div>
      </div>

    <!-- Car -->
    <div class="car">
        <div class="roof"></div>
        <div class="wheel"></div>
        <div class="wheel"></div>
        <div class="headlight"></div>
        <div class="windshield"></div>
    </div>

    <!-- Appartment building with porch -->
    <div class="building">
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="porch">
            <div class="support"></div>
            <div class="stairs"></div>
            <div class="floor"></div>
            <div class="rail"></div>
        </div>
    </div>

    <!-- House -->
    <div class="house">
        <button class="doorway" id="christmas-toggle">Toggle christmas-mode</button>
        <div class="door">
            <div class="doorknob"></div>
        </div>
        <div class="sign" id="sign">Enter</div>
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
.sleigh-santa {
  position: absolute;
  top: -8rem;
  left: -20rem;
  width: 295px;
  height: 155px;
  transform: rotate(-1deg);
  animation: flying-santa 10s infinite linear;
  display: none;
}

@keyframes flying-santa {
    0% {
        transform: translateX(0);
    } 
    100% {
        transform: translateX(150rem);
    }
}

.santa {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 125px;
  height: 107px;
  z-index: 10;
}
.santa--sleigh {
  bottom: 0;
  left: 0;
  transform: rotateY(180deg);
}
.santa--sleigh:before, .santa--sleigh:after {
  content: "";
  position: absolute;
  bottom: 0;
  background-color: #8B0000;
}
.santa--sleigh:before {
  left: -10px;
  width: 129px;
  height: 30px;
  border-radius: 5px 5% 10px 65%;
  transform: rotate(0);
  z-index: 10;
}
.santa--sleigh:after {
  left: 70px;
  bottom: 0px;
  width: 50px;
  height: 57px;
  border-radius: 50% 10px 16px 10px;
  transform: rotate(1deg);
  box-shadow: -98px -2px 0px -18px #8B0000;
}
.santa--sleigh .santa__hand--left .santa__hand-inner {
  animation: sleigh-santa-hand-left 1s linear alternate infinite;
}
.santa--sleigh .santa__hand--right {
  transform: rotate(25deg);
  border-radius: 10px;
  height: 7px;
  animation: sleigh-santa-hand-right 1s linear alternate infinite;
}
.santa--sleigh .santa__hand--right:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 7px;
  top: -2px;
  left: -6px;
  background-color: #000;
  border-radius: 50%;
  transform: rotate(10deg);
}
.santa__hat-part {
  position: absolute;
  top: 7px;
  left: 31px;
  width: 43px;
  height: 58px;
  border-radius: 50%;
  transform: rotate(28deg);
  background-color: var(--accent2-primary);
}
.santa__hat-part:before, .santa__hat-part:after {
  content: "";
  position: absolute;
}
.santa__hat-part:nth-of-type(1):before {
  top: 9px;
  left: 45px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #fff;
  animation: santa-hat-bobble 1s linear alternate infinite;
}
.santa__hat-part:nth-of-type(1):after {
  top: 3px;
  left: 19px;
  width: 30px;
  height: 7px;
  border-radius: 50%;
  transform: rotate(22deg);
  background-color: var(--accent2-primary);
  animation: santa-hat-main 1s linear alternate infinite;
}
.santa__hat-part:nth-of-type(2) {
  position: absolute;
  top: 18px;
  left: 31px;
  width: 44px;
  height: 34px;
  border-radius: 50%;
  transform: rotate(12deg);
  background-color: #fff;
}
.santa__face {
  position: absolute;
  top: 25px;
  left: 37px;
  width: 31px;
  height: 17px;
  border-radius: 20px 20px 50% 50%;
  transform: rotate(10deg);
  background-color: var(--accent2-primary);
  z-index: 10;
}
.santa__beard-part {
  position: absolute;
  top: 8px;
  left: -14px;
  width: 15px;
  height: 17px;
  border-radius: 50%;
  background-color: #fff;
}
.santa__beard-part:before, .santa__beard-part:after {
  content: "";
  position: absolute;
  background-color: #fff;
}
.santa__beard-part:before {
  top: 12px;
  left: 1px;
  width: 15px;
  height: 17px;
  border-radius: 50%;
}
.santa__beard-part:nth-of-type(2) {
  top: 16px;
  left: -8px;
  width: 26px;
  height: 30px;
}
.santa__beard-part:nth-of-type(2):before {
  top: 16px;
  left: 13px;
  width: 19px;
  height: 17px;
}
.santa__beard-part:nth-of-type(2):after {
  top: 1px;
  left: 13px;
  width: 19px;
  height: 17px;
}
.santa__beard-part:nth-of-type(3) {
  top: 16px;
  left: 14px;
  width: 27px;
  height: 28px;
}
.santa__beard-part:nth-of-type(3):before {
  top: -4px;
  left: 13px;
  width: 17px;
  height: 17px;
}
.santa__eyebrows {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 7px;
  border-radius: 50%;
  background-color: #fff;
}
.santa__eyebrows--left {
  top: 1px;
  left: 4px;
  transform: rotate(65deg);
}
.santa__eyebrows--right {
  top: 2px;
  left: 22px;
  transform: rotate(-65deg);
}
.santa__eye {
  position: absolute;
  top: 8px;
  left: 2px;
  width: 3px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--page-bg-color);
}
.santa__eye--left {
  top: 8px;
  left: 2px;
}
.santa__eye--right {
  top: 8px;
  left: 20px;
}
.santa__nose {
  position: absolute;
  top: 10px;
  left: 6px;
  width: 12px;
  height: 9px;
  border-radius: 50%;
  z-index: 10;
  background-color: var(--accent2-primary);
}
.santa__body {
  position: absolute;
  top: 54px;
  left: 16px;
  width: 88px;
  height: 53px;
}
.santa__body-top {
  top: -3px;
  left: 10px;
  position: absolute;
  width: 45px;
  height: 39px;
  border-radius: 50% 50% 10% 10%;
  background-color: var(--accent2-primary);
  z-index: 5;
}
.santa__body-top:before {
  content: "";
  top: 28px;
  left: 0px;
  position: absolute;
  width: 45px;
  height: 5px;
  background-color: #000;
  transform: rotate(1deg);
}
.santa__body-top:after {
  content: "";
  top: 27px;
  left: 10px;
  position: absolute;
  width: 7px;
  height: 5px;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 3px;
  transform: rotate(1deg);
}
.santa__hand {
  position: absolute;
}
.santa__hand--left {
  top: 5px;
  left: 19px;
  width: 33px;
  height: 30px;
  overflow: hidden;
}
.santa__hand--left .santa__hand-inner {
  position: absolute;
  top: 10px;
  left: 8px;
  width: 49px;
  z-index: 100;
  height: 7px;
  border-radius: 10px;
  transform: rotate(12deg);
  background-color: var(--accent2-primary);
  animation: santa-hand-left 1s linear alternate infinite;
}
.santa__hand--left .santa__hand-inner:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 7px;
  top: -2px;
  left: -6px;
  background-color: #000;
  border-radius: 50%;
  transform: rotate(25deg);
}
.santa__hand--right {
  top: 4px;
  left: 3px;
  width: 11px;
  height: 8px;
  transform: rotate(-60deg);
  border-radius: 50%;
  background-color: var(--accent2-primary);
}

.lead {
  position: absolute;
  top: 92px;
  left: 84px;
  width: 182px;
  height: 33px;
  overflow: hidden;
  z-index: 10;
  transform: rotate(0deg);
  animation: sleigh-santa-lead-right 1s linear alternate infinite;
}
.lead--back {
  top: 85px;
  left: 105px;
  width: 149px;
  transform: rotate(4deg);
  z-index: 0;
  animation: sleigh-santa-lead-left 1s linear alternate infinite;
}
.lead-inner {
  position: absolute;
  bottom: 0;
  left: -12px;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #fff;
  border-radius: 50%;
}

.sleigh-feet {
  position: absolute;
  bottom: -5px;
  left: 0px;
  width: 145px;
  height: 11px;
  transform: rotate(-5deg);
  border-bottom: 5px solid var(--accent2-primary);
  border-right: 5px solid var(--accent2-primary);
  border-radius: 10px;
  z-index: 2;
}

.reindeer {
  position: absolute;
  width: 115px;
  height: 155px;
  right: 5px;
  top: 17px;
  transform: rotate(25deg);
  z-index: 0;
}
.reindeer:before {
  content: "";
  position: absolute;
  top: 65px;
  left: 76px;
  width: 8px;
  height: 31px;
  background-color: #8B0000;
  z-index: 10;
  transform: rotate(-55deg);
}
.reindeer:after {
  content: "";
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: white;
  z-index: 11;
  left: 64px;
  top: 68px;
  box-shadow: 8px 6px 0 0 white, 18px 13px 0 0 white, 26px 18px 0 0 white;
}
.reindeer__face {
  position: absolute;
  width: 30px;
  height: 22px;
  top: 44px;
  left: 72px;
  border-radius: 10px 10px 50% 50%;
  transform: rotate(-3deg);
  background-color: var(--accent2-primary);
  animation: reindeer-face 1.6s linear alternate infinite;
}
.reindeer__face:before {
  content: "";
  position: absolute;
  background-color: var(--accent2-primary);
  width: 29px;
  height: 16px;
  border-radius: 50%;
  top: 0px;
  left: 11px;
  transform: rotate(-49deg);
}
.reindeer__face:after {
  content: "";
  position: absolute;
  background-color: var(--accent2-primary);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  top: -8px;
  left: 31px;
}
.reindeer__horn {
  position: absolute;
  width: 29px;
  height: 4px;
  top: -7px;
  left: -21px;
  border-radius: 2px;
  transform: rotate(38deg);
  background-color: white;
}
.reindeer__horn:before, .reindeer__horn:after {
  content: "";
  position: absolute;
  background-color: white;
  border-radius: 2px;
}
.reindeer__horn--left {
  top: -7px;
  left: -21px;
}
.reindeer__horn--left:before {
  top: -4px;
  left: 6px;
  width: 14px;
  height: 4px;
  transform: rotate(43deg);
}
.reindeer__horn--left:after {
  top: -4px;
  left: 13px;
  width: 14px;
  height: 4px;
  -webkit-transform: rotate(43deg);
  transform: rotate(53deg);
}
.reindeer__horn--right {
  top: -12px;
  left: -6px;
  width: 24px;
  transform: rotate(62deg);
}
.reindeer__horn--right:before {
  top: -3px;
  left: 5px;
  width: 10px;
  height: 4px;
  transform: rotate(43deg);
}
.reindeer__horn--right:after {
  top: -3px;
  left: 11px;
  width: 10px;
  height: 4px;
  transform: rotate(53deg);
}
.reindeer__ear {
  position: absolute;
  width: 21px;
  height: 11px;
  top: 4px;
  left: -18px;
  border-radius: 4px 0 50% 50%;
  transform: rotate(4deg);
  background-color: var(--accent2-primary);
}
.reindeer__ear:before {
  content: "";
  position: absolute;
  top: -2px;
  left: 34px;
  width: 4px;
  height: 5px;
  border-radius: 50%;
  transform: rotate(-35deg);
  background-color: #000;
}
.reindeer__body {
  position: absolute;
  width: 58px;
  height: 31px;
  top: 84px;
  left: 28px;
  border-radius: 50% 0;
  transform: rotate(-3deg);
  background-color: var(--accent2-primary);
}
.reindeer__body:before {
  content: "";
  position: absolute;
  width: 46px;
  height: 26px;
  top: -15px;
  left: 32px;
  border-radius: 0 0 50% 50%;
  -webkit-transform: rotate(-3deg);
  transform: rotate(-55deg);
  background-color: var(--accent2-primary);
}
.reindeer__body:after {
  content: "";
  position: absolute;
  width: 43px;
  height: 26px;
  top: -11px;
  left: 29px;
  border-radius: 0 0 50% 50%;
  -webkit-transform: rotate(-3deg);
  transform: rotate(-30deg);
  background-color: var(--accent2-primary);
}
.reindeer__foot-inner {
  position: absolute;
}
.reindeer__foot-inner:before, .reindeer__foot-inner:after {
  content: "";
  position: absolute;
}
.reindeer__foot--inside {
  z-index: 2;
  transform: rotate(-12deg) translate(3px, 0px);
}
.reindeer__foot--front .reindeer__foot-inner {
  width: 40px;
  height: 8px;
  top: 13px;
  left: 35px;
  border-radius: 0 50%;
  transform: rotate(-17deg);
  transform-origin: center;
  background-color: var(--accent2-primary);
  animation: reindeer-front 0.4s linear alternate infinite;
}
.reindeer__foot--front .reindeer__foot-inner:before {
  width: 28px;
  height: 8px;
  top: 0px;
  left: 37px;
  border-radius: 2px 50%;
  transform: rotate(131deg);
  background-color: var(--accent2-primary);
  animation: reindeer-front-ext 0.5s linear alternate infinite;
}
.reindeer__foot--front .reindeer__foot-inner:after {
  width: 8px;
  height: 9px;
  top: 27px;
  left: 32px;
  border-radius: 2px;
  transform: rotate(131deg);
  background-color: #362514;
  animation: reindeer-front-ext-hoof 0.5s linear alternate infinite;
}
.reindeer__foot--back .reindeer__foot-inner {
  width: 56px;
  height: 9px;
  top: 35px;
  left: -29px;
  border-radius: 0 50%;
  transform: rotate(-73deg);
  background-color: var(--accent2-primary);
  animation: reindeer-back 0.5s linear alternate infinite;
}
.reindeer__foot--back .reindeer__foot-inner:before {
  width: 25px;
  height: 16px;
  top: 4px;
  left: 25px;
  border-radius: 0 50%;
  transform: rotate(15deg);
  background-color: var(--accent2-primary);
}
.reindeer__foot--back .reindeer__foot-inner:after {
  width: 8px;
  height: 9px;
  top: -2px;
  left: -2px;
  border-radius: 2px 0 2px 2px;
  transform: rotate(14deg);
  background-color: #362514;
}
.reindeer__tail {
  position: absolute;
  width: 27px;
  height: 26px;
  top: 6px;
  left: -8px;
  border-radius: 50% 2px;
  transform: rotate(-17deg);
  background-color: var(--accent2-primary);
}
.reindeer__tail:before {
  content: "";
  position: absolute;
  background-color: var(--accent2-primary);
  border-radius: 50%;
  top: -2px;
  left: -3px;
  width: 15px;
  height: 5px;
  transform: rotate(25deg);
}

@keyframes reindeer-face {
  0% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(2deg);
  }
}
@keyframes reindeer-back {
  0% {
    transform: rotate(-81deg) translate(-6px, 0px);
  }
  100% {
    transform: rotate(-60deg) translate(0px, 0px);
  }
}
@keyframes reindeer-front {
  0% {
    transform: rotate(-24deg);
  }
  100% {
    transform: rotate(-13deg);
  }
}
@keyframes reindeer-front-ext {
  0% {
    transform-origin: left;
    transform: rotate(55deg);
  }
  100% {
    transform-origin: left;
    transform: rotate(145deg);
  }
}
@keyframes reindeer-front-ext-hoof {
  0% {
    transform-origin: left top;
    transform: rotate(-32deg) translate(14px, 1px);
  }
  100% {
    transform-origin: left top;
    transform: rotate(52deg) translate(-21px, 0px);
  }
}
@keyframes sleigh-santa-lead-left {
  0% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(-2deg);
  }
}
@keyframes sleigh-santa-hand-left {
  0% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-2deg);
  }
}
@keyframes sleigh-santa-lead-right {
  0% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-4deg);
  }
}
@keyframes sleigh-santa-hand-right {
  0% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-30deg);
  }
}
@keyframes santa-hat-main {
  0% {
    transform-origin: left;
    transform: rotate(-15deg);
  }
  100% {
    transform-origin: left;
    transform: rotate(15deg);
  }
}
@keyframes santa-hat-bobble {
  0% {
    transform: translate(0px, -15px);
  }
  100% {
    transform: translate(0px, 5px);
  }
}
@keyframes santa-sac {
  0% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

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
        background: white;
        transform-origin: right;
        transition: 0.5s ease;
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

    .sign {
        font-size: 0.65rem;
        bottom: 3rem;
        left: 9rem;
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
        transition: 0.5s ease;
    }

    .house:hover .doorway,
    .doorway:hover {
        cursor: pointer;
        box-shadow: red 0px 10px 20px;
    }

    .crossed-window {
        width: 2rem;
        aspect-ratio: 1;
        bottom: 1rem;
        left: 1.4rem;
        background: linear-gradient(
            to right,
            transparent 45%,
            var(--accent2-primary) 45% 55%,
            transparent 55%
        ), linear-gradient(
            var(--page-bg-color) 45%,
            var(--accent2-primary) 45% 55%,
            var(--page-bg-color) 55%
        );
    }

    .crossed-window:last-of-type {
        left: 4.8rem;
    }

    .roof-trim {
        width: 12.5rem;
        aspect-ratio: 1;
        bottom: 1rem;
        clip-path: polygon(0 57%, 0 50%, 33% 15%, 70% 48%, 100% 62%, 100% 71%, 66% 60%, 33% 23%);
        background: var(--accent2-primary);
    }

    .chimney {
        height: 3rem;
        width: 1.5rem;
        background: var(--accent2-primary);
        left: 7rem;
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

    /* Car elements */
    .car {
        width: 8rem;
        height: 2rem;
        background: var(--accent2-primary);
        bottom: 1.5rem;
        right: 0;
        animation: driving-car 30s infinite;
    }

    @keyframes driving-car {
        0% {
            transform: translateX(0);
        } 
        10%, 20% {
            transform: translateX(-20rem);
        }
        100% {
            transform: translateX(-150rem);
        }
    }

    .wheel {
        width: 2rem;
        aspect-ratio: 1;
        background: red;
        border-radius: 50px;
        top: 0.5rem;
        left: 1rem;
        background: radial-gradient(
            var(--accent2-primary) 50%,
            var(--page-bg-color) 50%
        );
    }

    .wheel:nth-of-type(2) {
        top: 0.5rem;
        left: 5.5rem;
    }

    .roof {
        width: 6rem;
        height: 1.5rem;
        top: -1.5rem;
        right: 0;
        background: var(--accent2-primary);
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    }

    .windshield {
        width: 5rem;
        height: 1.25rem;
        top: -1.25rem;
        right: 0.5rem;
        background: linear-gradient(
            to right,
            var(--page-bg-color)47%,
            var(--accent2-primary) 47% 53%,
            var(--page-bg-color) 53%
        );
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    }

    .headlight {
        width: 0.5rem;
        height: 0.75rem;
        top: 0.25rem;
        border-radius: 0px 50px 50px 0px;
        background: white;
    }

    .headlight::before {
        content: "";
        position: absolute;
        width: 10rem;
        height: 5rem;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
        background: linear-gradient(
            to right,
            transparent,
            white
        );
        left: -10rem;
        top: -2.15rem;
        opacity: 15%;
        z-index: -10;
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
        left: 85rem;
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

    .porch {
        width: 5rem;
        height: 1rem;
        left: -5rem;
        bottom: 6rem;
        background: var(--accent2-primary);
    }

    .floor {
        width: 5rem;
        height: 1.5rem;
        left: 0;
        top: 4.5rem;
        background: var(--accent2-primary);
    }

    .support {
        width: 0.5rem;
        height: 5rem;
        left: 0.5rem;
        top: 0;
        background: var(--accent2-primary);
    }

    .stairs {
        width: 1.5rem;
        aspect-ratio: 1;
        top: 5rem;
        left: -1.5rem;
        clip-path: polygon(0 100%, 100% 100%, 100% 0, 66% 0, 66% 33%, 33% 33%, 33% 66%, 0 66%);
        background: var(--accent2-primary);
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