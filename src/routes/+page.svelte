<script lang="ts">
  import portrait from '$assets/images/portrait1.png';
  import { css } from '$styled-system/css';
  import { center } from '$styled-system/patterns';
</script>

<svelte:head>
  <title>Resume of Bae Junehyeon</title>
</svelte:head>

<div
  class={center({
    backgroundColor: 'gray.50',
  })}
>
  <main
    class={css({
      marginY: '100px',
      borderWidth: '1px',
      borderRadius: '8px',
      paddingX: '50px',
      paddingY: '40px',
      width: 'fit',
      maxWidth: '800px',
      backgroundColor: 'white',
      wordBreak: 'keep-all',
    })}
  >
    <img class={css({ marginLeft: '20px', borderRadius: 'full', size: '25%', float: 'right' })} alt="portrait" src={portrait} />

    <h1 class={css({ fontSize: '40px', fontWeight: 'extrabold' })}>배준현</h1>
    <h2 class={css({ fontSize: '20px', fontWeight: 'semibold' })}>Product Engineer</h2>

    <p class={css({ marginTop: '20px', fontSize: '16px', fontWeight: 'medium' })}>
      초등학교 4학년이던 2006년, JavaScript 코드로 이루어진 쥬니어네이버 동물농장 게임 치트를 주소창에 복사 붙여넣기하다가 동작 원리에
      흥미가 생겨 개발을 시작했습니다. 학창시절 중 수많은 토이 프로젝트로 다양한 언어와 플랫폼을 경험했고, 그 경험을 통해 21살이던 2016년
      작은 게임 회사에서 개발자로서의 커리어를 시작했습니다.
    </p>

    <p class={css({ marginTop: '8px', fontSize: '16px', fontWeight: 'medium' })}>
      게임, 콘텐츠, 블록체인, 커머스, SaaS 등 다양한 도메인에서 그때 그때 PHP, 파이썬, 코틀린, 타입스크립트 등을 사용하며 소프트웨어
      엔지니어, DevOps 엔지니어, 프로덕트 엔지니어, CTO 등의 다양한 직함으로 불려왔지만, 도메인과 직함, 언어에 관계 없이 언제나 이용자에게
      가치를 전달하는 역할이라는 본질에 집중하고자 노력했습니다.
    </p>

    <p class={css({ marginTop: '8px', fontSize: '16px', fontWeight: 'medium' })}>
      그 과정에서 2번의 창업을 경험했고, 두 창업 모두에서 개발 리드로서의 역할 뿐만 아니라 회사와 프로덕트의 모든 생명 주기에 관여하며
      시장에 존재하는 문제를 해결하고 가치를 창출하는 경험을 했습니다. 이 과정에서 기술만으로 해결되는 문제는 생각보다 적으며, 대부분의
      문제는 사람 사이의 연결과 갈등 해결에 달려 있음을 깨달았습니다.
    </p>

    <p class={css({ marginTop: '8px', fontSize: '16px', fontWeight: 'medium' })}>
      기술적으로 완벽한 해결을 추구하기보단 문제를 해결하는 데 필요한 최소한의 기술로 최대한의 가치를 창출하는 것을 중요시합니다. 완벽한
      설계와 완벽한 구현이 모든 문제를 마법같이 해결하지 않는다는 것을 이해하고 있으며, 모든 상황에서의 올바른 답이란 존재하지 않되 각
      상황에서의 최선의 답만이 존재한다는 것을 이해하고 주어진 상황에서 최선의 답을 찾고자 노력합니다.
    </p>

    <p class={css({ marginTop: '8px', fontSize: '16px', fontWeight: 'medium' })}>
      저와 지향점이 일치하는, 특정 기술, 제품 중심이 아닌 가치 중심의 사람과 조직을 찾고 있습니다. 단순 커피챗부터 채용, 창업 및 인수
      제안까지 모두 열려있습니다. 아래 연락처로 연락 주시면 감사하겠습니다.
    </p>

    <section class={css({ marginTop: '32px' })}>
      <ul class={css({ listStylePosition: 'inside', listStyleType: 'disc', paddingLeft: '20px' })}>
        <li>이메일: devunt@gmail.com</li>
        <li>전화번호: 010-9617-5235</li>
        <li>
          링크:
          <a class={css({ color: 'gray.500', textDecoration: 'underline', textUnderlineOffset: '2px' })} href="https://github.com/devunt">
            GitHub
          </a>
          /
          <a
            class={css({ color: 'gray.500', textDecoration: 'underline', textUnderlineOffset: '2px' })}
            href="https://www.linkedin.com/in/devunt"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>

    <section class={css({ marginTop: '32px' })}>
      <h2 class={css({ fontSize: '24px', fontWeight: 'extrabold' })}>관심사</h2>

      <div class={css({ marginTop: '12px' })}>
        <h3 class={css({ fontSize: '20px', fontWeight: 'bold' })}>스타트업 운영과 성장, 의사 결정</h3>

        <p class={css({ marginTop: '2px', fontSize: '16px', fontWeight: 'medium' })}>
          두번의 창업에서 기술 책임자 및 의사 결정권자로서 상황에 맞는 최적의 기술적, 비즈니스적 결정을 내리고 실행했습니다. 프로덕트의
          아이디어 단계부터 시작해 출시 및 성장까지 모든 과정에 깊게 관여했으며, 특히 첫번째 창업에서는 외부 투자 없이 1년여만에 조직이
          8명까지 성장하고, 월 매출 10억원 이상을 달성하기까지 함께했습니다. 현재는 두번째 창업에서 2명의 팀원과 함께 새로운 시도를 하고
          있습니다.
        </p>
      </div>

      <div class={css({ marginTop: '12px' })}>
        <h3 class={css({ fontSize: '20px', fontWeight: 'bold' })}>대규모 인프라 운영과 비용 최적화</h3>

        <p class={css({ marginTop: '2px', fontSize: '16px', fontWeight: 'medium' })}>...</p>
      </div>

      <div class={css({ marginTop: '12px' })}>
        <h3 class={css({ fontSize: '20px', fontWeight: 'bold' })}>동시 편집 가능한 위지윅 에디터</h3>

        <p class={css({ marginTop: '2px', fontSize: '16px', fontWeight: 'medium' })}>
          두번의 서비스에서 ProseMirror 및 TipTap 기반의 위지윅 에디터를 개발했습니다. 두 서비스 모두 Y.js를 이용한 CRDT 기반의 동시 편집을
          구현했으며, 정적인 콘텐츠 뿐만 아니라 이미지, 외부 콘텐츠 임베드, 동적 스크립트 등 기존 JS 생태계 코드와 호환이 가능하도록
          설계했습니다. 특히 JS 기반의 웹과 Flutter 기반의 앱에서 웹뷰로 인한 성능 하락 없이 동일한 사용자 경험을 제공하기 위해 ProseMirror
          Flutter 네이티브 렌더러 바인딩을 직접 개발하기도 했습니다.
        </p>
      </div>
    </section>

    <hr class={css({ marginY: '32px', height: '1px', backgroundColor: 'gray.200' })} />

    <div class="old-content">
      <section>
        <h1>이력</h1>
        <div class="exp">
          <div class="date">2023.08-</div>
          <h2>펜슬컴퍼니 PENXLE COMPANY</h2>
          <div class="exp">
            <div class="date">2023.08-</div>
            <h3>프로덕트 엔지니어 / CEO</h3>
            <p>
              주식회사 펜슬컴퍼니를 창업
              <br />
              프로덕트 엔지니어이자 CEO로서 전체 코드와 인프라를 구축하고 운영하는 등 DevOps 업무
              <br />
              회사 전체의 기획, 디자인, 개발, 운영, 마케팅, CS, HR 등 모든 과정에 깊게 관여
            </p>
            <ul>
              <li>
                Airtake 서비스 프론트엔드 및 백엔드 개발
                <span class="skill">TypeScript</span>
                <span class="skill">SvelteKit</span>
                <span class="skill">GraphQL</span>
                <span class="skill">ClickHouse</span>
              </li>
              <li>
                Glyph 및 Readable 서비스 에디터 개발
                <span class="skill">TypeScript</span>
                <span class="skill">SvelteKit</span>
                <span class="skill">Tiptap</span>
              </li>
              <li>
                Glyph 및 Readable 서비스 프론트엔드 및 백엔드 개발
                <span class="skill">TypeScript</span>
                <span class="skill">SvelteKit</span>
                <span class="skill">GraphQL</span>
              </li>
              <li>
                사내에 필요한 각종 툴링 및 라이브러리 개발
                <span class="skill">TypeScript</span>
                <span class="skill">Vite</span>
                <span class="skill">SvelteKit</span>
              </li>
              <li>
                회사 전체 AWS 및 쿠버네티스 인프라 운영 및 관리, 장애 대응
                <span class="skill">AWS</span>
                <span class="skill">Kubernetes</span>
                <span class="skill">Datadog</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="exp">
          <div class="date">2022.01-2023.07</div>
          <h2>쿠키플레이스 COOKIEPLACE</h2>
          <div class="exp">
            <div class="date">2022.01-2023.07</div>
            <h3>CTO</h3>
            <p>
              커미션 중개 서비스 CREPE를 운영하는 주식회사 쿠키플레이스를 창업
              <br />
              파운더이자 CTO로서 전체 코드와 인프라를 구축하고 운영하는 등 DevOps 업무
              <br />
              회사 전체의 기획, 디자인, 개발, 운영, 마케팅, CS, HR 등 모든 과정에 깊게 관여
            </p>
            <ul>
              <li>
                CREPE 서비스 초기 백엔드 전체 개발
                <span class="skill">Python</span>
                <span class="skill">Django</span>
                <span class="skill">GraphQL</span>
              </li>
              <li>
                CREPE 서비스 초기 프론트엔드 전체 개발
                <span class="skill">TypeScript</span>
                <span class="skill">React</span>
                <span class="skill">Next.js</span>
                <span class="skill">GraphQL</span>
              </li>
              <li>
                CREPE 서비스 현재 백엔드 전체 재작성
                <span class="skill">TypeScript</span>
                <span class="skill">GraphQL</span>
              </li>
              <li>
                CREPE 서비스 현재 프론트엔드 전체 재작성
                <span class="skill">TypeScript</span>
                <span class="skill">React</span>
                <span class="skill">GraphQL</span>
                <span class="skill">Relay</span>
              </li>
              <li>
                실시간 이미지 최적화 및 캐싱 서비스 개발
                <span class="skill">TypeScript</span>
                <span class="skill">AWS Lambda</span>
              </li>
              <li>
                회사 전체 AWS 및 쿠버네티스 인프라 운영 및 관리, 장애 대응
                <span class="skill">AWS</span>
                <span class="skill">Cloudflare</span>
                <span class="skill">Kubernetes</span>
                <span class="skill">Datadog</span>
              </li>
              <li>
                전체 서비스 기획 및 디자인, 전략 수립
                <span class="skill">Notion</span>
                <span class="skill">Figma</span>
              </li>
              <li>
                사내 주니어 교육 및 코드 리뷰, 페어 프로그래밍
                <span class="skill">GitHub</span>
              </li>
              <li>
                관, 행, 파트너사들과의 각종 계약 및 협의, 연동 개발
                <span class="skill">Legal</span>
              </li>
              <li>
                트위터 등 SNS등을 이용한 마케팅 및 홍보
                <span class="skill">SNS</span>
              </li>
              <li>
                카카오톡 및 채널톡 등을 이용한 CS 응대
                <span class="skill">CS</span>
              </li>
              <li>
                개발자, 기획자, 디자이너, CS 등 전체 직군 채용 및 검증
                <span class="skill">HR</span>
              </li>
              <li>
                데이터베이스, 로그, 이벤트 등 데이터 분석 및 데이터 엔지니어링
                <span class="skill">Mixpanel</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="exp">
          <div class="date">2021.06-2022.07</div>
          <h2>두나무 DUNAMU</h2>
          <div class="exp">
            <div class="date">2022.06-2022.07</div>
            <h3>업비트 플랫폼팀</h3>
            <p>
              두나무의 전체 인프라를 운영, 관리하는 등 DevOps 업무
              <br />
              두나무의 업비트 및 증권플러스 등 관련 서비스의 백엔드를 개발, 운영하는 등 DevOps 업무
            </p>
            <ul>
              <li>
                회사 전체 AWS 및 쿠버네티스 인프라 운영 및 관리, 장애 대응
                <span class="skill">AWS</span>
                <span class="skill">Kubernetes</span>
              </li>
              <li>
                국내/해외 은행 입출금 연동 MSA 개발
                <span class="skill">Python</span>
                <span class="skill">Django</span>
              </li>
              <li>
                카카오톡, PASS 등 본인인증 연동 서비스 개발
                <span class="skill">Kotlin</span>
                <span class="skill">Spring Boot</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="exp">
          <div class="date">2020.04-2020.11</div>
          <h2>리디 RIDI</h2>
          <div class="exp">
            <div class="date">2020.04-2020.11</div>
            <h3>콘텐츠서비스그룹 개발센터 계정팀</h3>
            <p>리디북스 서비스의 백엔드를 개발, 운영하는 등 DevOps 업무</p>
            <ul>
              <li>
                SSO 계정 인증 및 사내 서비스/서버간 인증 서버 개발 <span class="skill">Python</span>
                <span class="skill">Django</span>
              </li>
              <li>
                구매목록, 책장 등 내서재 서비스 개발 <span class="skill">Python</span>
                <span class="skill">Django</span>
              </li>
              <li>
                독서노트, 리뷰, 댓글 등 API 개발 <span class="skill">Kotlin</span>
                <span class="skill">Spring Boot</span>
              </li>
              <li>
                내부 운영 및 관리툴, 인트라넷 개발 <span class="skill">Python</span>
                <span class="skill">Django</span>
                <span class="skill">PHP</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="exp">
          <div class="date">2016.11-2020.04</div>
          <h2>라인게임즈 LINE GAMES (前 넥스트플로어 NextFloor)</h2>
          <div class="exp">
            <div class="date">2017.05-2020.04</div>
            <h3>개발지원실 SDK개발팀</h3>
            <p>
              게임 퍼블리싱 조직의 SDK개발팀에서 자사 출시 게임용 SDK를 개발, 배포하는 업무
              <br />
              사내 및 협력 개발사의 개발팀을 대상으로 SDK 사용상의 기술적 대응을 하는 업무
              <br />
            </p>
            <ul>
              <li>
                게임 서버 프레임워크 개발 및 최적화 <span class="skill">PHP</span>
              </li>
              <li>
                Unity 게임 클라이언트용 SDK 개발 <span class="skill">C#</span>
                <span class="skill">Unity</span>
              </li>
              <li>
                사내 인트라넷 서비스 개발 <span class="skill">Python</span>
                <span class="skill">Django</span>
                <span class="skill">Flask</span>
                <span class="skill">AWS Cognito</span>
              </li>
              <li>
                게임에 필요한 서비스들을 API 서버로 개발 <span class="skill">PHP</span>
              </li>
              <li>
                테스트 및 배포 자동화 시스템 구축 <span class="skill">GitLab CI</span>
                <span class="skill">Jenkins</span>
              </li>
            </ul>
          </div>
          <div class="exp">
            <div class="date">2016.11-2017.05</div>
            <h3>모바일 CCG 게임 "데스티니 차일드" 개발팀</h3>
            <p>
              출시 직후의 게임 개발팀에서 추가 컨텐츠 및 신규 이벤트 등을 개발, 라이브 패치하는 업무
              <br />
              시즌제 레이드, 가챠 등의 컨텐츠를 SHIFTUP과 공동 개발
              <br />
            </p>
            <ul>
              <li>
                인하우스 엔진 게임 클라이언트 로직 개발 <span class="skill">Lua</span>
              </li>
              <li>
                게임 서버 로직 개발 <span class="skill">PHP</span>
              </li>
              <li>
                내부 개발툴 개발 <span class="skill">C#</span>
                <span class="skill">WinForm</span>
              </li>
              <li>
                Git 도입 및 기존 SVN 서버와 같이 쓸 수 있도록 브릿지 구성 <span class="skill">Python</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="exp">
          <div class="date">2016.07-2016.11</div>
          <h2>모빌팩토리 MOBILFACTORY</h2>
          <div class="exp">
            <div class="date">2016.07-2016.11</div>
            <h3>모바일 SNG 게임 "마이리틀팜", "숲속농장" 개발팀</h3>
            <p>출시 2년차의 개발팀에서 게임 개발 및 라이브 운영 등 전체적인 개발과 DevOps를 진행하는 업무</p>
            <ul>
              <li>
                Unity 게임 클라이언트 개발 <span class="skill">C#</span>
                <span class="skill">Unity</span>
              </li>
              <li>
                게임 서버 개발 <span class="skill">C#</span>
                <span class="skill">ASP.NET MVC</span>
              </li>
              <li>
                게임 운영툴 개발 <span class="skill">C#</span>
                <span class="skill">ASP.NET MVC</span>
                <span class="skill">HTML</span>
              </li>
              <li>
                인프라 자동화 구축 및 운영 <span class="skill">AWS Elastic Beanstalk</span>
                <span class="skill">AWS DynamoDB</span>
              </li>
              <li>
                게임 로그 추출 및 지표 분석 <span class="skill">AWS EMR</span>
                <span class="skill">Apache Spark</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h1>기타 활동</h1>
        <div class="exp">
          <div class="date">2012-</div>
          <h3>오징어 IRC 네트워크</h3>
          <p>IRC 네트워크 운영 및 오픈소스 서버 소프트웨어 개발</p>
          <ul>
            <li>
              오픈소스 IRC 서비스봇 ika 신규 개발 <span class="skill">C++</span>
              <span class="skill">Python</span>
              <span class="skill">Kotlin</span>
            </li>
            <li>
              이용자들의 쉬운 봇 개발을 위해 REST API와 웹소켓 API 서버를 개발 <span class="skill">Python</span>
              <span class="skill">Django</span>
            </li>
          </ul>
        </div>
        <div class="exp">
          <div class="date">2012-2013</div>
          <h3>SW Maestro</h3>
          <p>과학기술정보통신부 산하 SW Maestro 3기 과정</p>
          <ul>
            <li>
              배포형 클라우드 제어 인터페이스 개발 <span class="skill">OpenStack</span>
            </li>
          </ul>
        </div>
        <div class="exp">
          <div class="date">2010-</div>
          <h3>위키미디어 재단</h3>
          <p>오픈소스 PHP 위키 소프트웨어 "미디어위키" 개발</p>
          <ul>
            <li>
              미디어위키 코어 및 확장기능의 기능 추가 및 버그 수정 <span class="skill">PHP</span>
            </li>
            <li>
              리뷰어 자격으로 다른 참여자들의 코드를 리뷰 및 머지 <span class="skill">Gerrit</span>
            </li>
            <li>
              미디어위키 소프트웨어의 한글 번역 작업에 기여 <span class="skill">English</span>
            </li>
            <li>
              현재 한국어 위키백과에서 조사 후처리를 위해 이용되고 있는 Josa 확장 기능 개발 <span class="skill">PHP</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h1>오픈소스 활동</h1>
        <div class="exp">
          <h3>make-gis-great-again</h3>
          <span class="skill">JS</span>
          <span class="skill">WebExtension</span>
          <span class="skill">☆ 770</span>
          <p>
            구글 이미지 검색에서 어느날 사라진 "이미지 보기" 버튼을 되돌리는 브라우져 확장기능
            <br />
            -
            <a href="https://github.com/devunt/make-gis-great-again" rel="noopener noreferrer" target="_blank">
              https://github.com/devunt/make-gis-great-again
            </a>
          </p>
        </div>
        <div class="exp">
          <h3>10th-amendment</h3>
          <span class="skill">Python</span>
          <span class="skill">☆ 130</span>
          <p>
            2018년 제10차 개헌의 문재인 대통령 개헌안과 기존 헌법 비교 페이지
            <br />
            -
            <a href="https://github.com/devunt/10th-amendment" rel="noopener noreferrer" target="_blank">
              https://github.com/devunt/10th-amendment
            </a>
          </p>
        </div>
        <div class="exp">
          <h3>warp</h3>
          <span class="skill">Python</span>
          <span class="skill">networking</span>
          <span class="skill">☆ 90</span>
          <p>
            패킷 조작을 통해 해외 프록시 없이 국내 불법 사이트 차단 장비를 우회 가능한 로컬 투명 프록시
            <br />
            -
            <a href="https://github.com/devunt/warp" rel="noopener noreferrer" target="_blank">https://github.com/devunt/warp</a>
          </p>
        </div>
        <div class="exp">
          <h3>DFAssist</h3>
          <span class="skill">C#</span>
          <span class="skill">reversing</span>
          <span class="skill">networking</span>
          <span class="skill">☆ 40</span>
          <p>
            게임 패킷을 스니핑해 얻은 숨겨진 정보를 통해 게임플레이를 돕는 오버레이 유틸
            <br />
            -
            <a href="https://github.com/devunt/DFAssist" rel="noopener noreferrer" target="_blank">https://github.com/devunt/DFAssist</a>
          </p>
        </div>
        <div class="exp">
          <h3>PassiveX</h3>
          <span class="skill">C#</span>
          <span class="skill">reversing</span>
          <span class="skill">☆ 30</span>
          <p>
            각종 금융기관 ActiveX의 응답을 에뮬레이팅해 실제 설치 없이 금융 사이트 이용을 가능하게 해보려던 시도
            <br />
            -
            <a href="https://github.com/devunt/PassiveX" rel="noopener noreferrer" target="_blank">https://github.com/devunt/PassiveX</a>
          </p>
        </div>
      </section>

      <section>
        <h1>발표</h1>
        <div class="exp">
          <div class="date">2017.08</div>
          <h3>PyCon Korea 2017에서 "얼렁뚱땅 파이썬 대소동" 세션 발표</h3>
          <p>파이썬에서 유용하게 이용할 수 있는 여러가지 흑마법들을 다룸 (150명 규모)</p>
        </div>

        <div class="exp">
          <div class="date">2015.08</div>
          <h3>PyCon Korea 2015에서 "파이썬 메모리 이모저모" 세션 발표</h3>
          <p>파이썬의 내부 메모리 저장 구조와 GC 등이 어떤 원리로 동작하는지 다룸 (400명 규모)</p>
        </div>

        <div class="exp">
          <div class="date">2014.08</div>
          <h3>PyCon Korea 2014에서 "Python 3.4: AsyncIO" 세션 발표</h3>
          <p>파이썬 3.4에서 새롭게 추가된 asyncio 모듈을 이용한 비동기 프로그래밍과 코루틴에 대해 다룸 (200명 규모)</p>
        </div>
      </section>

      <section>
        <h1>수상</h1>
        <div class="exp">
          <div class="date">2009</div>
          한국정보올림피아드 공모부문 중등부 전국 대상 (정보통신부 장관상)
          <span class="skill">C#</span>
          <span class="skill">WinForm</span>
        </div>

        <div class="exp">
          <div class="date">2008</div>
          한국정보올림피아드 공모부문 초등부 서울특별시 금상
          <span class="skill">C#</span>
          <span class="skill">WinForm</span>
        </div>
      </section>

      <section>
        <h1>자격증</h1>
        <div class="exp">
          <div class="date">2014</div>
          정보처리기능사
        </div>
      </section>

      <section>
        <h1>학력</h1>
        <div class="date">2012.03-2015.01</div>
        한국디지털미디어고등학교 졸업
      </section>

      <section>
        <h1>병역</h1>
        <div class="date">2018.01.04-2020.11.03</div>
        현역 산업기능요원 복무 완료
      </section>
    </div>
  </main>
</div>

<style>
  .old-content {
    section {
      margin: 0 auto 5em auto;
    }

    h1,
    h2,
    h3 {
      display: inline-block;

      margin-top: 0;
    }

    h1 {
      padding-bottom: 0.3em;
      margin-bottom: 1em;
      border-bottom: 2px solid #333;

      font-size: 1.2rem;
      font-weight: 900;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    h3 {
      margin-bottom: 0.7em;

      font-size: 1rem;
      font-weight: 700;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
    }

    ul {
      margin-bottom: 0;
      list-style-type: disc;
      list-style-position: inside;
    }

    li {
      font-size: 0.95rem;

      & + & {
        margin-top: 0.5em;
      }
    }

    a {
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .date {
      margin-bottom: 0.3em;

      font-size: 0.9rem;
      color: #888;
    }

    .exp {
      padding-left: 1.5em;
      border-left: 1px solid #ccc;
      padding-bottom: 0.2em;

      & + & {
        margin-top: 2em;
      }
    }

    .skill {
      margin-left: 0.1em;
      padding: 0.2em 0.4em;

      border: 1px solid #ccc;
      border-radius: 5px;

      font-size: 0.65rem;
      vertical-align: middle;
    }
  }
</style>
