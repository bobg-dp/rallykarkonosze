<template>
  <Teleport to="body">
    <div v-if="visible" class="sniezka-promo-overlay">
      <div
        ref="dialogRef"
        class="sniezka-promo"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sniezka-promo-title"
        @click="openSite"
      >
        <div class="sniezka-promo-asphalt" aria-hidden="true"></div>
        <div class="sniezka-promo-streaks" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <svg
          class="sniezka-promo-ridge"
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0 330 L140 306 L280 322 L420 262 L540 292 L648 216 L720 172 L804 232 L930 206 L1060 264 L1190 238 L1310 282 L1440 262 L1440 420 L0 420 Z"
            fill="rgba(36, 69, 95, 0.55)"
          />
          <path
            d="M0 366 L160 344 L320 354 L450 302 L560 326 L664 256 L740 292 L870 256 L1000 308 L1140 278 L1270 318 L1380 302 L1440 324 L1440 420 L0 420 Z"
            fill="rgba(24, 54, 78, 0.9)"
          />
          <path
            d="M0 420 L0 360 L150 340 L330 300 L500 230 L640 120 L720 70 L812 152 L980 240 L1150 310 L1300 350 L1440 368 L1440 420 Z"
            fill="#081522"
          />
          <polyline
            points="0 360 150 340 330 300 500 230 640 120 720 70 812 152 980 240 1150 310 1300 350 1440 368"
            fill="none"
            stroke="rgba(232, 238, 243, 0.28)"
            stroke-width="2.5"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M612 148 L668 108 L696 130 L640 172 Z M500 230 L566 180 L600 212 L544 240 Z M840 188 L896 232 L856 248 L818 212 Z"
            fill="rgba(232, 238, 243, 0.22)"
          />
          <g fill="#081522">
            <rect x="698" y="6" width="3" height="34" />
            <path d="M678 56 L722 56 L727 114 L673 114 Z" />
            <ellipse cx="700" cy="38" rx="66" ry="12" />
            <rect x="644" y="38" width="112" height="19" />
            <ellipse cx="700" cy="57" rx="56" ry="10" />
            <ellipse cx="700" cy="26" rx="44" ry="8" />
            <path d="M762 80 L818 80 L823 172 L757 172 Z" />
            <ellipse cx="792" cy="66" rx="52" ry="10" />
            <rect x="740" y="66" width="104" height="15" />
            <ellipse cx="792" cy="81" rx="44" ry="8" />
          </g>
        </svg>

        <div class="sniezka-promo-body">
          <div class="sniezka-promo-logo-band">
            <span class="sniezka-promo-flag" aria-hidden="true"></span>
            <img
              src="/rajd-sniezki-logo.png"
              alt="Rajd Śnieżki"
              class="sniezka-promo-logo"
            />
            <button
              type="button"
              class="sniezka-promo-close"
              @click.stop="dismiss"
            >
              zamknij
            </button>
          </div>

          <div class="sniezka-promo-copy">
            <div class="sniezka-promo-copy-inner">
            <p class="sniezka-promo-kicker">Automobilklub Karkonosze zaprasza</p>
            <h2 id="sniezka-promo-title" class="sniezka-promo-title">
              <span>Rajd</span>
              <span class="sniezka-promo-title-accent">Śnieżki</span>
            </h2>
            <p class="sniezka-promo-date">17–18 października 2026</p>
            <p class="sniezka-promo-lead">
              W tych dniach na terenie gmin Piechowice i Stara Kamienica, miasta
              Jelenia Góra oraz powiatu karkonoskiego odbywać się będzie Rajd
              Śnieżki.
            </p>
            <ul class="sniezka-promo-places">
              <li v-for="place in places" :key="place.name">
                <span class="sniezka-promo-crest">
                  <img :src="place.crest" alt="" />
                </span>
                <span class="sniezka-promo-place-name">{{ place.name }}</span>
              </li>
            </ul>
            <p class="sniezka-promo-invite">
              Zapraszamy do kibicowania przy górskich asfaltach. Przyjdź
              dopingować załogi — Karkonosze znów zatętnią sportem.
            </p>
            </div>
          </div>

          <a
            ref="ctaRef"
            class="sniezka-promo-cta"
            href="https://rajdsniezki.pl"
            @click.stop
          >
            <span>Wejdź na stronę Rajdu Śnieżki</span>
            <span class="sniezka-promo-cta-url">rajdsniezki.pl</span>
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const SITE_URL = 'https://rajdsniezki.pl'
const STORAGE_KEY = 'rajd-sniezki-promo-dismissed'
const EVENT_END = Date.parse('2026-10-18T18:00:00+02:00')

const places = [
  {
    name: 'Piechowice',
    crest: '/assets/gminy/piechowice.webp',
  },
  {
    name: 'Stara Kamienica',
    crest: '/assets/gminy/stara-kamienica.webp',
  },
  {
    name: 'Jelenia Góra',
    crest: '/assets/gminy/jelenia-gora.png',
  },
  {
    name: 'Powiat karkonoski',
    crest: '/assets/gminy/powiat-karkonoski.png',
  },
]

const visible = ref(false)
const dialogRef = ref(null)
const ctaRef = ref(null)

function dismiss() {
  visible.value = false
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)

  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // Sesja prywatna może blokować zapis. Popup i tak znika do przeładowania.
  }
}

function openSite() {
  const selection = window.getSelection()

  if (selection && selection.toString().length > 0) {
    return
  }

  window.location.assign(SITE_URL)
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    dismiss()
    return
  }

  if (event.key !== 'Tab' || !dialogRef.value) {
    return
  }

  const focusable = [...dialogRef.value.querySelectorAll('a, button')]

  if (focusable.length === 0) {
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(async () => {
  if (Date.now() > EVENT_END) {
    return
  }

  try {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      return
    }
  } catch {
    // Brak sessionStorage nie blokuje pokazu.
  }

  visible.value = true
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
  await nextTick()
  ctaRef.value?.focus()
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.sniezka-promo-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 50% 40%, rgba(247, 96, 3, 0.16), transparent 42%),
    rgba(8, 21, 34, 0.78);
  padding: 0;
}

.sniezka-promo {
  container-type: size;
  position: relative;
  box-sizing: border-box;
  width: 80vw;
  max-width: 80vw;
  min-width: 0;
  height: 80dvh;
  overflow: hidden;
  color: #e8eef3;
  background: #0e2133;
  box-shadow:
    0 0 0 1px rgba(247, 96, 3, 0.35),
    0 28px 80px rgba(0, 0, 0, 0.48);
  cursor: pointer;
  animation: sniezka-promo-in 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.sniezka-promo-asphalt,
.sniezka-promo-streaks,
.sniezka-promo-ridge {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.sniezka-promo-asphalt {
  background:
    radial-gradient(ellipse 48% 36% at 100% 0%, rgba(247, 96, 3, 0.42), transparent 62%),
    radial-gradient(ellipse 36% 28% at 0% 18%, rgba(232, 238, 243, 0.08), transparent 58%),
    radial-gradient(ellipse 42% 30% at 8% 100%, rgba(247, 96, 3, 0.16), transparent 60%),
    repeating-linear-gradient(
      115deg,
      rgba(255, 255, 255, 0.028) 0 1px,
      transparent 1px 7px
    ),
    linear-gradient(165deg, #24455f 0%, #18364e 28%, #0e2133 62%, #081522 100%);
}

.sniezka-promo-streaks {
  overflow: hidden;
}

.sniezka-promo-streaks span {
  position: absolute;
  left: -40%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(247, 96, 3, 0.85), transparent);
  animation: sniezka-streak 2.8s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}

.sniezka-promo-streaks span:nth-child(1) {
  top: 28%;
  width: 38%;
}

.sniezka-promo-streaks span:nth-child(2) {
  top: 46%;
  width: 52%;
  animation-delay: 0.9s;
  opacity: 0.7;
}

.sniezka-promo-streaks span:nth-child(3) {
  top: 63%;
  width: 28%;
  height: 1px;
  animation-delay: 1.6s;
  opacity: 0.45;
}

.sniezka-promo-ridge {
  top: auto;
  height: 34%;
}

.sniezka-promo-body {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  width: 100%;
  min-width: 0;
  height: 100%;
  overflow: hidden;
}

.sniezka-promo-logo-band {
  display: grid;
  flex: 0 0 auto;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: 0.65rem;
  padding: clamp(0.55rem, 1.6cqh, 0.95rem) 0.85rem clamp(0.55rem, 1.6cqh, 0.95rem) 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.55), transparent 42%),
    linear-gradient(100deg, #f7f4ef 0%, #e8eef3 46%, #d5e0e8 100%);
  box-shadow: inset 0 -4px 0 #f76003;
}

.sniezka-promo-flag {
  align-self: stretch;
  width: 0.55rem;
  background: repeating-linear-gradient(
    180deg,
    #f76003 0 10px,
    #18364e 10px 20px
  );
}

.sniezka-promo-logo {
  display: block;
  justify-self: center;
  min-width: 0;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: clamp(3.6rem, 16cqh, 7.25rem);
  object-fit: contain;
}

.sniezka-promo-close {
  margin: 0;
  padding: 0.35rem 0.15rem;
  border: 0;
  background: transparent;
  color: rgba(24, 54, 78, 0.45);
  font-family: var(--font-family-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
}

.sniezka-promo-close:hover {
  color: rgba(24, 54, 78, 0.72);
}

.sniezka-promo-copy {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: clamp(0.75rem, 2.2cqh, 1.35rem) clamp(1rem, 4cqw, 3.25rem);
  background: linear-gradient(
    180deg,
    rgba(14, 33, 51, 0.08) 0%,
    rgba(8, 21, 34, 0.55) 58%,
    rgba(8, 21, 34, 0.82) 100%
  );
  text-shadow: 0 1px 0 rgba(8, 21, 34, 0.35);
}

.sniezka-promo-copy-inner {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin-block: auto;
}

.sniezka-promo-kicker {
  margin: 0;
  color: #fc8e4a;
  font-family: var(--font-family-display);
  font-size: clamp(0.72rem, 2.4cqw, 0.95rem);
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.sniezka-promo-title {
  margin: 0.12em 0 0;
  font-family: var(--font-family-display);
  font-size: clamp(2.15rem, min(13cqw, 12cqh), 5.6rem);
  font-style: italic;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 0.84;
  text-transform: uppercase;
}

.sniezka-promo-title span {
  display: block;
}

.sniezka-promo-title-accent {
  color: #f76003;
}

.sniezka-promo-date {
  margin: clamp(0.7rem, 2cqh, 1.1rem) 0 0;
  color: #fff;
  font-family: var(--font-family-display);
  font-size: clamp(1rem, 3.2cqw, 1.65rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.sniezka-promo-date::before {
  content: "";
  display: inline-block;
  width: clamp(1.4rem, 4cqw, 2.6rem);
  height: 3px;
  margin-right: 0.7rem;
  vertical-align: middle;
  background: #f76003;
}

.sniezka-promo-lead,
.sniezka-promo-invite {
  max-width: 100%;
  margin: 0.7rem 0 0;
  color: #e8eef3;
  font-size: clamp(0.92rem, 2.4cqw, 1.15rem);
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.sniezka-promo-invite {
  color: #c0ccd6;
  font-family: var(--font-family-display);
  font-size: clamp(1.05rem, 2.8cqw, 1.45rem);
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.25;
  text-transform: uppercase;
}

.sniezka-promo-places {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem 0.45rem;
  width: 100%;
  max-width: 100%;
  margin: 0.85rem 0 0;
  padding: 0;
  list-style: none;
}

.sniezka-promo-places li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  min-width: 0;
  padding: 0;
  color: #e8eef3;
  font-family: var(--font-family-display);
  font-size: clamp(0.68rem, 2cqw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.15;
  text-align: center;
  text-shadow: none;
  text-transform: uppercase;
}

.sniezka-promo-crest {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: min(100%, 4.5rem);
  aspect-ratio: 1;
  height: auto;
  overflow: hidden;
  background: #fff;
}

.sniezka-promo-crest img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sniezka-promo-place-name {
  display: block;
  width: 100%;
  max-width: 8.5rem;
}

.sniezka-promo-cta {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  position: relative;
  z-index: 2;
  min-height: clamp(3.5rem, 12cqh, 5.6rem);
  padding: 0.85rem 1.25rem;
  background: linear-gradient(90deg, #c04b02 0%, #f76003 38%, #fc8e4a 100%);
  color: #081522;
  font-family: var(--font-family-display);
  font-size: clamp(1.15rem, 4cqw, 2rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  line-height: 1.05;
  text-align: center;
  text-decoration: none;
  text-shadow: none;
  text-transform: uppercase;
}

.sniezka-promo-cta-url {
  color: rgba(8, 21, 34, 0.72);
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.sniezka-promo-cta:hover {
  background: #f76003;
  color: #fff;
}

.sniezka-promo-cta:hover .sniezka-promo-cta-url {
  color: rgba(255, 255, 255, 0.82);
}

.sniezka-promo-cta:focus-visible,
.sniezka-promo-close:focus-visible {
  outline: 3px solid #f76003;
  outline-offset: 2px;
}

@keyframes sniezka-promo-in {
  from {
    opacity: 0;
    transform: translateY(1rem) scale(0.985);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes sniezka-streak {
  0% {
    transform: translate3d(-30%, 0, 0);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    transform: translate3d(280%, 0, 0);
    opacity: 0;
  }
}

@container (max-height: 640px) {
  .sniezka-promo-logo {
    max-height: 3.35rem;
  }

  .sniezka-promo-title {
    font-size: clamp(1.85rem, 10cqh, 3.15rem);
  }

  .sniezka-promo-kicker {
    letter-spacing: 0.12em;
  }

  .sniezka-promo-lead,
  .sniezka-promo-invite {
    margin-top: 0.4rem;
    font-size: 0.9rem;
  }

  .sniezka-promo-date {
    margin-top: 0.45rem;
    font-size: 0.95rem;
  }

  .sniezka-promo-places {
    margin-top: 0.45rem;
    gap: 0.45rem 0.35rem;
  }

  .sniezka-promo-cta {
    min-height: 3.35rem;
    font-size: 1rem;
  }
}

@container (max-width: 640px) {
  .sniezka-promo-logo {
    max-height: 3.1rem;
  }

  .sniezka-promo-title {
    font-size: 2.35rem;
  }

  .sniezka-promo-lead,
  .sniezka-promo-invite {
    margin-top: 0.4rem;
    font-size: 0.9rem;
  }

  .sniezka-promo-places {
    margin-top: 0.55rem;
    gap: 0.4rem 0.3rem;
  }

  .sniezka-promo-places li {
    letter-spacing: 0.03em;
    font-size: 0.62rem;
  }
}

@container (max-height: 560px) {
  .sniezka-promo-logo {
    max-height: 2.55rem;
  }

  .sniezka-promo-title {
    font-size: 2rem;
  }

  .sniezka-promo-places {
    margin-top: 0.3rem;
    gap: 0.3rem 0.25rem;
  }

  .sniezka-promo-invite {
    margin-top: 0.25rem;
  }

  .sniezka-promo-copy {
    padding-top: 0.45rem;
    padding-bottom: 0.35rem;
  }
}

@media (max-width: 640px) {
  .sniezka-promo-cta {
    letter-spacing: 0.03em;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sniezka-promo {
    animation: none;
  }

  .sniezka-promo-streaks span {
    animation: none;
    opacity: 0;
  }
}
</style>
