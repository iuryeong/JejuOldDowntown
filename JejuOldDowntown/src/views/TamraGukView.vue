<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tamragukVideo from '@/assets/image/tamraguk/tamraguk.mp4'

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
  router.push({ name: 'tamraguk-map' })
}
function goHome() {
  router.push({ name: 'home' })
}
</script>

<template>
  <main v-if="!introStarted" class="video-stage">
    <button class="video-stage__back" @click="goHome">← 홈으로</button>
    <video
      :src="tamragukVideo"
      class="video-stage__video"
      autoplay
      controls
      playsinline
      @ended="onVideoEnded"
    ></video>
    <button v-if="videoEnded" class="video-stage__start-btn" @click="startIntro">
      탐라국 이야기 시작하기
    </button>
  </main>

  <main v-else class="intro">
    <header class="intro__header">
      <button class="intro__back" @click="goHome">← 홈으로</button>
      <p class="intro__eyebrow">제주 원도심의 시작</p>
      <h1>탐라국</h1>
      <p class="intro__lead">
        관덕정 건물 바로 뒤편, 옛 제주시청 부지 일대는 사실 천 년 전 탐라국 왕들이 살았던 궁궐터였습니다.
      </p>
      <button class="intro__map-btn" @click="goToMap">탐라국 지도 보러가기 →</button>
    </header>

    <article class="intro__body">
      <section>
        <h2>관덕정 뒤에 숨겨진 천 년의 왕궁 이야기</h2>
        <p>
          오늘날의 제주시는 단순히 관광지로 치부되지만, 현재의 관덕정과 목관아, 옛 제주시청 부지 일대는
          천 년 이상 제주의 정치적 중심지로 역할해온 곳입니다. 기원전부터 고려에 편입되기까지 천 년간
          존재했던 독립적인 국가 탐라. 기록의 부족으로 왕궁이 정확히 어디에 있었는지는 오랫동안 밝혀지지
          않았지만, 고고학자들이 제주 원도심에서 여러 차례 발굴조사를 실시한 결과 관덕정 뒷편과 옛
          제주시청 부지에서 탐라국 시대의 중요한 유적들이 확인되었습니다.
        </p>
      </section>

      <section>
        <h2>궁궐터 추정의 근거</h2>
        <p>
          주변 일반 주택보다 큰 규모의 건물터가 확인되었고, 많은 기둥을 세워야 하는 대형 건축물로
          백성의 건물보다 국가적인 시설일 가능성이 높습니다. 건물을 지탱하기 위한 돌을 층층이 쌓은
          석축은 당시 많은 인력과 기술이 필요한 공사였기에 중요 공공시설이나 왕국에서 사용되었습니다.
          일반 민가는 초가집이었기에 사용이 제한적이었던 기와 또한 발견되어, 왕국이나 관청 등 중요
          시설로 추정됩니다. 토기와 생활유물 같은 일상 용품이 함께 발굴되어, 단순한 제사공간이 아니라
          실제 국가 운영이 이루어지던 장소였음을 보여줍니다.
        </p>
      </section>

      <section>
        <h2>탐라국 이후에도 이어진 정치의 중심지</h2>
        <p>
          고려가 탐라를 편입한 이후에도 이곳은 정치의 중심이었습니다. 왕궁, 성주청, 제주목관아를 거쳐
          현재의 관덕정과 원도심으로 이어졌습니다. 제주 중심부에 위치해 이동이 편리했고, 주변보다
          지형이 안정적이며 넓은 공간을 확보하기 편했습니다. 이미 행정시설이 있었기에 같은 장소를
          계속 사용하는 것이 효율적이었습니다.
        </p>
      </section>

      <section>
        <h2>바다를 지배한 해상 왕국, 탐라의 국제 교역</h2>
        <p>
          제주 원도심의 산지천 하류와 건입동 일대는 오늘날 제주항으로 매립되어 있지만, 고대 탐라국
          시절에는 자연이 선사한 최고의 국제 무역항이었습니다. '건들개'와 '금산'이라 불리는 거대한
          화산 암벽이 병풍처럼 솟아 거센 북서풍과 태풍을 막아주는 천연 방파제 역할을 했고, 깊은 수심
          덕분에 외해에서 진입하는 대형 무역선이 안전하게 정박할 수 있었습니다.
        </p>
        <p>
          1928년 산지항 방파제 축조용 석재 채취 과정에서는 중국 왕망 시대의 화천, 대천오십, 화포를
          비롯해 전한 시대의 오주전과 구리거울 조각 수천 점이 발견되었습니다. 이는 기원전 1세기 무렵
          탐라국이 이미 동아시아 해상 무역로의 핵심 기지이자 주체적인 교역국이었음을 보여줍니다.
        </p>
        <p>
          《고려사》에는 "탐라국의 배는 그 제도가 견고하여 비록 거친 풍랑을 만나더라도 파괴되는 데
          이르지 않는다"고 기록될 만큼, 탐라 사람들은 독특하고 튼튼한 선박 제조 기술을 발전시켰습니다.
          이 배를 타고 수출한 제주의 특산품 '야광패(밤빛조개)'는 일본 왕실 보물창고 정창원의 나전칠기
          제품에 쓰였을 정도로 고대 동아시아 왕실과 귀족층 사이에서 최고의 사치품으로 통했습니다.
        </p>
        <p>
          665년, 당나라 고종이 태산에서 봉선제를 행할 때 탐라국 왕은 사신을 보내 신라·백제·왜국의
          사신과 나란히 행례에 참여했습니다. 《구당서》에 남은 이 기록은 탐라국이 중국 중심의 천하
          질서 속에서도 당당한 독립 주권 국가로서 대외적 위상을 지녔음을 보여줍니다.
        </p>
      </section>

      <section>
        <h2>탐라의 봄을 깨우는 맥박, 입춘굿</h2>
        <p>
          고대 탐라국 시절에는 매년 입춘날, 국왕(성주)이 직접 백성들 앞에 나서 한 해의 풍년을
          기원하는 의례를 주도했습니다. 왕이 몸소 관덕정 광장으로 나와 나무로 만든 소 '낭쉐'를 이끌고
          밭을 가는 시범을 보이는 '친경적전' 의식은, 왕과 백성이 하나의 공간에서 소통하며 새해의
          생산력을 다짐하는 국가적 축제이자 정치적 선언이었습니다.
        </p>
        <p>
          입춘굿은 제주의 세시풍속 '신구간' 신화와도 이어집니다. 모든 신들이 임무를 교대하기 위해
          하늘로 올라간 뒤, 새해를 맞아 내려오는 1만 8천 신들의 첫 정착지가 바로 관덕정 앞 광장이라고
          여겨졌습니다. 백성들은 큰 굿을 열어 신들을 환대하고 한 해의 무사안녕을 빌었습니다.
        </p>
        <p>
          입춘굿이 정점에 달하면 관원, 귀족, 백성, 노비 할 것 없이 모두 독특한 탈을 쓰고 어우러져
          춤을 추고 술을 나누었습니다. 엄격한 신분 질서를 허무는 이 거대한 카니발은, 집단적 스트레스를
          해소하고 공동체의 결속력을 다지는 고대 탐라국 특유의 역동적이고 민주적인 광장 문화를
          보여줍니다.
        </p>
      </section>

      <section class="intro__sources">
        <h3>사료·자료 출처</h3>
        <ul>
          <li>《고려사(高麗史)》 권79, 식화지 주선(舟船) 조.</li>
          <li>《구당서(舊唐書)》 권199, 동이열전 탐라국(耽羅國) 조.</li>
          <li>이원조(李源祚), 《탐라록(耽羅錄)》, 입춘조(立春條).</li>
          <li>제주학연구센터, 《제주 원도심 역사문화자원 조사보고서》, 2019.</li>
          <li>국립제주박물관, 《탐라: 그 잊혀진 왕국의 흔적》 발굴조사 종합보고서, 2001.</li>
          <li>문화재청, 《한국의 나전칠기와 해양 교역사 연구》, 2015.</li>
          <li>제주학연구센터, 《탐라국입춘굿의 역사와 무속의례 연구》, 2021.</li>
          <li>제주특별자치도·제주문화예술재단, 《제주무속문화 종합조사 보고서》, 2017.</li>
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
  padding: clamp(32px, 6vw, 72px) clamp(20px, 6vw, 0) 96px;
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
