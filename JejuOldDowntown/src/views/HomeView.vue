<script setup>
import { useRouter, useRoute } from 'vue-router'
import mainPageVideo from '@/assets/main_page_video.mp4'

const router = useRouter()
const route = useRoute()

const navLinks = [
  { key: 'tamraguk', label: '탐라국', introName: 'tamraguk', mapName: 'tamraguk-map' },
  { key: 'seongan', label: '성안 유배길', introName: 'seongan', mapName: 'seongan-map' },
  { key: 'fourthree', label: '4·3', introName: 'fourthree', mapName: 'fourthree-map' },
]

const journeySteps = [
  { name: 'tamraguk', color: '#8bc48a', title: '탐라국', subtitle: '제주의 시작' },
  { name: 'seongan', color: '#ffd27a', title: '성안 유배길', subtitle: '기록된 발걸음' },
  { name: 'fourthree', color: '#ff7a6b', title: '제주 4·3과 현대', subtitle: '기억과 평화의 길' },
]

function navigate(name) {
  router.push({ name })
}
</script>

<template>
  <main class="home">
    <video
      class="page-animation"
      :src="mainPageVideo"
      autoplay
      loop
      muted
      playsinline
    ></video>
    <div class="page-overlay"></div>

    <header class="site-header">
      <div class="brand">
        <span class="brand__mark">A</span>
        걸으며 만나는<br />제주의 원도심의 역사
      </div>
      <nav class="site-nav">
        <div v-for="link in navLinks" :key="link.key" class="nav-item">
          <a
            href="#"
            class="site-nav__link"
            :class="{ active: route.name === link.introName || route.name === link.mapName }"
            @click.prevent="navigate(link.introName)"
          >{{ link.label }}</a>

          <div class="nav-dropdown">
            <div class="nav-dropdown__panel">
              <a href="#" @click.prevent="navigate(link.introName)">소개</a>
              <a href="#" @click.prevent="navigate(link.mapName)">지도</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="header-spacer"></div>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>시간을 걷다, <span class="highlight">제주를 만나다</span></h1>
        <p class="hero-sub">
          탐라국을 시작으로 제주 4·3과 성안 유배길을 따라 걸으며,<br />
          역사를 기억하고, 지역을 다시 찾게 만드는 프로젝트
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #0f2d2e;
}

.page-animation {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #0f2d2e;
}

.page-overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(9, 27, 28, 0.55) 0%,
    rgba(9, 27, 28, 0.15) 35%,
    rgba(9, 27, 28, 0.75) 100%
  );
}

.site-header {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  padding: 24px clamp(24px, 5vw, 64px) 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.3;
  color: #f8f3ea;
  white-space: nowrap;
}

.brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-family: 'Noto Serif KR', serif;
}

.site-nav {
  display: flex;
  justify-content: center;
  gap: clamp(16px, 3vw, 36px);
}

.site-nav__link {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(248, 243, 234, 0.85);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.site-nav__link:hover,
.site-nav__link.active {
  color: #ffd27a;
}

.nav-item {
  position: relative;
}

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 10px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.18s ease;
  z-index: 5;
}

.nav-item:hover .nav-dropdown,
.nav-item:focus-within .nav-dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.nav-dropdown__panel {
  display: flex;
  flex-direction: column;
  min-width: 110px;
  padding: 8px;
  border-radius: 14px;
  background: rgba(8, 28, 29, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
}

.nav-dropdown__panel a {
  padding: 9px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(248, 243, 234, 0.85);
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.nav-dropdown__panel a:hover {
  background: rgba(255, 210, 122, 0.14);
  color: #ffd27a;
}

.header-spacer {
  width: 100%;
}

.hero {
  position: relative;
  z-index: 2;
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
}

.hero-content {
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: clamp(40px, 8vw, 88px) 24px 0;
  text-align: center;
}

h1 {
  margin: 0;
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f8f3ea;
}

h1 .highlight {
  background: linear-gradient(90deg, #ffd27a 0%, #ff9f6c 55%, #ff7a6b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-sub {
  margin: 20px 0 0;
  font-size: 1.02rem;
  line-height: 1.75;
  color: rgba(248, 243, 234, 0.85);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 24px 0;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: rgba(248, 243, 234, 0.55);
}

.scroll-indicator__arrow {
  font-size: 1.1rem;
  line-height: 1;
}

.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
  padding: 0 clamp(8px, 4vw, 48px);
}

.timeline__line {
  position: absolute;
  left: clamp(8px, 4vw, 48px);
  right: clamp(8px, 4vw, 48px);
  bottom: 6px;
  height: 1px;
  background: rgba(248, 243, 234, 0.3);
}

.timeline__step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.timeline__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #f8f3ea;
}

.timeline__label strong {
  font-family: 'Noto Serif KR', serif;
  font-size: 1.05rem;
}

.timeline__label small {
  font-size: 0.8rem;
  color: rgba(248, 243, 234, 0.6);
}

.timeline__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(8, 28, 29, 0.6);
  transition: transform 0.2s ease;
}

.timeline__step:hover .timeline__dot,
.timeline__step.active .timeline__dot {
  transform: scale(1.3);
}

@media (max-width: 720px) {
  .site-header {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 12px;
  }

  .header-spacer {
    display: none;
  }

  .site-nav {
    flex-wrap: wrap;
  }

  .timeline {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .timeline__line {
    display: none;
  }

  .timeline__step {
    flex-direction: row;
    width: 100%;
  }
}
</style>
