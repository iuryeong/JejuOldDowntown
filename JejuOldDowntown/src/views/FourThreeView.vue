<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import jejuMapRaw from '@/assets/jeju-map.svg?raw'
import jujeongImg from '@/assets/image/4-3/Jujeong.png'
import bukElementaryImg from '@/assets/image/4-3/bukelementary.png'
import guandeokjeongImg from '@/assets/image/4-3/guandeokjeong.png'
import seobookImg from '@/assets/image/4-3/seobook.png'
import sinbosaImg from '@/assets/image/4-3/sinbosa.png'

const router = useRouter()

// 4·3 지도 배경: jeju-map.svg의 경로를 그대로 불러와 클릭 가능한 영역으로 사용합니다.
// 희생자 수·설명은 4-3.txt에 근거가 있는 지역만 채워져 있습니다.
const regionInfo = [
  {
    // 한경면은 역사적으로 한림면에 속해 있었으므로 하나의 지역(한림면)으로 합칩니다.
    title: '한림면',
    victims: 1037,
    labelOffset: { x: -8, y: 8 },
    items: [
      {
        text: '고(故) 진아영 할머니(무명천 할머니) — 1949년 1월 군경토벌대의 총격으로 아래턱을 완전히 잃었습니다. 구사일생으로 목숨은 건졌으나, 평생을 극심한 고통 속에서 살아가게 되었습니다.',
      },
    ],
  },
  { title: '대정읍', victims: 622, labelOffset: { x: 8, y: -8 } },
  { title: '안덕면', victims: 679, labelOffset: { x: -16, y: 0 } },
  { title: '애월읍', victims: 1579, labelOffset: { x: -24, y: 0 } },
  { title: '중문', victims: 733, labelOffset: { x: 8, y: 0 } },
  {
    title: '서귀포시',
    victims: 574,
    labelOffset: { x: -8, y: 0 },
    items: [
      {
        text: '고(故) 오희춘 할머니 — 14세 때 "육지에서 물질하게 해주겠다"는 말에 속아 지장을 찍었다가, 자신도 모르게 남로당 문서에 가입되어 억울하게 10개월간 옥살이를 했습니다. 70년이 지난 후에야 명예 회복을 위한 재심 신청에 나섰습니다.',
      },
    ],
  },
  {
    title: '제주시',
    victims: 3969,
    items: [
      {
        text: '고(故) 현창용 할아버지 — 16세에 고문으로 내란죄 누명을 쓰고 5년형을 살았고, 이후 간첩으로 몰려 20년간 억울한 옥살이를 했습니다.',
      },
      {
        title: '주정공장 창고',
        image: jujeongImg,
        text: '1949년 봄 귀순한 입산자들을 감금하는 수용소로 사용되었습니다.',
      },
      {
        title: '서북청년단 사무실 터',
        image: seobookImg,
        text: '1947년 결성된 서북청년단이 비어 있던 건물을 강제로 접수해 사용했습니다.',
      },
      {
        title: '신보사 옛 터',
        image: sinbosaImg,
        text: '편집국장 김호진이 포고문 인쇄 혐의로 1948년 총살되었습니다.',
      },
      {
        title: '제주 북초등학교',
        image: bukElementaryImg,
        text: '1947년 3·1절 기념대회 후 기마경찰과 군중이 충돌해 경찰 발포로 6명이 희생됐습니다.',
      },
      {
        title: '관덕정 광장',
        image: guandeokjeongImg,
        text: '3·1절 발포 사건이 일어난 곳으로, 도민 6명이 사망하고 6명이 부상을 입었습니다.',
      },
    ],
  },
  { title: '남원읍', victims: 965, labelOffset: { x: 8, y: 0 } },
  { title: '표선면', victims: 696, labelOffset: { x: 16, y: 0 } },
  { title: '조천읍', victims: 1859, labelOffset: { x: 24, y: 0 } },
  { title: '구좌읍', victims: 915 },
  { title: '성산읍', victims: 471, labelOffset: { x: -8, y: 0 } },
]

const rawPaths = [...jejuMapRaw.matchAll(/<path[^>]*\sd="([^"]+)"/g)].map((m) => m[1])

// 한림읍(0번)과 한경면(1번) 도형을 하나의 path로 합쳐 '한림면' 한 영역으로 만듭니다.
const pathList = [`${rawPaths[0]} ${rawPaths[1]}`, ...rawPaths.slice(2)]

const regions = pathList.map((d, index) => ({
  id: index + 1,
  d,
  ...regionInfo[index],
}))

const activeRegion = ref(null)
const activeItemIndex = ref(0)

const activeItems = computed(() => activeRegion.value?.items ?? [])
const activeItem = computed(() => activeItems.value[activeItemIndex.value] ?? null)

function openRegion(region) {
  activeRegion.value = region
  activeItemIndex.value = 0
}

function closeModal() {
  activeRegion.value = null
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
  router.push({ name: 'fourthree' })
}

// 각 지역 도형의 중심 좌표를 계산해 지도 위에 지역명을 표시합니다.
const pathEls = []
function setPathRef(el, index) {
  pathEls[index] = el
}

const labelPositions = ref([])

onMounted(async () => {
  await nextTick()
  labelPositions.value = pathEls.map((el) => {
    if (!el) return { x: 0, y: 0 }
    const box = el.getBBox()
    return { x: box.x + box.width / 2, y: box.y + box.height / 2 }
  })
})
</script>

<template>
  <main class="map-view">
    <header class="map-view__header">
      <button class="map-view__back" @click="goToIntro">← 4·3 소개로</button>
      <h1>4·3 지도</h1>
    </header>

    <svg
      class="map-svg"
      viewBox="0 0 570 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-for="(region, index) in regions"
        :key="region.id"
        :ref="(el) => setPathRef(el, index)"
        :d="region.d"
        :transform="region.transform"
        class="map-region"
        :class="{ active: activeRegion && activeRegion.id === region.id }"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        @click="openRegion(region)"
      >
        <title>{{ region.title }}</title>
      </path>

      <text
        v-for="(region, index) in regions"
        :key="'label-' + region.id"
        :x="(labelPositions[index]?.x ?? 0) + (region.labelOffset?.x ?? 0)"
        :y="(labelPositions[index]?.y ?? 0) + (region.labelOffset?.y ?? 0)"
        class="map-label"
        text-anchor="middle"
        dominant-baseline="middle"
      >{{ region.title }}</text>
    </svg>

    <section class="map-stats">
      <p class="map-stats__total">
        확인된 희생자 계 <strong>14,231명</strong>
        <span class="map-stats__note">(본적지가 파악되지 않은 66명 미표시)</span>
      </p>
      <p class="map-stats__estimate">전체 희생자는 25,000명에서 30,000명으로 추산됩니다.</p>
      <ul class="map-stats__breakdown">
        <li>북제주군 <strong>9,359명</strong></li>
        <li>남제주군 <strong>4,740명</strong></li>
        <li>도외 <strong>66명</strong></li>
      </ul>
      <p class="map-stats__caption">
        본 분포지도는 현재까지 희생자로 신고되어 인정된 4·3희생자명단에 근거한 마을별 분포지도입니다.
      </p>
      <p class="map-stats__source">
        출처: 《제주4·3희생자유족회 27년사》, 제주4·3희생자유족회
      </p>
    </section>

    <div v-if="activeRegion" class="modal-backdrop" @click.self="closeModal">
      <div class="modal">
        <button class="modal-close" @click="closeModal">닫기</button>
        <h2>{{ activeRegion.title }}</h2>
        <p v-if="activeRegion.victims" class="modal-victims">
          희생자 {{ activeRegion.victims.toLocaleString() }}명
        </p>

        <div v-if="activeItem" class="modal-slide">
          <img
            v-if="activeItem.image"
            :src="activeItem.image"
            :alt="activeItem.title || activeRegion.title"
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
.map-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 24px;
  background: #0f2d2e;
  color: #f8f3ea;
}

.map-view__header {
  width: min(1100px, 96vw);
  text-align: center;
}

.map-view__back {
  border: none;
  background: transparent;
  color: rgba(248, 243, 234, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 16px;
}

.map-view__back:hover {
  color: #ffd27a;
}

.map-view__header h1 {
  margin: 0;
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 900;
}

.map-svg {
  width: min(1100px, 96vw);
  height: auto;
}

.map-region {
  fill: #1c4a34;
  cursor: pointer;
  transition: fill 0.2s ease, stroke 0.2s ease;
}

.map-region:hover {
  fill: #5fd38d;
  stroke: #eafff0;
}

.map-region.active {
  fill: #7ee6a8;
  stroke: #eafff0;
}

.map-label {
  font-size: 9px;
  font-weight: 700;
  fill: #f8f3ea;
  paint-order: stroke;
  stroke: #0f2d2e;
  stroke-width: 3px;
  stroke-linejoin: round;
  pointer-events: none;
  user-select: none;
}

.map-stats {
  width: min(1100px, 96vw);
  padding: 24px clamp(20px, 4vw, 32px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  background: rgba(8, 28, 29, 0.55);
}

.map-stats__total {
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
}

.map-stats__total strong {
  color: #ff9f6c;
}

.map-stats__note {
  margin-left: 6px;
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(248, 243, 234, 0.6);
}

.map-stats__estimate {
  margin: 0 0 16px;
  font-size: 0.9rem;
  color: rgba(248, 243, 234, 0.75);
}

.map-stats__breakdown {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
  font-size: 0.9rem;
  color: rgba(248, 243, 234, 0.85);
}

.map-stats__breakdown strong {
  color: #ffd27a;
}

.map-stats__caption {
  margin: 0 0 10px;
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(248, 243, 234, 0.65);
}

.map-stats__source {
  margin: 0;
  font-size: 0.78rem;
  color: rgba(248, 243, 234, 0.45);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  position: relative;
  width: min(480px, 90vw);
  max-height: 80vh;
  overflow-y: auto;
  padding: 32px;
  border-radius: 20px;
  background: #fff8f0;
  color: #2e261a;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
}

.modal h2 {
  margin: 0 0 12px;
}

.modal-victims {
  display: inline-block;
  margin: 0 0 16px;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(224, 52, 47, 0.12);
  color: #c23b2f;
  font-size: 0.85rem;
  font-weight: 700;
}

.modal p {
  margin: 0 0 12px;
  line-height: 1.6;
  color: #7b6a57;
}

.modal p:last-child {
  margin-bottom: 0;
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
  line-height: 1.6;
  color: #7b6a57;
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
