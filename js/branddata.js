    // 'A', 0,
    // 'B', 1,
    // 'C', 2,
    // 'D', 3,
    // 'E', 4,
    // 'F', 5,
    // 'G', 6,

const qnaList = [
    {
      q: '나는 패션에 관심이 많다.',
      a: [
        { answer: '그렇다.', type: [3, 2, 5, 6] },
        { answer: '아니다.', type: [0, 4] },
        { answer: '그저그렇다.', type: [1] },
      ]
    },
    {
      q: '나는 트렌드에 민감한 편이다.',
      a: [
        { answer: '그렇다.', type: [2, 3, 4, 5, 6] },
        { answer: '아니다.', type: [0] },
        { answer: '그저그렇다.', type: [1] },
      ]
    },
    {
      q: '나는 무신사에서 주로 구입한다.',
      a: [
        { answer: '그렇다.', type: [4, 5] },
        { answer: '아니다.', type: [0, 1, 2, 3, 6] },
      ]
    },
    {
      q: '베스트 브랜드를 이용한다.',
      a: [
        { answer: '그렇다.', type: [4, 2, 3, 5, 6] },
        { answer: '아니다.', type: [0, 1] },
      ]
    },
    {
      q: '나는 계절이 바뀌면 옷을 산다.',
      a: [
        { answer: '그렇다.', type: [2, 3, 6] },
        { answer: '아니다.', type: [0, 1, 4, 5] },
      ]
    },
    {
      q: '한번 살 때 좋은 옷을 산다.',
      a: [
        { answer: '그렇다.', type: [2, 3, 6] },
        { answer: '아니다.', type: [0, 1, 4, 5] },
      ]
    },
    {
      q: '명품을 좋아한다. 혹은 명품을 구매 후 즐겨 입는 편이다.',
      a: [
        { answer: '그렇다.', type: [2, 3, 6] },
        { answer: '아니다.', type: [0, 1, 4, 5] },
      ]
    },
    {
      q: '나만 아는 브랜드가 좋다.',
      a: [
        { answer: '그렇다.', type: [5] },
        { answer: '아니다.', type: [2, 3, 4, 6] },
        { answer: '브랜드는 신경안쓴다.', type: [0, 1] },
      ]
    },
    {
      q: '옷은 엄마가 사다 준다.',
      a: [
        { answer: '그렇다.', type: [0] },
        { answer: '아니다.', type: [1, 2, 3, 4, 5, 6] },
      ]
    },
    {
      q: '유명한 브랜드를 좋아한다.',
      a: [
        { answer: '그렇다.', type: [2, 3, 4, 6] },
        { answer: '아니다.', type: [5] },
        { answer: '그저그렇다.', type: [0, 1] },
      ]
    },
    {
      q: '스트릿 무드가 좋다.',
      a: [
        { answer: '그렇다.', type: [2] },
        { answer: '아니다.', type: [3, 4, 5, 6] },
        { answer: '신경쓰지않는다.', type: [0, 1] },
      ]
    },
    {
      q: '트렌디한 의상이 좋다.',
      a: [
        { answer: '그렇다.', type: [3, 4, 5] },
        { answer: '아니다.', type: [0, 1, 2, 6] },
      ]
    }
  ]

  const infoList = [
    {
      name: '패션에 관심 좀 가지세요 ... 아마.. 애인도 없...',
      desc: '패션에 큰 관심이 없는 당신. 그래도 이 테스트를 했다면 개선이 되어야 겠죠? 옷에 큰 돈을 들이지 않고도 패셔너블해 지고 싶다면 스파브랜드를 찾아보세요 !'
    },
    {
      name: '조금 더 노력해볼까요 ??',
      desc: '당신은 어느정도 패션에 관심이 있습니다. 큰 돈을 들이지 않고 트렌드 세터가 되고 싶다면 추천하는 패셔너블한 스파 브랜드 입니다!'
    },
    {
      name: '유니크한 패셔니스타 !',
      desc: '하이엔드 스트릿 매니아 일 것 같은 당신에게 추천하는 브랜드 ! 아무나 소유하지 못하는 이 브랜드들의 주인이 된다면 정말 짜릿하겠죠 ?'
    },
    {
      name: '지갑에서 돈이 줄줄 ~~',
      desc: '세계의 트랜드가 시작되는 브랜드를 접하는 당신은 바로 트렌드세터! 비싼 가격보다 멋진 트렌드의 주인공이 되고 싶은 당신에게 추천하는 브랜드 판타스틱4 !!'
    },
    {
      name: '나라사랑 ! 패션사랑 !',
      desc: '합리적인 가격에 우리나라 패션 트렌드를 즐기는 당신은 아마 무신사 스토어 고렙 유저시겠죠? 국내를 넘어 해외로도 널리 뻗어나가는 무신사 대표 브랜드 베스트5 !!'
    },
    {
      name: '나만 알았으면 좋겠어 ..',
      desc: '누구나 다 입는 브랜드는 싫고.... 예쁜 옷은 갖고 싶다?? 그렇다면 앞으로 떠오를 브랜드들을 찾아보는 것은 어떨까요 ?'
    },
    {
      name: '튜닝의 끝은 순정 !',
      desc: '심플 이즈 더 베스트 라는 모토를 가지고 있을 당신에게 추천하는 심플하면서도 높은 퀄리티의 브랜드들! 심플한 의상은 가장 오래 입을 수 있는 좋은 방법이죠 !'
    },  
  ]