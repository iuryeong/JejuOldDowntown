<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const victims = [
  { region: '한림면', count: 1037 },
  { region: '애월면', count: 1579 },
  { region: '제주읍', count: 3969 },
  { region: '조천면', count: 1859 },
  { region: '구좌면', count: 915 },
  { region: '성산면', count: 471 },
  { region: '표선면', count: 696 },
  { region: '남원면', count: 965 },
  { region: '서귀면', count: 574 },
  { region: '중문면', count: 733 },
  { region: '안덕면', count: 679 },
  { region: '대정면', count: 622 },
]

function goToMap() {
  router.push({ name: 'fourthree-map' })
}
function goHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <main class="intro">
    <header class="intro__header">
      <button class="intro__back" @click="goHome">← 홈으로</button>
      <p class="intro__eyebrow">기억과 평화의 길</p>
      <h1>제주 4·3</h1>
      <p class="intro__lead">
        1947년 3월 1일 경찰의 발포에서 시작해 1954년 9월 21일 한라산 금족지역이 전면 개방될 때까지,
        제주 원도심 곳곳에는 그날의 흔적과 이름이 아직 남아 있습니다.
      </p>
      <button class="intro__map-btn" @click="goToMap">4·3 지도 보러가기 →</button>
    </header>

    <article class="intro__body">
      <section>
        <h2>4·3사건 개요</h2>
        <p>
          제주 4·3사건은 1947년 3월 1일 경찰의 발포사건을 기점으로, 경찰과 서북청년단의 탄압에 대한
          저항과 단선·단정 반대를 기치로 한 1948년 4월 3일 남로당 제주도당 무장대의 무장봉기를 거쳐
          1954년 9월 21일 한라산 금족지역이 전면 개방될 때까지 제주도에서 발생한 남로당 무장대와
          토벌대 간의 무력충돌, 그리고 토벌대의 진압 과정에서 다수의 주민들이 희생당한 사건입니다.
        </p>
      </section>

      <section>
        <h2>희생자</h2>
        <p>
          제주 전역에서 헤아릴 수 없이 많은 주민이 희생되었습니다. 아래는 지역별로 확인된 희생자
          수입니다.
        </p>
        <div class="victim-grid">
          <div v-for="v in victims" :key="v.region" class="victim-card">
            <span class="victim-card__region">{{ v.region }}</span>
            <span class="victim-card__count">{{ v.count.toLocaleString() }}명</span>
          </div>
        </div>
      </section>

      <section>
        <h2>기억해야 할 이름들</h2>
        <p>
          <strong>고(故) 오희춘 할머니</strong> — 제주 하효동 출신의 오희춘 할머니는 14세 때
          "육지에서 물질하게 해주겠다"는 말에 속아 지장을 찍었다가, 자신도 모르게 남로당 문서에
          가입되어 억울하게 10개월간 옥살이를 했습니다. 평생을 '처녀 징역살이'라는 낙인과 억울함
          속에 숨죽여 살던 할머니는, 70년이 지난 후에야 비로소 자식들에게 이 사실을 털어놓고 명예
          회복을 위한 재심 신청에 나섰습니다.
        </p>
        <p>
          <strong>고(故) 현창용 할아버지</strong> — 16세에 고문으로 내란죄 누명을 쓰고 5년형을
          살았던 현창용 할아버지는, 6·25 전쟁 중 인민군에 끌려갔다 돌아왔다는 이유로 다시 간첩으로
          몰려 20년간 억울한 옥살이를 했습니다. 연좌제로 딸의 취업까지 취소되는 고통 속에서도 재심
          운동에 앞장섰던 할아버지는, 마침내 무죄(공소기각) 판결을 받아낸 지 21일 만에 향년 87세로
          별세하셨습니다.
        </p>
        <p>
          <strong>고(故) 진아영 할머니(무명천 할머니)</strong> — 4·3 사건 당시 평범한 삶을 살던
          35세의 진아영 할머니는 1949년 1월 군경토벌대의 총격으로 아래턱을 완전히 잃었습니다.
          구사일생으로 목숨은 건졌으나, 이 비극적인 사건으로 인해 평생을 죽기보다 힘든 극심한 고통
          속에서 살아가게 되었습니다.
        </p>
      </section>

      <section>
        <h2>원도심 속 4·3의 흔적</h2>
        <p>
          <strong>주정공장 창고</strong> — 제주항 앞 주정공장 창고는 1949년 봄 귀순한 입산자들을
          감금하는 수용소로 사용되었으며, 수감된 청년들 대부분은 불법재판 후 타지역 형무소로
          이송되어 한국전쟁 직후 희생·행방불명되었습니다. 이곳은 원래 1934년 일제가 고구마를
          원료로 주정을 생산하기 위해 건설했으며, 현재는 고구마 슬라이드와 역사 표지석만 남아
          있습니다.
        </p>
        <p>
          <strong>서북청년단 사무실 터</strong> — 서북청년단은 북한 지역에서 공산정책을 피해 내려온
          사람들로, 강한 반공 감정을 가지고 있었습니다. 1947년 제주도본부가 결성되었으며, 이후
          제주에 내려온 단원들은 생계를 위해 각종 활동을 하다가 점차 경찰·행정·교육 분야로
          진출했습니다. 또한 비어 있던 건물을 강제로 접수해 사용하기도 했습니다.
        </p>
        <p>
          <strong>신보사 옛 터</strong> — 제주신보사는 해방 이후 제주도의 유일한 언론매체이자 전국
          최초의 지방신문으로, 4·3 이후 기자들이 탄압을 받았습니다. 특히 편집국장 김호진은 포고문
          인쇄 혐의로 1948년 총살되었고, 1949년에는 서북청년단이 신문사를 강제 접수해 발행에
          관여했습니다.
        </p>
        <p>
          <strong>제주 북초등학교</strong> — 1947년 제28주년 3·1절 기념대회가 열린 장소로, 약 3만
          명의 도민이 모였습니다. 기념식 후 관덕정 부근에서 기마경찰의 말에 아이가 다친 사건을
          계기로 군중과 경찰이 충돌했고, 경찰의 발포로 6명이 희생되었습니다. 이 사건은 이후 제주
          4·3의 중요한 발단이 되었습니다.
        </p>
        <p>
          <strong>제주 관덕정 광장</strong> — 관덕정 앞 광장은 제주 4·3 사건의 도화선이 된 '3·1절
          발포 사건'이 일어난 비극의 역사가 서린 곳입니다. 1947년 3월 1일 이곳에서 열린 3·1절
          기념식 후, 기마경찰의 말발굽에 어린아이가 치였음에도 경찰이 적절한 조치 없이 자리를
          떠나자 이에 항의하는 군중에게 경찰이 발포해 도민 6명이 사망하고 6명이 부상을 입었습니다.
        </p>
      </section>

      <section class="intro__sources">
        <h3>자료 출처</h3>
        <ul>
          <li>한국민족문화대백과사전, 〈제주4·3사건〉.</li>
          <li>제주4·3평화재단, 〈제주 4·3이란〉.</li>
          <li>한국일보, 박소영, 〈해녀모집에 찍은 지장, 4·3사건 70년 고통의 시작이었다〉, 2018.03.20.</li>
          <li>경향신문, 박미라, 〈4·3 억울한 옥살이 한 풀고…무죄 받자마자 현창용 할아버지 별세〉, 2019.02.10.</li>
          <li>제주일보, 홍의석, 〈(16) 총에 턱을 맞은 무명천 할머니…악몽이 그녀를 지배했다〉, 2018.08.12.</li>
        </ul>
      </section>
    </article>
  </main>
</template>

<style scoped>
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

.victim-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 20px;
}

.victim-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  background: rgba(8, 28, 29, 0.55);
  text-align: center;
}

.victim-card__region {
  font-size: 0.8rem;
  color: rgba(248, 243, 234, 0.65);
}

.victim-card__count {
  font-family: 'Noto Serif KR', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ff9f6c;
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
