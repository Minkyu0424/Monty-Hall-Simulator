[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMinkyu0424%2FMonty-Hall-Simulator&count_bg=%23FFBD26&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# 몬티 홀 문제 시뮬레이션 레포지토리

이 레포지토리는 유명한 확률 문제인 몬티 홀 문제(Monty Hall Problem)를 TypeScript와 Next.js를 사용하여 시뮬레이션하고 결과를 분석하는 프로젝트입니다. 이 시뮬레이션을 통해 몬티 홀 문제의 직관적인 이해를 돕고, 수학적 확률을 체험해 볼 수 있습니다.

## 🐐몬티 홀 문제 정의🚗

몬티 홀 문제는 다음과 같이 정의됩니다:

1. 당신은 세 개의 문 중 하나를 선택합니다. 하나의 문 뒤에는 자동차가 있고, 나머지 두 개의 문 뒤에는 염소가 있습니다.
2. 당신이 문을 선택하면, 진행자인 몬티 홀은 당신이 선택하지 않은 두 개의 문 중 염소가 있는 문 하나를 열어 보여줍니다.
3. 이제 당신은 처음 선택한 문을 고수할지 아니면 다른 닫힌 문으로 선택을 바꿀지 결정해야 합니다.

이 문제에서 많은 사람들이 직관적으로 처음 선택을 고수하는 것이나, 선택을 바꾸는 것에 대한 확률을 제대로 이해하지 못합니다. 실제로는 선택을 바꾸는 것이 자동차를 탈 확률을 1/3에서 2/3로 증가시킵니다.

<details>
  <summary><h2>프로젝트 요구사항</h2></summary>
   <div markdown="1">
<h3>이 프로젝트에서는 다음과 같은 요구기능들을 구현합니다:</h3>

1. **시뮬레이션 문의 개수**: 사용자가 시뮬레이션에서 몇 개의 문으로 실행할지 입력할 수 있어야 합니다.(정해진 개수 중 선택)
2. **시뮬레이션 실행 횟수**: 사용자가 시뮬레이션에서 몇 개의 문으로 실행할지 입력할 수 있어야 합니다.(정해진 개수 중 선택)
3. **시뮬레이션 실행**: 사용자가 선택을 바꾸는 경우와 선택을 바꾸지 않는 경우 각각에 대해 시뮬레이션을 실행합니다.
4. **결과 출력**: 두 가지 경우에 대해 시뮬레이션 결과를 보여줍니다.
5. **결과 기록**: 사용자가 누적해 얻은 결과에 대해 정리해서 보여줍니다.
</div>
</details>

<details>
  <summary><h2>설치 및 실행 방법</h2></summary>
   <div markdown="1">
이 프로젝트는 TypeScript와 Next.js로 작성되었습니다. 다음의 단계를 따라 프로젝트를 설치하고 실행할 수 있습니다:

1. **레포지토리 클론**

   ```bash
   git clone https://github.com/yourusername/monty-hall-simulation.git
   cd monty-hall-simulation
   ```

2. **필요한 패키지 설치**

   ```bash
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   npm run dev
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 이동하여 애플리케이션을 확인합니다.

</div>
</details>

<details>
  <summary><h2>미완성 요소</h2></summary>
  <ul>
    <li>- [ ] 결과만 보기 모드</li>
    <li>- [ ] 기록 조회 기능</li>
    <li>- [ ] 리팩토링 및 최적화</li>
  </ul>
</details>
