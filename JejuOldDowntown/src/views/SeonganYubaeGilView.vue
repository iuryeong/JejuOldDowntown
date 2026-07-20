<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import exileVideo from '@/assets/image/seongan/exile.mp4'

const router = useRouter()

const introStarted = ref(false)
const videoEnded = ref(false)

function onVideoEnded() {
  videoEnded.value = true
}

function startIntro() {
  introStarted.value = true
}

function goToMap() {
  router.push({ name: 'seongan-map' })
}
function goHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <main v-if="!introStarted" class="video-stage">
    <button class="video-stage__back" @click="goHome">← 홈으로</button>
    <video
      :src="exileVideo"
      class="video-stage__video"
      autoplay
      controls
      playsinline
      @ended="onVideoEnded"
    ></video>
    <button v-if="videoEnded" class="video-stage__start-btn" @click="startIntro">
      유배길 시작하기
    </button>
  </main>

  <main v-else class="intro">
    <header class="intro__header">
      <button class="intro__back" @click="goHome">← 홈으로</button>
      <p class="intro__eyebrow">기록된 발걸음</p>
      <h1>성안유배길</h1>
      <p class="intro__lead">
        조선시대 최고의 형벌은 사형이었지만, 사대부에게는 명예를 남긴 채 지방으로 보내는 유배가
        내려지기도 했습니다. 육지와 멀리 떨어진 제주는 대표적인 유배지였고, 수많은 선비와 학자들이
        이곳에서 새로운 삶을 시작했습니다. 그들의 발자취를 함께 걸어볼까요?
      </p>
      <button class="intro__map-btn" @click="goToMap">유배길 지도 보러가기 →</button>
    </header>

    <article class="intro__body">
      <section>
        <h2>유배란 무엇일까?</h2>
        <p>
          유배는 조선의 기본 형법 체계인 오형(五刑) 중 하나로, 주로 반역죄나 중범죄를 저지른 왕족과
          사대부 계층에게 내려진 형벌이었습니다. 제주는 육지와 멀리 떨어져 있어 대표적인 유배지로
          여겨졌고, 수많은 선비와 학자들이 이곳에서 새로운 삶을 시작했습니다.
        </p>
      </section>

      <section>
        <h2>오현(五賢) — 제주에서 학문을 꽃피운 다섯 유학자</h2>
        <p>
          오현이란 제주에 유배되어 학문과 교육 발전에 큰 영향을 준 다섯 명의 유학자를 말합니다.
        </p>
        <p>
          <strong>충암 김정 (1520)</strong> — 조선 중종 때의 대표적인 사림파 학자이자 정치가로,
          34세에 형조판서에 임명되었습니다. 조광조와 함께 왕도정치를 위한 개혁 정치를 추진하다
          기묘사화(1519)로 충청도 금산을 거쳐 제주로 유배되었습니다. 제주의 자연환경과 풍속,
          물산을 기록한 《제주풍토록》을 저술했으며, 이는 16세기 제주의 모습을 알 수 있는 중요한
          역사 자료로 평가됩니다.
        </p>
        <p>
          <strong>규암 송인수 (1534)</strong> — 조선 중종 때의 문신이자 사림파 학자로, 김안로를
          탄핵한 일로 미움을 받아 1534년 제주목사로 좌천되었습니다. 재임 기간은 약 3개월로
          짧았지만 청렴한 행정과 유교적 가치 실천에 힘썼고, 제주에 유학을 장려하고 백성들을
          교화하는 데 큰 공헌을 했습니다.
        </p>
        <p>
          <strong>청음 김상헌 (1601)</strong> — 조선 중기의 문신이자 학자로, 1601년 제주에서
          발생한 길운철·소덕유 모반 사건 이후 민심을 수습하고 진상을 조사하기 위해 안무어사로
          제주에 파견되어 약 5개월간 머물렀습니다. 제주에서 보고 들은 역사와 풍속, 백성들의 생활상을
          《남사록》에 기록했으며, 제주에 유배 와서 숨진 충암 김정 등의 넋을 기리고 제사 지낼 수
          있도록 조정에 건의해 훗날 제주에 유교 학풍과 서원이 들어서는 사상적 발판을 마련했습니다.
        </p>
        <p>
          <strong>동계 정온 (1614)</strong> — 조선 광해군 때의 문신으로, 영창대군 사건과
          인목대비 폐모론을 비판하는 상소를 올려 제주에 위리안치되었습니다. 약 10년 동안 제주에서
          독서와 학문 연구에 전념했고, 많은 책을 가져와 학문을 이어가며 제주의 학풍 형성에 영향을
          주었습니다.
        </p>
        <p>
          <strong>우암 송시열 (1689)</strong> — 조선 후기 노론의 대표적인 성리학자로, 희빈 장씨의
          아들을 세자로 책봉하는 것에 반대하는 상소를 올려 제주에 유배되었습니다. 유배는 약 3개월로
          짧았지만 그의 학문과 정신은 제주 유생들에게 큰 영향을 주었고, 사후 명예가 회복되면서
          귤림서원에 배향되어 오현의 한 사람으로 기려지고 있습니다.
        </p>
      </section>

      <section>
        <h2>광해군 — 왕에서 유배인으로</h2>
        <p>
          광해군(1575~1641)은 조선 제15대 왕으로, 임진왜란 이후 나라를 안정시키기 위해 노력했으며
          명나라와 후금 사이에서 실리 외교를 펼쳤습니다. 그러나 1623년 인조반정으로 왕위에서
          폐위되어 강화도와 교동도를 거쳐 제주로 유배되었습니다.
        </p>
        <p>
          제주에서는 위리안치(가시 울타리를 둘러 외부와 격리하는 유배형)를 당한 채 작은 초가에서
          생활했습니다. 왕에서 하루아침에 유배인이 된 그는 자유를 잃은 채 제주에서 여생을 보내야
          했고, 1641년 제주에서 생을 마감했습니다. 비록 왕으로 복권되지는 못했지만, 오늘날에는
          당시 국제 정세 속에서 실리 외교를 펼친 군주로 재평가되고 있습니다.
        </p>
      </section>

      <section>
        <h2>추사 김정희 — 유배에서 꽃핀 예술</h2>
        <p>
          추사 김정희(1786~1856)는 조선 후기의 문신이자 학자, 서예가로 금석학을 연구하며 독창적인
          서체인 추사체를 완성했습니다. 1840년(헌종 6), 윤상도의 상소 사건에 연루되었다는 이유로
          제주도 대정현에 유배되어 1848년까지 약 9년 동안 유배 생활을 했습니다. 처음에는
          위리안치되어 엄격한 감시를 받았지만, 어려운 환경 속에서도 독서와 서예 연구를 계속하며
          제자들과 편지를 주고받았습니다.
        </p>
        <p>
          <strong>세한도</strong> — 1844년 제주 유배 생활 중 그린 대표적인 문인화이자 국보로,
          귀한 책을 구해 보내준 제자 이상적에게 감사의 마음을 전하기 위해 그린 작품입니다. 초가
          한 채와 소나무, 잣나무를 간결하게 표현하고 넓은 여백을 두어 겨울의 적막한 분위기를
          담아냈으며, 소나무와 잣나무는 어려운 상황에서도 변하지 않는 절개와 의리를 상징합니다.
        </p>
        <p>
          <strong>추사체</strong> — 옛 서체를 깊이 연구하고 금석학을 바탕으로 기존의 형식을
          뛰어넘어 완성한 독창적인 서체입니다. '법고창신(法古創新)', 즉 옛것을 본받아 새로운 것을
          창조한다는 철학이 잘 나타나며, 힘차면서도 절제된 필획과 자유로운 글자 구성이 특징입니다.
          오늘날에도 한국 서예를 대표하는 서체로 평가받고 있습니다.
        </p>
        <p>시련은 위대한 예술이 되었습니다.</p>
      </section>

      <section>
        <h2>제주성과 유배길의 흔적</h2>
        <p>
          유배인들은 왜 성안에 머물렀을까요? 제주목관아를 중심으로 한 행정과 관리 감독, 관아
          접근성, 교육기관의 위치 때문이었습니다. 오늘날 원도심 골목 곳곳에는 그 흔적이 남아
          있습니다.
        </p>
        <p>
          <strong>성곽·관덕정·목관아</strong> — 유배인에 대한 행정과 감독이 이루어지던 중심
          공간입니다.
        </p>
        <p>
          <strong>향교</strong> — 유배 온 학자들이 학문을 잇고 지역 교육에 영향을 준 공간입니다.
        </p>
        <p>
          <strong>유배가옥</strong> — 유배인들이 실제 머물며 생활했던 공간입니다.
        </p>
      </section>

      <section class="intro__sources">
        <h3>자료 출처</h3>
        <ul>
          <li>미디어제주, 〈오현(五賢) 관련 기사〉.</li>
          <li>뉴스제주, 관련 기사.</li>
          <li>제주신보, 관련 기사.</li>
          <li>제주학연구소, 제주학 아카이브.</li>
          <li>한겨레, 노형석, 〈그림 같은 글자가 툭툭 '추사체'〉.</li>
        </ul>
      </section>
    </article>
  </main>
</template>

<style scoped>
.video-stage {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 24px;
  background: #0f2d2e;
}

.video-stage__back {
  position: absolute;
  top: 24px;
  left: 24px;
  border: none;
  background: transparent;
  color: rgba(248, 243, 234, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
}

.video-stage__back:hover {
  color: #ffd27a;
}

.video-stage__video {
  width: min(900px, 100%);
  max-height: 80vh;
  border-radius: 20px;
}

.video-stage__start-btn {
  padding: 14px 32px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: transparent;
  color: #f8f3ea;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.video-stage__start-btn:hover {
  background: rgba(255, 210, 122, 0.15);
  transform: translateY(-1px);
}

.intro {
  min-height: 100vh;
  background: #0f2d2e;
  color: #f8f3ea;
  padding: clamp(32px, 6vw, 72px) clamp(20px, 6vw, 64px) 96px;
}

.intro__header {
  width: min(760px, 100%);
  margin: 0 auto;
  text-align: center;
}

.intro__back {
  border: none;
  background: transparent;
  color: rgba(248, 243, 234, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 24px;
}

.intro__back:hover {
  color: #ffd27a;
}

.intro__eyebrow {
  margin: 0 0 10px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffd27a;
}

.intro h1 {
  margin: 0;
  font-family: 'Noto Serif KR', serif;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 900;
}

.intro__lead {
  margin: 20px 0 28px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(248, 243, 234, 0.85);
}

.intro__map-btn {
  padding: 12px 26px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: transparent;
  color: #f8f3ea;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.intro__map-btn:hover {
  background: rgba(255, 210, 122, 0.15);
  transform: translateY(-1px);
}

.intro__body {
  width: min(760px, 100%);
  margin: 56px auto 0;
}

.intro__body section {
  margin-bottom: 44px;
}

.intro__body h2 {
  font-family: 'Noto Serif KR', serif;
  font-size: 1.4rem;
  margin: 0 0 16px;
  color: #ffd27a;
}

.intro__body p {
  margin: 0 0 16px;
  line-height: 1.85;
  color: rgba(248, 243, 234, 0.88);
}

.intro__sources {
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.intro__sources h3 {
  font-size: 1rem;
  margin: 0 0 12px;
  color: rgba(248, 243, 234, 0.7);
}

.intro__sources ul {
  margin: 0;
  padding-left: 20px;
  color: rgba(248, 243, 234, 0.6);
  font-size: 0.85rem;
  line-height: 1.9;
}
</style>
