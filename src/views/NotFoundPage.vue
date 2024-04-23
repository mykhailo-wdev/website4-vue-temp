<template>
  <section class="notfound">
    <main class="container-paper">
      <div>
        <svg
          class="paper"
          viewBox="0 0 300 300"
          width="300px"
          height="300px"
          role="img"
          aria-label="A piece of paper torn in half"
        >
          <g
            class="paper__outline"
            fill="none"
            stroke="#0267bb"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(61,4)"
          >
            <g class="paper__top" transform="translate(0,25)">
              <polygon
                class="paper__shadow"
                fill="#0267bb"
                stroke="none"
                points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
                transform="translate(-12,12)"
              />
              <rect
                class="paper__tear-fill"
                fill="#0267bb"
                stroke="none"
                x="0"
                y="137"
                width="0"
                height="23px"
              />
              <polygon
                class="paper__fill"
                fill="#0267bb"
                stroke="none"
                points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
              />
              <polygon
                class="paper__shadow"
                fill="#0267bb"
                stroke="none"
                points="137 0,132 55,187 50,142 45"
              />
              <polyline points="137 0,142 45,187 50" />
              <polyline points="0 148,0 0,137 0,187 50,187 148" />
              <g class="paper__lines" stroke="#0267bb">
                <polyline points="22 88,165 88" />
                <polyline points="22 110,165 110" />
                <polyline points="22 132,165 132" />
              </g>
              <polyline
                class="paper__tear"
                points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                stroke-dasharray="198 198"
                stroke-dashoffset="-198"
              />
            </g>
            <g class="paper__bottom" transform="translate(0,25)">
              <polygon
                class="paper__shadow"
                fill="#0267bb"
                stroke="none"
                points="0 148,31 138,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
                transform="translate(-12,12)"
              />
              <polygon
                class="paper__fill"
                fill="#0267bb"
                stroke="none"
                points="0 148,31 140,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
              />
              <polyline points="187 148,187 242,0 242,0 148" />
              <g class="paper__lines" stroke="#0267bb">
                <polyline points="22 154,165 154" />
                <polyline points="22 176,165 176" />
                <polyline points="22 198,94 198" />
              </g>
              <polyline
                class="paper__tear"
                points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                stroke-dasharray="198 198"
                stroke-dashoffset="-198"
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        <h1 class="notfound-heading">Page not found!</h1>
        <p class="notfound-subheading">
          The page you are looking for does not exist!
        </p>
        <a href="/" class="btn-go-home">Return to home page</a>
      </div>
    </main>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notfound {
  $red: 31;
  $green: 169;
  $blue: 94;

  $bg: rgb($red, $green, $blue);
  $fg: rgb($red, $green, $blue);
  $primary: rgb($red, $green, $blue);
  $primary-down: rgb($red, $green, $blue);

  $body-bg: $bg;
  $body-fg: $fg;
  $trans-dur: 0.3s;
  display: flex;
  height: 100vh;

  .container-paper {
    display: grid;
    grid-gap: 3em 1.5em;
    margin: auto;
    max-width: 60em;
    padding: 3em 0;
    text-align: center;
    width: calc(100% - 3em);
  }

  .paper {
    display: block;
    margin: auto;
    overflow: visible;
    width: 100%;
    max-width: 224px;
    height: auto;

    &__fill {
      fill: hsl(0, 0%, 100%);
    }

    &__outline,
    &__lines {
      transition: stroke $trans-dur;
    }

    &__top,
    &__bottom,
    &__tear,
    &__tear-fill {
      animation: paperTop 1.25s cubic-bezier(0.77, 0, 0.18, 1);
    }

    &__top,
    &__bottom {
      transform-origin: 0 148px;
      transition: transform $trans-dur cubic-bezier(0.77, 0, 0.18, 1);
    }

    &__top {
      transform: translate(0, 8px);
    }

    &__bottom {
      animation-name: paperBottom;
      transform: translate(0, 42px);
    }

    &__tear,
    &__tear-fill {
      animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
    }

    &__tear {
      animation-name: paperTear;
      stroke-dashoffset: 0;
    }

    &__tear-fill {
      animation-name: paperTearFill;
    }

    &__outline:hover {
      & .paper__top,
      & .paper__bottom {
        transform: translate(0, 25px);
      }
    }
  }
  .notfound-heading{
    @include text-h1;
  }
  .notfound-subheading{
    @include text-main;
    margin-bottom: $m-space-24;
  }
  .btn-go-home {
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @include btn-styles;
    text-transform: none;
    background: $normal-blue;
    color: $color-white;
    border-radius: $border-radius-44;
    padding: 15px $m-space-30;
    &:hover {
      transition: $transition-extra;
      background: $btn-bg;
      color: $color-white;
    }
  }

  /* Beyond mobile */
  @media (min-width: 768px) {
    .container-paper {
      grid-template-columns: 1fr 2fr;
      align-items: center;
      text-align: left;
    }

    .paper {
      max-width: 300px;
    }
  }

  /* Animations */
  @keyframes paperTop {
    from,
    40% {
      animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
      transform: translate(0, 25px) rotate(0);
      transform-origin: 61px 148px;
    }

    70% {
      animation-timing-function: cubic-bezier(0.33, 1, 0.67, 1.5);
      transform: translate(0, 25px) rotate(-5deg);
      transform-origin: 61px 148px;
    }

    to {
      transform: translate(0, 8px) rotate(0);
      transform-origin: 0 148px;
    }
  }

  @keyframes paperBottom {
    from,
    40% {
      animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
      transform: translate(0, 25px) rotate(0);
      transform-origin: 61px 148px;
    }

    70% {
      animation-timing-function: cubic-bezier(0.33, 1, 0.67, 1.5);
      transform: translate(0, 25px) rotate(5deg);
      transform-origin: 61px 148px;
    }

    to {
      transform: translate(0, 42px) rotate(0);
      transform-origin: 0 148px;
    }
  }

  @keyframes paperTear {
    from,
    40% {
      stroke-dashoffset: -198;
    }

    70%,
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes paperTearFill {
    from,
    40% {
      width: 187px;
    }

    70%,
    to {
      width: 0;
    }
  }
}
</style>
