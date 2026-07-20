<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import seonganMapImg from '@/assets/image/seongan/seongan-map.png'
import oheyondanImg from '@/assets/image/seongan/oheyondan.png'
import sanchoImg from '@/assets/image/seongan/sancho.png'
import songinsuImg from '@/assets/image/seongan/songinsu.png'
import songsiyeolImg from '@/assets/image/seongan/songsiyeol.png'
import mokgwanaImg from '@/assets/image/seongan/mokguana.png'
import guandeokjeongImg from '@/assets/image/seongan/guandeokjeong.png'

const router = useRouter()

const spots = [
  {
    id: 1,
    name: '광해군 유배지 (별도봉)',
    pin: { x: 10.1, y: 39.1, color: '#3fae5c' },
    description:
      '조선 15대 왕 광해군은 1623년 인조반정으로 폐위되어 강화도와 교동도를 거쳐 제주로 유배되었습니다. 별도봉 인근에서 위리안치(가시 울타리로 외부와 격리하는 유배형)를 당한 채 작은 초가에서 지내다, 1641년 이곳 제주에서 생을 마감했습니다.',
  },
  {
    id: 2,
    name: '제주목관아',
    pin: { x: 41.0, y: 59.6, color: '#2f6fed' },
    image: mokgwanaImg,
    description:
      '조선시대 제주의 행정과 사법을 총괄하던 관청입니다. 유배인에 대한 감독과 관리도 이곳을 중심으로 이루어졌으며, 관아 접근성과 행정 편의 때문에 많은 유배인이 성안(제주성 안쪽)에 머물렀습니다.',
  },
  {
    id: 3,
    name: '관덕정',
    pin: { x: 25.4, y: 81.1, color: '#e0342f' },
    image: guandeokjeongImg,
    description:
      '제주목관아와 함께 성안 행정의 중심 공간이었던 누각입니다. 오늘날까지 남아 있는 제주 원도심의 대표적인 역사 건축물로, 유배인들의 삶과도 깊이 맞닿아 있는 장소입니다.',
  },
  {
    id: 4,
    name: '오현단',
    pin: { x: 55.7, y: 86.9, color: '#f2962f' },
    items: [
      {
        image: oheyondanImg,
        text: '제주에 유배되어 학문과 교육 발전에 큰 영향을 준 다섯 유학자, 오현(五賢)을 기리는 제단입니다. 충암 김정, 규암 송인수, 청음 김상헌, 동계 정온, 우암 송시열의 뜻을 기립니다.',
      },
      {
        title: '충암 김정 (1520)',
        image: sanchoImg,
        text: '조선 중종 때의 대표적인 사림파 학자이자 정치가로, 34세에 형조판서에 임명되었습니다. 조광조와 함께 개혁 정치를 추진하다 기묘사화(1519)로 제주에 유배되었고, 제주의 자연환경과 풍속을 기록한 《제주풍토록》을 저술했습니다.',
      },
      {
        title: '규암 송인수 (1534)',
        image: songinsuImg,
        text: '조선 중종 때의 문신이자 사림파 학자로, 김안로를 탄핵한 일로 1534년 제주목사로 좌천되었습니다. 재임 기간은 약 3개월로 짧았지만 청렴한 행정과 유학 장려로 제주 교육 발전에 공헌했습니다.',
      },
      {
        title: '청음 김상헌 (1601)',
        text: '조선 중기의 문신이자 학자로, 1601년 길운철·소덕유 모반 사건 이후 민심을 수습하기 위해 안무어사로 제주에 파견되어 약 5개월간 머물렀습니다. 제주의 역사와 풍속, 생활상을 《남사록》에 기록했습니다.',
      },
      {
        title: '동계 정온 (1614)',
        text: '조선 광해군 때의 문신으로, 영창대군 사건과 인목대비 폐모론을 비판하는 상소를 올려 제주에 위리안치되었습니다. 약 10년 동안 독서와 학문 연구에 전념하며 제주의 학풍 형성에 영향을 주었습니다.',
      },
      {
        title: '우암 송시열 (1689)',
        image: songsiyeolImg,
        text: '조선 후기 노론의 대표적인 성리학자로, 세자 책봉에 반대하는 상소를 올려 제주에 유배되었습니다. 유배는 약 3개월로 짧았지만 제주 유생들에게 큰 영향을 주었고, 사후 귤림서원에 배향되어 오현의 한 사람으로 기려지고 있습니다.',
      },
    ],
  },
]

const activeSpot = ref(null)
const activeItemIndex = ref(0)

const activeItems = computed(() => activeSpot.value?.items ?? [])
const activeItem = computed(() => activeItems.value[activeItemIndex.value] ?? null)

function openSpot(spot) {
  activeSpot.value = spot
  activeItemIndex.value = 0
}
function closeModal() {
  activeSpot.value = null
}
function nextItem() {
  if (activeItemIndex.value < activeItems.value.length - 1) {
    activeItemIndex.value += 1
  }
}
function prevItem() {
  if (activeItemIndex.value > 0) {
    activeItemIndex.value -= 1
  }
}
function goToIntro() {
  router.push({ name: 'seongan' })
}
</script>

<template>
  <main class="map-page">
    <header class="map-page__header">
      <button class="map-page__back" @click="goToIntro">← 성안유배길 소개로</button>
      <h1>성안유배길 지도</h1>
    </header>

    <div class="map-image-wrap">
      <img :src="seonganMapImg" alt="성안유배길 주요 유적지 위치도" class="map-image" />
      <button
        v-for="spot in spots"
        :key="spot.id"
        class="map-pin"
        :style="{ left: spot.pin.x + '%', top: spot.pin.y + '%', backgroundColor: spot.pin.color }"
        @click="openSpot(spot)"
      >
        {{ spot.id }}
      </button>
    </div>

    <div v-if="activeSpot" class="modal-backdrop" @click.self="closeModal">
      <div class="modal">
        <button class="modal-close" @click="closeModal">닫기</button>
        <h2>{{ activeSpot.name }}</h2>

        <template v-if="!activeItems.length">
          <img
            v-if="activeSpot.image"
            :src="activeSpot.image"
            :alt="activeSpot.name"
            class="modal-slide__image"
          />
          <p>{{ activeSpot.description }}</p>
        </template>

        <div v-if="activeItem" class="modal-slide">
          <img
            v-if="activeItem.image"
            :src="activeItem.image"
            :alt="activeItem.title || activeSpot.name"
            class="modal-slide__image"
          />
          <h3 v-if="activeItem.title" class="modal-slide__title">{{ activeItem.title }}</h3>
          <p class="modal-slide__text">{{ activeItem.text }}</p>
        </div>

        <div v-if="activeItems.length > 1" class="modal-nav">
          <button
            class="modal-nav__arrow"
            :disabled="activeItemIndex === 0"
            @click="prevItem"
          >←</button>
          <span class="modal-nav__count">{{ activeItemIndex + 1 }} / {{ activeItems.length }}</span>
          <button
            class="modal-nav__arrow"
            :disabled="activeItemIndex === activeItems.length - 1"
            @click="nextItem"
          >→</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.map-page {
  min-height: 100vh;
  background: #0f2d2e;
  color: #f8f3ea;
  padding: clamp(32px, 6vw, 72px) clamp(20px, 6vw, 64px) 96px;
}

.map-page__header {
  width: min(760px, 100%);
  margin: 0 auto;
  text-align: center;
}

.map-page__back {
  border: none;
  background: transparent;
  color: rgba(248, 243, 234, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 24px;
}

.map-page__back:hover {
  color: #ffd27a;
}

.map-page h1 {
  margin: 0;
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 900;
}

.map-image-wrap {
  position: relative;
  width: min(1100px, 100%);
  margin: 48px auto 0;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.map-image {
  display: block;
  width: 100%;
  height: auto;
}

.map-pin {
  position: absolute;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
  border: 2px solid #fff8f0;
  border-radius: 50%;
  color: #fff8f0;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.map-pin:hover {
  transform: translate(-50%, -50%) scale(1.18);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 100;
}

.modal {
  position: relative;
  width: min(480px, 100%);
  padding: 36px;
  border-radius: 20px;
  background: #fff8f0;
  color: #2e261a;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
}

.modal h2 {
  margin: 0 0 14px;
  font-family: 'Noto Serif KR', serif;
}

.modal p {
  margin: 0;
  line-height: 1.7;
  color: #4a3f2f;
}

.modal-slide__image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 14px;
  margin: 0 0 16px;
}

.modal-slide__title {
  margin: 0 0 10px;
  font-family: 'Noto Serif KR', serif;
  color: #7d4e2b;
}

.modal-slide__text {
  margin: 0;
  line-height: 1.7;
  color: #4a3f2f;
}

.modal-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(125, 78, 43, 0.15);
}

.modal-nav__arrow {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(125, 78, 43, 0.3);
  border-radius: 50%;
  background: transparent;
  color: #7d4e2b;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.modal-nav__arrow:hover:not(:disabled) {
  background: rgba(125, 78, 43, 0.1);
}

.modal-nav__arrow:disabled {
  opacity: 0.3;
  cursor: default;
}

.modal-nav__count {
  font-size: 0.85rem;
  color: #7b6a57;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.9rem;
  color: #7b6a57;
}
</style>
