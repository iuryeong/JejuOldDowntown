<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tamragukMapImg from '@/assets/image/tamraguk/tamraguk-map.png'

const router = useRouter()

const spots = [
  {
    id: 1,
    name: '천혜의 국제 무역항, 산지포',
    location: '산지천 하류 및 건입동 일대 (현 제주항 부근)',
    pin: { x: 62.0, y: 41.9, color: '#2f6fed' },
    description:
      '"바람과 파도를 막아준 탐라의 관문" 한라산에서 내려오는 산지천과 바다가 만나는 이곳은 과거 \'건들개\'와 \'금산\'이라는 거대한 화산 암벽이 병풍처럼 둘러싸고 있어, 거센 북서풍과 태풍을 막아주는 천연 방파제 역할을 했습니다. 깊은 수심 덕분에 대형 무역선이 안전하게 정박할 수 있었던 탐라국 최고의 국제 무역항이었습니다.',
  },
  {
    id: 2,
    name: '고대 국제 교역의 증거, 산지항 유물 출토지',
    location: '산지항 방파제 유적지',
    pin: { x: 75.4, y: 16.7, color: '#e0342f' },
    description:
      '"중국 신나라 화폐와 수천 점의 유물이 쏟아진 곳" 1928년 산지항 방파제 공사 중 바위 틈새에서 중국 왕망 시대의 화천, 대천오십, 화포를 비롯해 전한 시대의 오주전, 구리거울 조각 수천 점이 발견되었습니다. 기원전 1세기 무렵부터 탐라국이 한나라, 낙랑, 중국 본토와 직접 바닷길로 소통했던 동아시아 해상 무역의 핵심 기지였음을 증명합니다.',
  },
  {
    id: 3,
    name: '거친 바다를 누빈 탐라선과 야광패 무역',
    location: '산지천 마당 및 건입동 포구 (탐라선·야광패 재현 구역 추천)',
    pin: { x: 68.6, y: 37.85, color: '#f2962f' },
    description:
      '"동아시아 왕실을 매료시킨 밤빛조개(야광패)의 출발지" 탐라의 배는 《고려사》에 "거친 풍랑을 만나도 파괴되지 않는다"고 기록될 만큼 견고했습니다. 탐라인들은 이 배로 제주 깊은 바다의 특산물 \'야광패\'를 수출했고, 일본 왕실 보물창고(정창원)의 나전칠기 보물에 쓰일 정도로 귀한 사치품이었습니다.',
  },
  {
    id: 4,
    name: '당당한 독립 주권 국가, 탐라국의 외교',
    location: '제주 관덕정 및 삼도동 일대 (탐라국 중심지)',
    pin: { x: 35.6, y: 77.9, color: '#3fae5c' },
    description:
      '"신라, 백제, 왜국과 어깨를 나란히 한 탐라의 외교력" 산지항을 통해 축적된 경제력을 바탕으로 탐라국은 당당한 주권 국가의 위상을 떨쳤습니다. 665년 당나라 고종의 태산 봉선제에 탐라국 왕이 사신을 보내 신라·백제·왜국의 사신들과 나란히 국가 의례에 참여했습니다.',
  },
]

const activeSpot = ref(null)

function openSpot(spot) {
  activeSpot.value = spot
}
function closeModal() {
  activeSpot.value = null
}
function goToIntro() {
  router.push({ name: 'tamraguk' })
}
</script>

<template>
  <main class="map-page">
    <header class="map-page__header">
      <button class="map-page__back" @click="goToIntro">← 탐라국 소개로</button>
      <p class="map-page__eyebrow">추천 답사 동선</p>
      <h1>탐라국 지도</h1>
    </header>

    <div class="map-image-wrap">
      <img :src="tamragukMapImg" alt="제주 원도심 주요 유적지 위치도" class="map-image" />
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
        <p class="modal-location">{{ activeSpot.location }}</p>
        <h2>{{ activeSpot.name }}</h2>
        <p class="modal-desc">{{ activeSpot.description }}</p>
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

.map-page__eyebrow {
  margin: 0 0 10px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
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
  width: min(520px, 100%);
  padding: 36px;
  border-radius: 20px;
  background: #fff8f0;
  color: #2e261a;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
}

.modal-location {
  margin: 0 0 6px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #7d4e2b;
}

.modal h2 {
  margin: 0 0 14px;
  font-family: 'Noto Serif KR', serif;
}

.modal-desc {
  margin: 0;
  line-height: 1.7;
  color: #4a3f2f;
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
