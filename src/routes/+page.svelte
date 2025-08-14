<script lang="ts">
  import portrait from '$assets/images/portrait1.png';
  import { css } from '$styled-system/css';
  import { center, flex } from '$styled-system/patterns';
  import Experience from './Experience.svelte';
  import Item from './Item.svelte';
  import Section from './Section.svelte';
</script>

<svelte:head>
  <title>Resume of Bae Junehyeon</title>
</svelte:head>

<div
  class={center({
    flexDirection: 'column',
    backgroundColor: 'gray.50',
    paddingX: '20px',
    paddingY: '10vh',
  })}
>
  <main
    class={css({
      borderWidth: '1px',
      borderRadius: '8px',
      paddingX: '50px',
      paddingY: '40px',
      width: 'full',
      maxWidth: '800px',
      backgroundColor: 'white',
      wordBreak: 'keep-all',
    })}
  >
    <img
      class={css({ marginLeft: '20px', marginBottom: '20px', borderRadius: 'full', size: '25%', float: 'right' })}
      alt="portrait"
      src={portrait}
    />

    <h1 class={css({ fontSize: '40px', fontWeight: 'extrabold' })}>배준현</h1>
    <h2 class={css({ fontSize: '20px', fontWeight: 'semibold' })}>Product Engineer</h2>

    <p class={css({ marginTop: '20px', fontSize: '16px', fontWeight: 'medium' })}>
      초등학교 4학년이던 2006년, JavaScript 코드로 이루어진 쥬니어네이버 동물농장 게임 치트를 주소창에 붙여넣다가 동작 원리에 흥미가 생겨
      개발을 시작했습니다. 학창시절 중 수많은 토이 프로젝트로 다양한 언어와 플랫폼을 경험했고, 그 경험을 통해 21살이던 2016년 작은 게임
      회사에서 개발자로서의 커리어를 시작했습니다.
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

      <div class={css({ marginTop: '16px' })}>
        <h3 class={css({ fontSize: '20px', fontWeight: 'bold' })}>스타트업 운영과 성장, 의사 결정</h3>

        <p class={css({ marginTop: '2px', fontSize: '16px', fontWeight: 'medium' })}>
          두번의 창업에서 기술 책임자 및 의사 결정권자로서 상황에 맞는 최적의 기술적, 비즈니스적 결정을 내리고 실행했습니다. 프로덕트의
          아이디어 단계부터 시작해 출시 및 성장까지 모든 과정에 깊게 관여했으며, 특히 첫번째 창업에서는 외부 투자 없이 1년여만에 조직이
          8명까지 성장하고, 월 매출 10억원 이상을 달성하기까지 함께했습니다. 현재는 두번째 창업에서 2명의 팀원과 함께 새로운 시도를 하고
          있습니다.
        </p>
      </div>

      <div class={css({ marginTop: '16px' })}>
        <h3 class={css({ fontSize: '20px', fontWeight: 'bold' })}>대규모 인프라 운영과 비용 최적화</h3>

        <p class={css({ marginTop: '2px', fontSize: '16px', fontWeight: 'medium' })}>
          다양한 도메인에서 소프트웨어 엔지니어 및 DevOps 엔지니어로서 인프라를 운영하고 평시 운영 비용을 최적화하는 경험을 했습니다. 다양한
          트래픽 패턴과 상황에 맞는 최적의 인프라 아키텍쳐를 설계, 운영하고 비용 예측을 통해 예산을 수립할 수 있습니다.
        </p>
      </div>

      <div class={css({ marginTop: '16px' })}>
        <h3 class={css({ fontSize: '20px', fontWeight: 'bold' })}>동시 편집 가능한 위지윅 에디터</h3>

        <p class={css({ marginTop: '2px', fontSize: '16px', fontWeight: 'medium' })}>
          세번의 서비스에서 ProseMirror 및 Tiptap 기반의 위지윅 에디터를 개발했습니다. 세 서비스 모두 Y.js를 이용한 CRDT 기반의 동시 편집을
          구현했으며, 정적인 콘텐츠 뿐만 아니라 이미지, 외부 콘텐츠 임베드, 동적 스크립트 등 기존 JS 생태계 코드와 호환이 가능하도록
          설계했습니다. 특히 JS 기반의 웹과 Flutter 기반의 앱에서 웹뷰로 인한 성능 하락 없이 동일한 사용자 경험을 제공하기 위해 ProseMirror
          Flutter 네이티브 렌더러 바인딩을 직접 개발하기도 했습니다.
        </p>
      </div>
    </section>

    <hr class={css({ marginY: '32px', height: '1px', backgroundColor: 'gray.200' })} />

    <div class={flex({ flexDirection: 'column', gap: '80px' })}>
      <Section title="이력">
        <Experience date="2023.08-" title="펜슬컴퍼니 PENXLE COMPANY">
          <Experience date="2023.08-" title="프로덕트 엔지니어 / CEO">
            {#snippet description()}
              주식회사 펜슬컴퍼니를 창업
              <br />
              프로덕트 엔지니어이자 CEO로서 전체 코드와 인프라를 구축하고 운영하는 등 DevOps 업무
              <br />
              회사 전체의 기획, 디자인, 개발, 운영, 마케팅, CS, HR 등 모든 과정에 깊게 관여
            {/snippet}

            <Item content="타이피 에디터 개발" skills={['TypeScript', 'SvelteKit', 'Tiptap']} />
            <Item content="타이피 프론트엔드 및 백엔드 개발" skills={['TypeScript', 'SvelteKit', 'GraphQL']} />
            <Item content="타이피 모바일 애플리케이션 개발" skills={['Dart', 'Flutter', 'Swift', 'Kotlin']} />
            <Item content="사내에 필요한 각종 툴링 및 라이브러리 개발" skills={['TypeScript', 'Vite', 'SvelteKit']} />
            <Item content="회사 전체 AWS 및 쿠버네티스 인프라 운영 및 관리, 장애 대응" skills={['AWS', 'Kubernetes', 'Datadog']} />
            <Item
              content="글리프, 리더블, 에어테이크 서비스 개발"
              skills={['TypeScript', 'SvelteKit', 'GraphQL', 'Tiptap', 'ClickHouse']}
            />
          </Experience>
        </Experience>

        <Experience date="2022.01-2023.07" title="쿠키플레이스 COOKIEPLACE">
          <Experience date="2022.01-2023.07" title="CTO">
            {#snippet description()}
              커미션 중개 서비스 CREPE를 운영하는 주식회사 쿠키플레이스를 창업
              <br />
              파운더이자 CTO로서 전체 코드와 인프라를 구축하고 운영하는 등 DevOps 업무
            {/snippet}

            <Item content="CREPE 서비스 백엔드 전체 개발 및 재작성" skills={['TypeScript', 'Python', 'Django', 'GraphQL']} />
            <Item content="CREPE 서비스 프론트엔드 전체 개발 및 재작성" skills={['TypeScript', 'React', 'Next.js', 'GraphQL']} />
            <Item content="실시간 이미지 최적화 및 캐싱 서비스 개발" skills={['TypeScript', 'AWS Lambda']} />
            <Item content="회사 전체 AWS 및 쿠버네티스 인프라 운영 및 관리, 장애 대응" skills={['AWS', 'Kubernetes', 'Datadog']} />
          </Experience>
        </Experience>

        <Experience date="2021.06-2022.07" title="두나무 DUNAMU">
          <Experience date="2021.06-2022.07" title="업비트 플랫폼팀">
            {#snippet description()}
              두나무의 일부 인프라를 운영, 관리하는 등 DevOps 업무
              <br />
              두나무의 업비트 및 증권플러스 등 관련 서비스의 백엔드를 개발, 운영하는 등 DevOps 업무
            {/snippet}

            <Item content="AWS 및 쿠버네티스 인프라 운영 및 관리, 장애 대응" skills={['AWS', 'Kubernetes']} />
            <Item content="국내/해외 은행 입출금 연동 MSA 개발" skills={['Python', 'Django']} />
            <Item content="카카오톡, PASS 등 본인인증 연동 서비스 개발" skills={['Kotlin', 'Spring Boot']} />
          </Experience>
        </Experience>

        <Experience date="2020.04-2020.11" title="리디 RIDI">
          <Experience date="2020.04-2020.11" title="콘텐츠서비스그룹 개발센터 계정팀">
            {#snippet description()}
              리디북스 서비스의 백엔드를 개발, 운영하는 등 DevOps 업무
            {/snippet}

            <Item content="SSO 계정 인증 및 사내 서비스/서버간 인증 서버 개발" skills={['Python', 'Django']} />
            <Item content="구매목록, 책장 등 내서재 서비스 개발" skills={['Python', 'Django']} />
            <Item content="독서노트, 리뷰, 댓글 등 API 개발" skills={['Kotlin', 'Spring Boot']} />
            <Item content="내부 운영 및 관리툴, 인트라넷 개발" skills={['Python', 'Django', 'PHP']} />
          </Experience>
        </Experience>

        <Experience date="2016.11-2020.04" title="라인게임즈 LINE GAMES (前 넥스트플로어 NextFloor)">
          <Experience date="2017.05-2020.04" title="개발지원실 SDK개발팀">
            {#snippet description()}
              게임 퍼블리싱 조직의 SDK개발팀에서 자사 출시 게임용 SDK를 개발, 배포하는 업무
              <br />
              사내 및 협력 개발사의 개발팀을 대상으로 SDK 사용상의 기술적 대응을 하는 업무
            {/snippet}

            <Item content="게임 서버 프레임워크 개발 및 최적화" skills={['PHP']} />
            <Item content="Unity 게임 클라이언트용 SDK 개발" skills={['C#', 'Unity']} />
            <Item content="사내 인트라넷 서비스 개발" skills={['Python', 'Django', 'Flask', 'AWS Cognito']} />
            <Item content="게임에 필요한 서비스들을 API 서버로 개발" skills={['PHP']} />
            <Item content="테스트 및 배포 자동화 시스템 구축" skills={['GitLab CI', 'Jenkins']} />
          </Experience>

          <Experience date="2016.11-2017.05" title="모바일 CCG 게임 '데스티니 차일드' 개발팀">
            {#snippet description()}
              출시 직후의 게임 개발팀에서 추가 컨텐츠 및 신규 이벤트 등을 개발, 라이브 패치하는 업무
              <br />
              시즌제 레이드, 가챠 등의 컨텐츠를 SHIFTUP과 공동 개발
            {/snippet}

            <Item content="인하우스 엔진 게임 클라이언트 로직 개발" skills={['Lua']} />
            <Item content="게임 서버 로직 개발" skills={['PHP']} />
            <Item content="내부 개발툴 개발" skills={['C#', 'WinForm']} />
            <Item content="Git 도입 및 기존 SVN 서버와 같이 쓸 수 있도록 브릿지 구성" skills={['Python']} />
          </Experience>
        </Experience>

        <Experience date="2016.07-2016.11" title="모빌팩토리 MOBILFACTORY">
          <Experience date="2016.07-2016.11" title="모바일 SNG 게임 '마이리틀팜', '숲속농장' 개발팀">
            {#snippet description()}
              출시 2년차의 개발팀에서 게임 개발 및 라이브 운영 등 전체적인 개발과 DevOps를 진행하는 업무
            {/snippet}

            <Item content="Unity 게임 클라이언트 개발" skills={['C#', 'Unity']} />
            <Item content="게임 서버 개발" skills={['C#', 'ASP.NET MVC']} />
            <Item content="게임 운영툴 개발" skills={['C#', 'ASP.NET MVC', 'HTML']} />
            <Item content="인프라 자동화 구축 및 운영" skills={['AWS Elastic Beanstalk']} />
            <Item content="게임 로그 추출 및 지표 분석" skills={['Apache Spark']} />
          </Experience>
        </Experience>
      </Section>

      <Section title="기타 활동">
        <Experience date="2012-" title="오징어 IRC 네트워크">
          {#snippet description()}
            IRC 네트워크 운영 및 오픈소스 서버 소프트웨어 개발
          {/snippet}

          <Item content="오픈소스 IRC 서비스봇 ika 신규 개발" skills={['C++', 'Python', 'Kotlin']} />
          <Item content="이용자들의 쉬운 봇 개발을 위해 REST API와 웹소켓 API 서버를 개발" skills={['Python', 'Django']} />
        </Experience>

        <Experience date="2012-2013" title="SW Maestro">
          {#snippet description()}
            과학기술정보통신부 산하 SW Maestro 3기 과정
          {/snippet}

          <Item content="배포형 클라우드 제어 인터페이스 개발" skills={['OpenStack']} />
        </Experience>

        <Experience date="2010-" title="위키미디어 재단">
          {#snippet description()}
            오픈소스 PHP 위키 소프트웨어 "미디어위키" 개발
          {/snippet}

          <Item content="미디어위키 코어 및 확장기능의 기능 추가 및 버그 수정" skills={['PHP']} />
          <Item content="리뷰어 자격으로 다른 참여자들의 코드를 리뷰 및 머지" skills={['Gerrit']} />
          <Item content="미디어위키 소프트웨어의 한글 번역 작업에 기여" skills={['English']} />
          <Item content="현재 한국어 위키백과에서 조사 후처리를 위해 이용되고 있는 Josa 확장 기능 개발" skills={['PHP']} />
        </Experience>
      </Section>

      <Section title="발표">
        <Experience date="2017.08" title="PyCon Korea 2017에서 '얼렁뚱땅 파이썬 대소동' 세션 발표">
          {#snippet description()}
            파이썬에서 유용하게 이용할 수 있는 여러가지 흑마법들을 다룸 (150명 규모)
          {/snippet}
        </Experience>

        <Experience date="2015.08" title="PyCon Korea 2015에서 '파이썬 메모리 이모저모' 세션 발표">
          {#snippet description()}
            파이썬의 내부 메모리 저장 구조와 GC 등이 어떤 원리로 동작하는지 다룸 (400명 규모)
          {/snippet}
        </Experience>

        <Experience date="2014.08" title="PyCon Korea 2014에서 'Python 3.4: AsyncIO' 세션 발표">
          {#snippet description()}
            파이썬 3.4에서 새롭게 추가된 asyncio 모듈을 이용한 비동기 프로그래밍과 코루틴에 대해 다룸 (200명 규모)
          {/snippet}
        </Experience>
      </Section>

      <Section title="수상">
        <Experience date="2009">
          {#snippet description()}
            한국정보올림피아드 공모부문 중등부 전국 대상 (정보통신부 장관상)
          {/snippet}
        </Experience>

        <Experience date="2008">
          {#snippet description()}
            한국정보올림피아드 공모부문 초등부 서울특별시 금상
          {/snippet}
        </Experience>
      </Section>

      <Section title="자격증">
        <Experience date="2014">
          {#snippet description()}
            정보처리기능사
          {/snippet}
        </Experience>
      </Section>

      <Section title="학력">
        <Experience date="2012.03-2015.01">
          {#snippet description()}
            한국디지털미디어고등학교 졸업
          {/snippet}
        </Experience>
      </Section>

      <Section title="병역">
        <Experience date="2018.01.04-2020.11.03">
          {#snippet description()}
            현역 산업기능요원 복무 완료
          {/snippet}
        </Experience>
      </Section>
    </div>
  </main>

  <footer
    class={css({
      marginTop: '32px',
      width: 'full',
      maxWidth: '800px',
      fontWeight: 'medium',
      textAlign: 'right',
      fontSize: '14px',
      fontFamily: 'mono',
    })}
  >
    위 내용은 사실과 다름이 없음을 확인합니다.
    <br />
    <br />
    배 준현
  </footer>
</div>
